# 岚连 Campus Link · 介绍与文档站

基于 **Vue 3 + Vite** 的多页面网站，包含软件介绍、使用文档、其他校园网连接方案制作教程。开发者：**NingMeng123**。

- 介绍页：`index.html`
- 使用文档：`guide.html`
- 方案教程：`adapters.html`
- 示例下载：`public/examples/custom-campus.example.json`

## 本地开发

使用 Node.js 24 LTS 和 npm：

```powershell
npm ci
npm run dev
```

终端显示本地地址。构建及校验：

```powershell
npm run build
npm run check
npm run preview
```

`dist/` 为可部署静态文件。三个独立 HTML 入口共享 Vue 应用，不需要服务器路由回退，支持直接访问文档链接。资源使用相对路径，可部署在 GitHub Pages 项目目录。站内搜索、移动端菜单和代码复制均由 Vue 实现，无后台服务或分析追踪。

## 内容维护

| 文件 | 内容 |
| --- | --- |
| `src/Home.vue` | 软件介绍与客户端界面示意 |
| `src/App.vue` | 公共导航、文档布局、搜索、代码复制 |
| `src/content.js` | 文档导入、目录与搜索索引 |
| `src/style.css` | 桌面与移动端样式 |
| `content/guide.html` | 使用文档 HTML 片段 |
| `content/adapters.html` | 方案制作教程 HTML 片段 |
| `examples/`、`public/examples/` | 页面展示及下载示例，应保持一致 |

文档是仓库维护者撰写的静态 HTML，通过 `v-html` 渲染；不要把访客提交的 HTML 或远程不可信内容接入此位置。代码复制前按纯文本读取，示例中的模板变量不会作为 Vue 模板执行。

完整示例的 `data-example="full"` 占位由 `src/content.js` 注入，新增带 `id` 的标题会加入目录和站内搜索。发布前运行校验，确保页面锚点与示例链接有效。

教程中提到的 `electron/profiles.cjs` 属于**桌面客户端源码**，并非本网站文件。只有网站源码时，请在岚连客户端中导入 JSON，由客户端执行完整格式校验。示例域名和运营商值为占位内容，需要按学校实际认证协议替换。

## 部署

仓库推送到 `main` 后，GitHub Actions 会安装锁定的依赖、构建、校验并将 `dist/` 部署到 GitHub Pages。仓库 Settings → Pages 的 Source 应为 **GitHub Actions**。也可将 `dist/` 放入其他静态网站服务器。

本仓库仅包含网站和文档。软件源码及发行入口指向独立的 [CampusLink 仓库](https://github.com/65658dsf/CampusLink)，不在 CampusLinkPages 上传客户端源码或安装包。版本更新时同步首页、文档版本和客户端发布页链接。

网站首页的客户端画面为界面示意，不包含真实认证信息，也不检测访问者的校园网状态。介绍站与学校或认证服务商没有官方隶属关系。

参考：[Vue 官方快速开始](https://vuejs.org/guide/quick-start.html) · [Vite 部署说明](https://vite.dev/guide/static-deploy.html#github-pages)
