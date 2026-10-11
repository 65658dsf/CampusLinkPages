<script setup>
import { computed, onMounted, onUnmounted, ref, nextTick } from 'vue';
import Home from './Home.vue';
import { documents, searchIndex } from './content';
const page = location.pathname.endsWith('adapters.html') ? 'adapters' : location.pathname.endsWith('guide.html') ? 'guide' : 'index';
const documentPage = documents[page];
const menuOpen = ref(false), searchDialog = ref(null), searchInput = ref(null), query = ref(''), showTop = ref(false), toast = ref(''), activeSection = ref('');
const nav = [{ id: 'index', label: '软件介绍' }, { id: 'guide', label: '使用文档' }, { id: 'adapters', label: '方案制作' }];
const results = computed(() => { const terms = query.value.trim().toLowerCase().split(/\s+/).filter(Boolean); return terms.length ? searchIndex.filter(item => terms.every(term => (item.title + ' ' + item.text).toLowerCase().includes(term))).slice(0, 16) : searchIndex.filter(item => !item.category).concat(searchIndex.filter(item => /自启动|响应规则|quick-start|抓取/.test(item.title + item.url))).slice(0, 8); });
let toastTimer, observer;
function notify(message) { clearTimeout(toastTimer); toast.value = message; toastTimer = setTimeout(() => toast.value = '', 2800); }
async function openSearch() { query.value = ''; searchDialog.value.showModal(); await nextTick(); searchInput.value.focus(); }
function closeSearch(event) { if (event.target === searchDialog.value) { const box = searchDialog.value.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) searchDialog.value.close(); } }
async function copyCode(event) {
  const button = event.target.closest('.copy-button');
  if (!button) return;
  const text = button.parentElement.querySelector('code').textContent;
  try { await navigator.clipboard.writeText(text); notify('代码已复制，请替换为学校的实际配置。'); }
  catch { const selection = getSelection(); const range = document.createRange(); range.selectNodeContents(button.parentElement.querySelector('code')); selection.removeAllRanges(); selection.addRange(range); notify('代码已选中，请按 Ctrl+C 复制。'); }
}
function keyHandler(event) {
  if (event.key === 'Escape' && searchDialog.value.open) { event.preventDefault(); searchDialog.value.close(); return; }
  if (event.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(event.target.tagName) && !event.target.isContentEditable && !searchDialog.value.open) { event.preventDefault(); openSearch(); }
}
function scrollHandler() { showTop.value = window.scrollY > 650; }
function scrollTop() { window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }
onMounted(() => {
  document.addEventListener('keydown', keyHandler); window.addEventListener('scroll', scrollHandler, { passive: true }); scrollHandler();
  observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) activeSection.value = entry.target.id; }, { rootMargin: '-100px 0px -60% 0px' });
  document.querySelectorAll('.prose h2[id]').forEach(element => observer.observe(element));
  if (location.hash) requestAnimationFrame(() => document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView());
});
onUnmounted(() => { clearTimeout(toastTimer); observer?.disconnect(); document.removeEventListener('keydown', keyHandler); window.removeEventListener('scroll', scrollHandler); });
</script>

