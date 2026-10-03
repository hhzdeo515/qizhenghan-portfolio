# 交付验收记录

日期：2026-10-03。

- npm run build：通过，Tailwind 4.3.3，本地静态产物生成成功。
- npm run check：通过，6个独立HTML、47个本地引用、5个竖铺iframe。
- 1280px浏览器：首屏、真实作品截图、项目封面点击、关于我导航已验证。
- 案例深链接：刷新后目标frame顶部为92px，符合导航高度。
- 折叠说明：展开后眼镜案例frame从1171px增至1269px，内容保持可见。
- AI核心：启动后aria-pressed为true，状态变为“正在感知 · VISION”；暂停路径保留。
- 390px嵌套iframe视口：home、ai-glasses、ad-review、aihuipi、profile五个子文档的clientWidth与scrollWidth均为375px（390px含滚动条），均无横向溢出。三个详情与profile的grid均为327.2px单列；home的hero为flex／column，两项宽327.2px与343.2px，未撑宽文档。此记录来自实际子文档尺寸，不把未生效的浏览器viewport设置算作通过。
- 最终首页截图已保存到本机`docs/qa/screenshots/final-home.jpg`（验收素材不上传仓库），主页y=0的首屏已展示给用户。
- 三个项目截图已人工查看，包含模拟/示例数据的说明保留。
- GitHub代码仓库：[qizhenghan-portfolio](https://github.com/hhzdeo515/qizhenghan-portfolio)。
- Vercel项目：hhzdeo/qizhenghan-portfolio；Git推送`2502f0c`触发的生产部署，[该次部署](https://qizhenghan-portfolio-d7pvq042d-hhzdeo.vercel.app)在验收时inspect状态为Ready、构建6秒，并绑定[正式站](https://qizhenghan-portfolio.vercel.app)。
- 正式站公开HTTP：通过现有代理、保留正常TLS验证取得HTTP 200，页面title为“齐正涵 · AI 产品与智能硬件”。这确认公开入口可达，不替代线上浏览器交互与多视口验收。
- 发布目录为dist，私有参考全文、简历和凭据不包含在站点产物；.env.local与.vercel均忽略。

线上完整浏览器交互仍待核验；未声称测试320/760/1000/1440/1600px或真实设备触摸操作。平台状态、公开HTTP和本地浏览器记录分别保留，不互相替代。
