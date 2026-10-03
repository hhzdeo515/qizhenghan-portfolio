# 齐正涵个人网站 · UX 与 UI Spec

版本：1.0 · 2026-10-03。本文记录当前 HTML 实现，后续修改应同时更新代码与规范。

当前目标是让访客认识齐正涵，并通过作品理解其 AI Native、智能硬件、多模态交互与 Agent 工作流方向。先前 AI慧批产品营销首页及 Supaste 八段规范保留为历史，不约束本个人站；本站没有 `/app`、注册或免费试用入口。

## 1. 用户需求与体验任务

- 首次访客：首屏知道姓名、产品方向和一句主张，能够直接浏览作品。
- 合作方或招聘者：看见具体项目、运行界面、产品关注点及能力边界，判断讨论空间。
- 技术访客：展开实现信息，沿真实 GitHub 链接继续查看；没有公开链接时不提供假入口。
- 核心路径：认识齐正涵 → 精选作品 → 具体案例 → 产品方法 → GitHub。这里是作品集，不是某一产品的转化漏斗。
- 核心功能：作品目录、三份案例、关于我、可启动的视觉核心、原生折叠说明、页内定位及外部代码链接。
- 首页主动作是“查看我的作品”，次动作是“关于我”；导航“探索作品”和作品卡均缩短浏览路径。
- 阅读不要求登录，不收集联系方式，不开启摄像头、麦克风或调用模型；项目截图不提供真实业务操作。

## 2. 信息架构与独立页面映射

| 文档／frame 标识 | 内容 | index 中的位置 |
|---|---|---|
| `index.html` | 唯一组合外壳：粘性导航、跳过链接、五个 iframe | 顶层文档 |
| `home.html` / `home` | 个人主张、核心交互、方向条、三项精选作品 | 1 |
| `projects/ai-glasses.html` / `ai-glasses` | AI 眼镜智能助手、工作流与模拟边界 | 2 |
| `projects/ad-review.html` / `ad-review` | 广宣审核 Agent、人工判断与整改追溯 | 3 |
| `projects/aihuipi.html` / `aihuipi` | AI 慧批、教师复核与学情 | 4 |
| `profile.html` / `profile` | 本人介绍、三项产品方法、GitHub 与页尾 | 5 |

五个 iframe 始终竖向铺开，导航只定位滚动，不换 `src`、不隐藏其他页面、不切换 iframe 内容。每个子页都可独立打开；独立模式下返回与跨页链接使用真实 `index.html#…` 地址。首页作品布局是两张大卡（眼镜、慧批）加一条审核案例横行；下方案例顺序仍为眼镜、审核、慧批。

## 3. 视觉来源与实施边界

