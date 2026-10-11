<template>
  <section class="hero wrap" aria-labelledby="hero-title">
    <div class="hero-copy">
      <p class="eyebrow"><span class="live-dot"></span> 为校园生活，留一点轻松</p>
      <h1 id="hero-title">连上校园，<br>回到你<span class="accent">热爱的事。</span></h1>
      <p class="hero-description">岚连 Campus Link，把校园网认证、断线重连和启动偏好放在一个安静、清晰的桌面窗口里。支持 Windows 与 macOS。</p>
      <div class="hero-actions"><a class="button primary" href="#download">获取桌面客户端 <span
            aria-hidden="true">↗</span></a><a class="text-link" href="guide.html">从这里开始 <span
            aria-hidden="true">→</span></a></div>
      <p class="hero-meta">WINDOWS / macOS <span>·</span> v1.1.0 <span>·</span> 本地管理</p>
      <div class="hero-note"><span class="note-line"></span> 少一点重复登录，多一点校园的精彩。</div>
    </div>
    <div class="product-stage">
      <div class="stage-orbit orbit-one"></div>
      <div class="stage-orbit orbit-two"></div>
      <div class="product-window" aria-label="岚连已登录界面示意，不代表当前网络状态">
        <div class="window-bar"><span><img src="/assets/logo.svg" width="19" height="19" alt=""> 岚连 Campus
            Link</span><span class="window-controls" aria-hidden="true">— &nbsp; □ &nbsp; ×</span></div>
        <div class="window-content">
          <div class="mini-sidebar"><img src="/assets/logo.svg" width="36" height="36" alt=""><span
              class="mini-selected">▦</span><span>◇</span><span>≡</span><span>⚙</span></div>
          <div class="mini-main">
            <div class="mini-heading"><span>连接概览</span><span class="mini-version">v1.1.0</span></div>
            <div class="mini-status"><span class="status-pill"><i></i> 已通过校园网认证</span>
              <h2>校园生活，即刻在线。</h2>
              <p>连接已就绪，去做喜欢的事吧。</p><svg class="wifi-symbol" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <path d="M15 37Q50 8 85 37M27 52Q50 31 73 52M39 66Q50 56 61 66" stroke="currentColor" stroke-width="7"
                  stroke-linecap="round" />
                <circle cx="50" cy="79" r="4" fill="currentColor" />
              </svg>
            </div>
            <div class="mini-session">
              <div class="school-icon" aria-hidden="true">⌂</div>
              <div><strong>贵州轻工职业大学</strong><span>校园网 · 内置连接方案</span></div><span class="online-pill">已登录</span>
            </div>
            <div class="mini-settings"><span>断线自动重连 <i class="mini-switch"></i></span><span>检测间隔 30 秒</span></div>
            <div class="mini-foot"><span>✓ 本机保存 · 清晰可控</span><span>界面示意</span></div>
          </div>
        </div>
      </div>
      <div class="floating-note"><span class="floating-check">✓</span>
        <div><strong>连接状态，一眼就懂</strong><span>已登录时，直接显示会话信息</span></div>
      </div>
      <span class="stage-caption">A LITTLE LESS FRICTION. A LITTLE MORE CAMPUS.</span>
    </div>
  </section>
  <div class="trust-strip">
    <div class="wrap"><span><svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M3 4l6-1v6H3zm8-1l6-1v7h-6zM3 11h6v6l-6-1zm8 0h6v7l-6-1z" fill="currentColor" />
        </svg>Windows / macOS</span><span>内置贵州轻工职业大学方案</span><span>支持 JSON 方案扩展</span><span>开发者 NingMeng123</span></div>
  </div>
  <section class="wrap feature-section" id="features">
    <div class="section-heading">
      <div>
        <p class="eyebrow">THOUGHTFULLY CONNECTED</p>
        <h2>需要的功能，<br>刚好都在。</h2>
      </div>
      <p>从打开电脑，到开始学习。<br>让网络认证成为顺手的小事。</p>
    </div>
    <div class="feature-list">
      <article><span class="feature-number">01 / CONNECT</span>
        <h3>连接之后，继续守护</h3>
        <p>启动先检查状态。在线后默认每 30 秒检测，明确断线时尝试重连；间隔可调，手动注销即暂停。</p><a class="text-link" href="guide.html#reconnect">了解网络守护
          <span>↗</span></a>
      </article>
      <article><span class="feature-number">02 / YOUR CHOICE</span>
        <h3>如何启动，由你选择</h3>
        <p>开机自启动、启动后自动连接，分别设置。关闭到托盘，让窗口在需要时再出现。</p><a class="text-link" href="guide.html#startup">设置启动偏好
          <span>↗</span></a>
      </article>
      <article><span class="feature-number">03 / MAKE IT YOURS</span>
        <h3>把你的学校，加进来</h3>
        <p>用一份 JSON 描述认证请求。导入新方案、切换学校，让同一个工具适应更多校园。</p><a class="text-link" href="adapters.html">制作连接方案
          <span>↗</span></a>
      </article>
    </div>
  </section>
  <section class="campus-section">
    <div class="wrap campus-grid">
      <div class="campus-art" aria-hidden="true">
        <div class="map-grid"></div>
        <div class="map-path"></div>
        <div class="map-node node-laptop"><svg viewBox="0 0 40 40" fill="none">
            <rect x="9" y="8" width="22" height="18" rx="2" stroke="currentColor" stroke-width="2" />
            <path d="M5 30h30M17 26v4m6-4v4" stroke="currentColor" stroke-width="2" />
          </svg></div>
        <div class="map-node node-campus"><svg viewBox="0 0 48 48" fill="none">
            <path d="M6 20L24 10l18 10-18 10zM12 24v11l12 6 12-6V24m6-4v14" stroke="currentColor" stroke-width="2.4"
              stroke-linejoin="round" />
          </svg></div>
        <div class="map-label label-local">你的电脑</div>
        <div class="map-label label-campus">校园认证服务</div>
        <div class="map-badge"><span class="live-dot"></span> 让连接，简单发生</div>
      </div>
      <div class="campus-copy">
        <p class="eyebrow">START WITH YOUR CAMPUS</p>
        <h2>从一所学校出发，<br>为更多校园留好位置。</h2>
        <p>内置贵州轻工职业大学 Dr.COM 认证方案。连接校园 Wi-Fi 或网线后，在应用中选择学校，即可开始认证。</p>
        <p>其他学校可以导入符合规范的 HTTP 方案。详细教程会带你从真实请求，走到第一份可用的配置。</p><a class="text-link"
          href="adapters.html#adapters-fit">看看你的学校是否适用 <span>→</span></a>
        <div class="campus-facts"><span><b>01</b>内置学校方案</span><span><b>JSON</b>声明式扩展</span><span><b>本地</b>管理账号与偏好</span>
        </div>
      </div>
    </div>
  </section>
  <section class="wrap get-started-section">
    <div class="section-heading">
      <div>
        <p class="eyebrow">YOUR FIRST CONNECTION</p>
        <h2>三步，开始使用。</h2>
      </div><a class="text-link" href="guide.html">阅读完整使用文档 <span>↗</span></a>
    </div>
    <ol class="onboarding">
      <li><span>1</span>
        <h3>接入校园网络</h3>
        <p>先连接学校 Wi-Fi 或网线，确认可以打开认证页。</p>
      </li>
      <li><span>2</span>
        <h3>选择学校并认证</h3>
        <p>选择连接方案，输入账号密码；已登录时会直接显示在线。</p>
      </li>
      <li><span>3</span>
        <h3>设置你的偏好</h3>
        <p>按需设置启动方式和检测间隔；断线自动重连默认开启。</p>
      </li>
    </ol>
  </section>
  <section class="wrap resource-section" id="learn"><a class="resource-card" href="guide.html"><span
        class="resource-label">GUIDE / 01</span>
      <h2>用起来，<br>不必靠摸索。</h2>
      <p>从第一次登录到活动日志，找到每一个开关的用法。</p><span class="resource-link">使用文档 <span>↗</span></span>
    </a><a class="resource-card developer-resource" href="adapters.html"><span class="resource-label">BUILD / 02</span>
      <h2>为自己的学校，<br>写一份连接方案。</h2>
      <p>请求抓取、字段映射、响应规则、导入调试，逐步讲清。</p><span class="resource-link">方案制作教程 <span>↗</span></span><span
        class="code-decoration" aria-hidden="true">{ }</span>
    </a></section>
  <section class="wrap download-section" id="download">
    <div>
      <p class="eyebrow">READY WHEN YOU ARE</p>
      <h2>把连接交给岚连。<br><span>把时间留给自己。</span></h2>
      <p>Windows x64 · macOS x64 / arm64 · v1.1.0</p>
    </div>
    <div class="download-actions"><a class="button primary"
        href="https://github.com/65658dsf/CampusLink/releases">前往客户端发布页 <span aria-hidden="true">↗</span></a><a
        class="text-link" href="https://github.com/65658dsf/CampusLink">查看软件源码 <span>↗</span></a>
      <p>Windows 安装程序 · macOS DMG / ZIP<br>软件源码与发行文件仅由 CampusLink 仓库维护。<br>安装与升级前，请先退出旧版客户端。</p>
    </div>
  </section>

</template>
