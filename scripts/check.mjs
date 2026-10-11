import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const pages = { index:read('src/Home.vue'), guide:read('content/guide.html'), adapters:read('content/adapters.html') };
const globalIds = ['main','mobile-nav','search-title','doc-search','search-summary','search-results'];
for (const [name, source] of Object.entries(pages)) {
  const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);
  assert.equal(new Set(ids).size, ids.length, `${name}: duplicate anchors`);
  for (const match of source.matchAll(/href="([^"#]*)(?:#([^"]+))?"/g)) {
    const [, href, hash] = match;
    if (/^(?:https?:|mailto:)/.test(href)) continue;
    if (href.endsWith('.json')) { assert.ok(fs.existsSync(path.join(root, 'public', href)), href); continue; }
    const target = href ? href.replace('.html','') : name;
    assert.ok(target in pages, `Unknown page: ${href}`);
    if (hash) assert.ok(globalIds.includes(hash) || pages[target].includes(`id="${hash}"`), `Missing anchor: ${href}#${hash}`);
  }
}
const example = JSON.parse(read('public/examples/custom-campus.example.json'));
assert.deepEqual(example, JSON.parse(read('examples/custom-campus.example.json')));
assert.equal(example.schemaVersion,1); assert.equal(example.protocol,'http');
for(const operation of ['login','logout','status']) {
  assert.ok(example.operations[operation]);
  assert.equal(new URL(example.operations[operation].url).origin, new URL(example.homepage).origin);
}
assert.equal(example.operations.status.method,'GET');
for(const name of Object.keys(pages)) {
  const built=read(`dist/${name}.html`);
  assert.ok(built.includes('lang="zh-CN"'));
  for(const m of built.matchAll(/(?:src|href)="(\.\/assets\/[^"?#]+)"/g)) assert.ok(fs.existsSync(path.join(root,'dist',m[1])),m[1]);
}
console.log('Checked 3 pages: anchors, example download, JSON consistency and production assets.');