<template>
  <a class="skip-link" href="#main">跳到正文</a>
  <header class="site-header">
    <div class="wrap header-inner">
      <a class="brand" href="index.html" aria-label="岚连 Campus Link 首页"><img src="/assets/logo.svg" alt="" width="38"
          height="38"><span>岚连<i>Campus Link</i></span></a>
      <nav class="desktop-nav" aria-label="主导航"><a v-for="item in nav" :key="item.id" :href="`${item.id}.html`"
          :aria-current="page === item.id ? 'page' : undefined">{{ item.label }}</a></nav>
      <div class="header-actions"><button class="search-toggle" type="button" aria-label="搜索文档" @click="openSearch"><svg
            viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="8.5" cy="8.5" r="5.3" stroke="currentColor" stroke-width="1.5" />
            <path d="m12.5 12.5 4 4" stroke="currentColor" stroke-width="1.5" />
          </svg><span>搜索文档</span><kbd>/</kbd></button><a class="github-link"
          href="https://github.com/65658dsf/CampusLinkPages" aria-label="GitHub 仓库"><svg viewBox="0 0 24 24"
            fill="currentColor" aria-hidden="true">
            <path
              d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.83c.85 0 1.71.11 2.51.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2" />
          </svg></a><button class="menu-toggle" :aria-expanded="menuOpen" aria-controls="mobile-nav"
          @click="menuOpen = !menuOpen">菜单 <span aria-hidden="true">☰</span></button></div>
    </div>
    <nav v-show="menuOpen" id="mobile-nav" class="mobile-nav" aria-label="移动主导航"><a v-for="item in nav" :key="item.id"
        :href="`${item.id}.html`" :aria-current="page === item.id ? 'page' : undefined">{{ item.label }}</a></nav>
  </header>
  <main id="main">
    <Home v-if="page === 'index'" /><template v-else>
      <div class="doc-hero wrap">
        <p class="eyebrow">{{ documentPage.eyebrow }}</p>
        <h1>{{ documentPage.heading }}</h1>
        <p>{{ documentPage.sub }}</p><span class="doc-version">文档 / v1.1.0</span>
      </div>
      <div class="doc-layout wrap">
        <aside class="doc-sidebar" aria-label="文档目录"><span class="doc-sidebar-label">本页内容</span>
          <nav><a v-for="section in documentPage.sections" :key="section.id" :href="`#${section.id}`"
              :class="{ active: activeSection === section.id }">{{ section.text }}</a></nav><a class="sidebar-example"
            href="examples/custom-campus.example.json" download>↓ 下载 JSON 示例</a><span class="sidebar-version">适用于客户端
            v1.1.0<br>文档维护：NingMeng123</span>
        </aside>
        <article class="prose">
          <div v-html="documentPage.content" @click="copyCode"></div>
          <div class="doc-end"><span>还有疑问？</span><a href="https://github.com/65658dsf/CampusLinkPages/issues">在 GitHub
              反馈文档问题 ↗</a></div>
        </article>
      </div>
    </template>
  </main>
  <footer class="site-footer">
    <div class="wrap footer-top"><a class="brand" href="index.html"><img src="/assets/logo.svg" alt="" width="32"
          height="32"><span>岚连<i>Campus Link</i></span></a>
      <p class="footer-caption"><span>连接，从简单开始。</span><a class="icp-link" href="https://beian.miit.gov.cn/"
          target="_blank" rel="noopener noreferrer">渝ICP备2026005420号-1</a></p>
      <div><a href="guide.html">使用文档</a><a href="adapters.html">方案制作</a><a href="https://github.com/65658dsf">开发者 ↗</a>
      </div>
    </div>
    <div class="wrap footer-bottom"><span>© 2026 NingMeng123 · Campus
        Link</span><span>独立校园网辅助工具，与学校或认证服务商无官方隶属关系。</span>
    </div>
  </footer>
  <dialog ref="searchDialog" class="search-dialog" aria-labelledby="search-title" @click="closeSearch">
    <form method="dialog">
      <h2 id="search-title">搜索文档</h2><button class="dialog-close" aria-label="关闭搜索">×</button>
    </form><label class="sr-only" for="doc-search">搜索关键词</label><input id="doc-search" ref="searchInput" v-model="query"
      type="search" placeholder="试试「自启动」「JSON」「响应规则」" autocomplete="off">
    <p id="search-summary" role="status">{{ query ? `找到 ${results.length} 项结果` : '从这些内容开始' }}</p>
    <ul id="search-results">
      <li v-for="result in results" :key="result.url"><a :href="result.url" @click="searchDialog.close()"><strong>{{
        result.title }}</strong><span>{{ result.category || result.text }}</span></a></li>
      <li v-if="!results.length" class="search-empty">没有找到相关内容，试试更短的关键词。</li>
    </ul>
    <p class="search-help">搜索在本地完成 · 按 Esc 关闭</p>
  </dialog>
  <button v-show="showTop" class="back-top" aria-label="回到顶部" @click="scrollTop">↑</button>
  <div v-show="toast" class="toast" role="status" aria-live="polite">{{ toast }}</div>
</template>
