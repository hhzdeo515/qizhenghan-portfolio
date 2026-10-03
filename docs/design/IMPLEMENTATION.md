# 齐正涵个人网站 · 实现交接

日期：2026-10-03。体验与视觉契约见[个人网站UX与UI Spec](./个人网站-UX与UI.spec.md)。静态作品集已部署至[正式站](https://qizhenghan-portfolio.vercel.app)，公开HTTP 200与title已核验；这不表示三个展示项目已公开部署应用后端。

## 文件职责

| 文件 | 职责 |
|---|---|
| `index.html` | 元数据、粘性导航、五个iframe、无JS独立页入口 |
| `home.html` | 个人首屏、光学核心、精选作品目录 |
| `projects/ai-glasses.html` | 眼镜原型案例，模拟硬件边界与代码链接 |
| `projects/ad-review.html` | 审核案例，测试截图与人工判断边界 |
| `projects/aihuipi.html` | 慧批案例，本地版本说明 |
| `profile.html` | 个人定位、产品方法、GitHub及Footer |
| `assets/input.css` | Tailwind入口、源码扫描范围、本站tokens与组件样式 |
| `assets/styles.css` | Tailwind CLI输出，HTML实际加载；不直接编辑 |
| `assets/shell.js` | 父页消息校验、iframe高度、hash与滚动定位 |
| `assets/site.js` | 子页高度上报、跨iframe定位、核心视觉状态 |
| `assets/images/` / `assets/vendor/` | 自身项目截图／图标等站点资源、构建复制的Lucide本地脚本 |

技术为独立HTML＋Tailwind CSS 4＋原生JavaScript。五个子页始终同时存在、自然竖铺；不引入Next.js路由、iframe换src、选项卡切页或业务表单。模板参考只用于研究和规范的方法，不声称运行过其完整自动克隆命令。

## 构建与本地预览

首次使用在仓库根目录安装 `package.json` 依赖，再按顺序执行：

```powershell
npm install
npm run build
npm run check
npm run dev
```

`npm run css` 只生成CSS；`npm run build`先生成CSS，再复制HTML、projects、assets及Lucide至`dist/`。预览服务提供`http://127.0.0.1:4173/`，只监听本机。修改源码后重建，因为dev读取dist；直接打开file地址不属于消息合同支持方式。

构建收集站点文件，不复制docs、research、tools和.env；发布前确认dist没有手工加入的私密文件。`npm run check`检查根层禁入目录和本地引用，不等同扫描全部文件内容。

## 内容与样式维护

- 改文案同时核对首页卡片、详情页、title／description与caption；本人姓名和方向与当前用户授权一致。
- 新截图必须来自自身实际运行界面；模拟硬件、测试任务、本地版本分别写清。不要把图中比例或测试结果写成效果承诺。
- 共享颜色、布局、断点与状态在input.css维护；只改所需HTML的内容，不复制一套样式。当前断点为≤760、≤1000、≥1600px。
- 新图保留真实width／height和alt；详情截图附figcaption。作品卡使用裁切展示，详情保留可读上下文。
- 外部链接使用真实地址和`target="_blank" rel="noopener noreferrer"`；暂无地址的项目保持静态，不填`href="#"`。
- 项目能力以当前代码和README为准，技术详情与限制放原生details；不公开私有飞书原文、简历私密信息、账号、凭据或学生资料。
- 历史Supaste及AI慧批八段文档不作为当前页面结构依据；新增页面需先明确是否改变用户要求的五iframe组合。

## 父子文档合同

所有iframe与父页同源。子页data-page必须等于父页data-frame；resize发送`portfolio:resize`及page／height，navigate发送`portfolio:navigate`及目标page／可选work锚点。

父页校验origin与登记source；resize还校验发送者page及有限正高度小于30000，navigate限制目标frame与anchor。不传任意URL，不用通配targetOrigin，不将第三方内容放入受信任iframe。

嵌入时html添加is-embedded并隐藏自身overflow；高度为body实际边界向上取整再加2px，ResizeObserver通过requestAnimationFrame去重上报。新增展开内容或异步图片要沿此合同更新，不能依赖固定iframe高；无JS以index中的独立页链接回退。iframe当前不设sandbox，属于可信本站文档，不是第三方安全容器。

父页在frame和父页load后发送`portfolio:measure`，子页校验同origin与parent source后清零缓存重新上报。首次hash等待全部五个frame收到有效高度，再立即定位；`history.scrollRestoration="manual"`配合popstate立即定位，防止原生历史恢复与父页测量竞争。

## 验证与交付

实际1280px浏览器已检查导航和核心交互；390px嵌套iframe视口中五个子文档clientWidth与scrollWidth均为375px，单列与无横向溢出已检查，其他尺寸和真实设备触摸仍待测。Git推送`2502f0c`触发的生产部署Ready、构建6秒并绑定正式别名；公开HTTP通过，线上完整浏览器交互待核验。详见[验收记录](./VERIFICATION.md)，以下清单不表示全部通过。

- `npm run check`目前覆盖6个HTML的语言／viewport、本地src／href存在、外链保护、index五iframe数量及dist根层禁入项。
- 浏览器验证320／390／760／1000／1440／1600px：没有横向滚动、详情不裁切，展开折叠和图片加载后的frame高度正确。
- 验证作品／返回／关于我／顶部／前进后退及深链接；确认只是滚动，五iframe的src与可见性不变。
- 验证核心启动、暂停、标签与状态文字；键盘操作、焦点可见、减少动效有效，外部GitHub链接正常。
- 验证错误消息不改height或滚动；确认caption和能力边界未丢失，部署产物不含私有研究文件。
- 记录实际检查命令和浏览器结果，区分已通过、未测与待改；不得以规范中的验收条目代替执行证据。发布静态产物仅使用dist目录。
