# 齐正涵 · 个人网站与作品集

网站：[qizhenghan-portfolio.vercel.app](https://qizhenghan-portfolio.vercel.app) · [设计与实现验收](docs/design/VERIFICATION.md)

科技感、智能硬件与 AI Native 风格的个人网站。访客可以了解齐正涵的职业方向、产品方法和三个代表项目：AI 眼镜智能助手、广宣审核 Agent、AI 慧批。

## 本地运行

需要 Node.js 20 或更新版本。

```bash
npm install
npm run build
npm run check
npm run dev
```

打开 http://127.0.0.1:4173。通过 HTTP 预览，避免 file:// 影响 iframe 的来源校验和尺寸通信。

## 文件结构

- index.html：入口、全局导航、五个纵向排列的 iframe。
- home.html：个人首屏、原创 AI 核心交互、精选作品。
- profile.html：身份介绍、产品方法、GitHub 入口。
- projects/ai-glasses.html：AI 眼镜智能助手案例。
- projects/ad-review.html：广宣审核 Agent 案例。
- projects/aihuipi.html：AI 慧批案例。
- assets/input.css：Tailwind 源与共用设计样式。
- assets/site.js / assets/shell.js：交互、iframe 高度与锚点定位。
- assets/images：自己的真实产品截图，页面注明模拟或测试数据。
- scripts：构建、预览、静态检查。
- docs/design：个人站 UX 分析、信息架构、视觉与实现规范。

所有 HTML 页面可独立访问。入口将全部页面竖向展示，作品按钮定位到对应案例；折叠说明展开时 iframe 高度自动同步。

## 发布到 Vercel

导入本 GitHub 仓库，Framework Preset 使用 Other，Build Command 为 npm run build，Output Directory 为 dist。配置已写入 vercel.json。连接 GitHub 后，推送到 main 会触发部署。

## 设计与素材

参考 [Orb](https://lersent001.github.io/orb/) 的智能核心状态表达、[SuperOPC](https://superopc.app/web) 的作品组织以及 [Supaste](https://www.supaste.com/) 的留白与叙事节奏。研究过程沿用 [AI Website Cloner Template](https://github.com/JCodesMore/ai-website-cloner-template) 的观察、拆分与规范方法；最终按独立 HTML + Tailwind 的要求实现。

UI 图标使用 [Lucide](https://lucide.dev/)（ISC，许可证位于 assets/vendor/LICENSE-lucide.txt），样式使用 [Tailwind CSS](https://tailwindcss.com/)（MIT）。首屏核心插画由本站 CSS 实现，没有复用第三方视频。项目截图来自本人项目，不使用占位图。

展示项目的实际实现和能力边界，不把开发集、模拟任务或简历自述转换为已核验的商业结果。完整简历、联系方式、私人参考文档及研究原始文件不会进入部署产物。
