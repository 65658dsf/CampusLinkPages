import guide from '../content/guide.html?raw';
import adapters from '../content/adapters.html?raw';
import example from '../examples/custom-campus.example.json?raw';
const escape = text => text.replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
const titles = content => [...content.matchAll(/<h2\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g)].map(m => ({ id:m[1], text:m[2].replace(/<[^>]*>/g, '') }));
const prepare = content => content.replace(/<code data-example=['"]full['"]><\/code>/g, `<code data-example="full">${escape(example)}</code>`).replace(/<pre([^>]*)>/g, '<div class="code-block"><button type="button" class="copy-button" aria-label="复制代码">复制代码</button><pre$1 tabindex="0">').replace(/<\/pre>/g, '</pre></div>');
export const documents = {
  guide: { label: '使用文档', heading:'用起来，不必靠摸索。', sub:'从第一次连接，到每一个顺手的设置。', eyebrow:'CAMPUS LINK / USER GUIDE', sections:titles(guide), content:prepare(guide) },
  adapters: { label:'方案制作', heading:'把你的学校，加进来。', sub:'从一条真实请求，走到一份可用的连接方案。', eyebrow:'CAMPUS LINK / ADAPTER LAB', sections:titles(adapters), content:prepare(adapters) }
};
export const searchIndex = [{title:'软件介绍', text:'Windows 客户端 功能 下载', url:'index.html'}, ...Object.entries(documents).flatMap(([slug, page]) => {
  const items = [{ title:page.label, text:page.sub, url:`${slug}.html` }];
  const parts = page.content.split(/(?=<h[23]\b)/);
  for (const part of parts) {
    const heading = part.match(/^<h[23]\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/h[23]>/);
    if (heading) items.push({title:heading[2].replace(/<[^>]+>/g,''),text:part.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').slice(0,2000),url:`${slug}.html#${heading[1]}`, category:page.label});
  }
  return items;
})];
