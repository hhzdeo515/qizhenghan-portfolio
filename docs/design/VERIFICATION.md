# 交付验收记录

日期：2026-10-03。

- npm run build：通过，Tailwind 4.3.3，本地静态产物生成成功。
- npm run check：通过，6个独立HTML、47个本地引用、5个竖铺iframe。
- 1280px浏览器：首屏、真实作品截图、项目封面点击、关于我导航已验证。
- 案例深链接：刷新后目标frame顶部为92px，符合导航高度。
- 折叠说明：展开后眼镜案例frame从1171px增至1269px，内容保持可见。
- AI核心：启动后aria-pressed为true，状态变为“正在感知 · VISION”；暂停路径保留。
- 390px实际iframe视口：首页标题、按钮和单列排版已显示，顶层clientWidth与scrollWidth均为375px，无横向溢出。不是使用未生效的浏览器viewport设置代替验证。
- 三个项目截图已人工查看，包含模拟/示例数据的说明保留。
- GitHub代码仓库：https://github.com/hhzdeo515/qizhenghan-portfolio
- Vercel项目：hhzdeo/qizhenghan-portfolio；首次生产部署平台状态Ready；构建9秒，正式别名https://qizhenghan-portfolio.vercel.app。
- 发布目录为dist，私有参考全文、简历和凭据不包含在站点产物；.env.local与.vercel均忽略。

线上域名的公开HTTP与浏览器访问仍在核验；平台Ready不是外部访问成功的替代证据。未声称测试320/760/1000/1600px或真实设备触摸操作。