[Orb](https://lersent001.github.io/orb/) 提供金属核心、材质和可变状态的参考，公开页面及其 JS 可检查；本站用原创 CSS 球体、轨道和节点表达感知／理解／行动，不声称复用了其渲染器或接入真实 AI。

[SuperOPC](https://superopc.app/web) 的 AI、Hardware、Tech 等分类目录与[GreatStuff](https://greatstuff.fyi/) 的策展目录用于理解分类、标签和作品浏览方式；本站仅三个项目，采用静态标签和精选布局，没有实现目录筛选、搜索、订阅或支付。

借用 [ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) 的“参考研究 → 页面拆分 → 组件规范”方法。用户的 HTML＋Tailwind 和独立 HTML 要求覆盖模板默认 Next.js 路径；不宣称运行了模板完整克隆、builder 派发或像素复刻流程。Supaste 来源研究仅留档，不复制其品牌、蓝色渐变或营销结构。

## 4. 当前实现的视觉数值

数值来自 `assets/input.css`，为本站实施值，并非参考网站实测值。

| 项目 | 当前值 |
|---|---|
| 颜色 | 背景 `#0d0f12`；面板 `#14171c`；个人介绍底 `#111419`；正文 `#f2f2ed`；次要文字 `#a4a8af` |
| 强调与边界 | 强调 `#c6f58a`；主按钮文字 `#172012`；主按钮 hover `#d6ffac`；分隔线 `#ffffff1c` |
| CSS 命名 | `@theme --color-surface:#0d0f12` 与原生 `--surface:#14171c` 是不同变量；不合并为同一面板色 |
| 字体 | 正文 `Segoe UI / Microsoft YaHei / sans-serif`；编号、眉题 `Cascadia Code / SFMono-Regular / Consolas / monospace`；无外部字体请求 |
| 容器与区段 | 最大宽 1380px，桌面左右 56px；区段上下 92px；详情双列 `.78fr 1.22fr`、gap 65px |
| 导航 | 高 92px、sticky top 0、z-index 20、背景 `#0d0f12f5`、blur 16px；章节偏移 92px |
| 主标题 | Hero `clamp(64px,7.2vw,98px)`、600、行高 1.03、字距 `-.065em`；副行 `.57em`、行高 1.4 |
| 区段标题与正文 | 标题 `clamp(36px,4.1vw,58px)`、600、行高 1.25、字距 `-.05em`；正文 15px／1.9；项目说明 13px |
| 首页舞台 | Hero 两列 `.96fr 1.04fr`、gap 34px、最小高 730px；核心舞台高 560px、轨道 430px |
| 作品与图片 | 网格 `1.1fr 1fr`、gap 30px；作品图比例 1.69、圆角 12px；详情图圆角 10px、窗口栏高 33px |
| 按钮与标签 | 主按钮最小高 52px、padding 14px 22px、圆角 8px、字号 14px；标签圆角 5px、padding 5px 9px、字号 10px |

## 5. 响应式与交互状态

| 范围／对象 | 当前行为 |
|---|---|
| ≤1000px | 容器左右 32px；Hero 标题 75px、舞台 510px；详情 gap 30px；导航间距 20px |
| ≤760px | 容器左右 24px、区段上下 62px、导航高 72px；隐藏导航 GitHub 与右侧 CTA；Hero、作品、详情和个人介绍转单列 |
| 手机首屏 | 标题 72px、副行 `.62em`；主按钮最小高 48px；舞台高 465px、轨道 370px；核心图形裁切在舞台内，不生成横向滚动 |
| 手机详情 | 图跟随文字；特性行从四列变三列，说明落第二行；详情副标题 25px、折叠正文 11px；GitHub仍在作品与个人介绍可达 |
| ≥1600px | Hero 最小高 800px、舞台 600px、轨道 470px；其余容器仍受 1380px上限约束 |
| 默认／hover／focus | 默认静态；主按钮 hover 上移 2px／200ms，作品图片 hover 放大 1.04／600ms；键盘 focus-visible 用 2px 强调色轮廓、offset 6px |
| 核心启动／暂停 | 启动改变 `aria-pressed`、按钮名称与节点状态；文字每 3200ms依次感知、理解、行动；暂停回到“等待你的意图” |
| 核心动效 | 启动后球体呼吸 4s、轨道旋转 20s；离屏暂停两项动画；页面隐藏时停止状态定时器，返回后按运行状态恢复 |
| 折叠说明 | 原生 `details/summary` 独立打开关闭；展开时标题加底边线、DETAILS标签变强调色；不伪装成导航按钮 |
| 减少动效 | `prefers-reduced-motion:reduce` 关闭动画、过渡与 smooth scroll，禁用图片 hover 放大；视觉状态文字仍可变化 |

## 6. iframe 与消息合同

- 子页 `body[data-page]` 对应 frame 标识；嵌入时为html加`is-embedded`并设`overflow:hidden`，滚动由父页承担。`ResizeObserver`、load 和字体 ready 后经 `requestAnimationFrame` 上报 `ceil(body.getBoundingClientRect().height)+2`，用2px余量避免边界内滚动，高度未变化不重复发送。
- 高度消息：`{type:"portfolio:resize",page,height}`。父页仅接受当前 origin、登记 iframe 的 `contentWindow`、匹配该发送者的 page，且 `height` 为有限数、`0<height<30000`。
- 测量握手：父页在每个frame的load及父页load后发送`{type:"portfolio:measure"}`；子页仅接受同origin且source为`window.parent`的请求，清零上次高度再调度上报，避免父脚本较晚加载漏掉首次消息。
- 导航消息：`{type:"portfolio:navigate",page,anchor?}`。page 必须在五个 frame 的 Map 中；anchor 仅可缺省或 `work`，不接受任意 URL。
- 子页 `postMessage` 指定 `location.origin`，不用 `*`。iframe加载本站受控 HTML，不嵌第三方页面；当前无 sandbox，隔离不作为安全承诺。
- 父页滚动位置为 iframe 顶部＋目标在子页中的位置－实测导航高度；更新 hash，并让目标下的 h1/h2 获取焦点。减少动效时立即滚动。
- Ctrl／Cmd／Shift／Alt点击保留原生链接行为。父页设`history.scrollRestoration="manual"`；首次hash等待五个frame全部至少上报一次高度，再在下一动画帧立即定位；popstate立即按已登记hash定位，不切页、不触发初次smooth scroll。
- 必须同源 HTTP／HTTPS预览，不用 `file://`。初始高度仅为加载回退，最终高度由子页上报；无JS时 index 的 noscript提供五个独立页面链接。

## 7. 事实、截图与公开文案

| 截图 | 当前使用与必须保留的说明 |
|---|---|
| `ai-glasses.png` | 真实产品原型界面；眼镜、戒指和设备连接为浏览器模拟，不代表真实硬件接入 |
| `ad-review.png` / `ad-review-feedback.png` | 实际或历史产品界面；测试任务、示例数据和人工状态；比例不能解释为模型准确率 |
| `aihuipi-campus.jpg` | 真实产品界面、本地版本截图；没有公开应用入口，不等同真实课堂效果 |

图片使用自身项目来源，保留有意义的 alt、真实尺寸、详情 figcaption和能力边界。不得使用手绘UI冒充截图，不推断部署、客户数、节省工时或模型准确率。首页光学核心是“交互演示”，不是项目运行截图或实时模型；标签、测试材料与公开代码不能替代效果证据。不搬运私有飞书全文、简历联系方式、学校／雇主等未授权私密内容。

## 8. 验收清单

当前执行记录：实际1280px浏览器已检查导航与核心交互；390px嵌套iframe视口的五个子文档clientWidth均等于scrollWidth、均为375px，无横向溢出，首页及其他四页单列已确认；其他尺寸与真实设备触摸仍待测。[正式站](https://qizhenghan-portfolio.vercel.app)已取得正常TLS下的公开HTTP 200、title匹配；生产部署Ready不替代线上浏览器验收。完整记录见[验收记录](./VERIFICATION.md)，下面是验收要求，不是全部通过声明。

- 首屏能识别齐正涵、AI产品与智能硬件方向；作品卡和三份案例可完整阅读。
- index恰好五个 iframe全部竖铺；每个子页能独立打开；导航与作品链接滚到正确位置，返回作品、回到顶部及浏览器历史可用。
- 图片加载、折叠展开／收起、窗口变宽／变窄后，高度更新且内容不裁切、不出现双重滚动；分别检查320、390、760、1000、1440、1600px。
- 核心启动／暂停、三个状态、原生折叠、键盘焦点和减少动效符合合同；外部链接具备 `noopener noreferrer`。
- 错误origin、非登记source、错误page、非法height与不允许的anchor不引发父页变更。
- 截图caption及项目能力边界保留；运行构建与静态检查，再用HTTP浏览器确认布局。验收条目不是未执行测试的通过声明。
