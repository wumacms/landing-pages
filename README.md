# Landing Pages

基于 **React 19 + TypeScript + Vite + Tailwind CSS 4 + React Router** 构建的**多落地页管理系统**：

- **门户首页（`/`）**：集中检索、按标签筛选、实时预览（iframe 弹窗）并打开每一个已注册的落地页；
- **落地页（`/sites/:id`）**：每个站点由「区块配置 + 数据」驱动渲染，复用同一套区块组件。

当前内置站点：`ChatFlow`（企业级即时通讯）、`Nimbus Cloud`（开发者云服务示例，用于演示多站点复用架构）。

## 技术栈

| 类别 | 技术 |
| --- | --- |
| 框架 | React 19 (`react` / `react-dom`) |
| 路由 | react-router-dom 7 |
| 语言 | TypeScript |
| 构建工具 | Vite 8（`@vitejs/plugin-react`） |
| 样式 | Tailwind CSS 4（`@tailwindcss/vite` 插件，零配置文件） |
| 图标 | lucide-react |
| 代码检查 | Oxlint（`oxlint`） |
| 包管理器 | pnpm |

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器（默认 http://localhost:5173）
pnpm dev

# 类型检查 + 生产构建
pnpm build

# 本地预览生产构建产物
pnpm preview

# 代码检查
pnpm lint
```

## 路由设计

| 路径 | 说明 |
| --- | --- |
| `/` | 门户首页：检索、标签筛选、卡片预览、iframe 实时预览弹窗 |
| `/sites/:id` | 单个落地页（按站点配置动态渲染），右上角悬浮按钮可返回首页 |
| `*` | 未匹配路由自动重定向到 `/` |

## 项目结构

```
landing-pages/
├── index.html                  # 入口 HTML（lang="zh-CN"）
├── vite.config.ts              # Vite 配置（React + Tailwind 插件）
├── package.json
└── src/
    ├── main.tsx                # 应用入口（StrictMode + BrowserRouter）
    ├── App.tsx                 # 路由表（/ 与 /sites/:id）
    ├── index.css               # 全局样式（@import "tailwindcss"）
    ├── pages/
    │   ├── Home.tsx            # 门户首页：搜索 / 标签筛选 / 卡片 / iframe 预览弹窗
    │   └── SiteView.tsx        # 落地页渲染容器：按站点配置动态渲染区块
    ├── sites/                  # ★ 站点注册中心（一个落地页 = 一个数据文件）
    │   ├── index.ts            # 站点注册表：sites[]、getSiteById()、allTags
    │   ├── chatflow.ts         # ChatFlow：配置 + 全部数据同置于一个文件
    │   └── nimbus.ts           # Nimbus Cloud：配置 + 全部数据同置于一个文件
    ├── components/
    │   ├── layout/             # 页面骨架（各站点通用）
    │   │   ├── Navbar.tsx      # 响应式导航：滚动毛玻璃、下拉菜单、移动端抽屉
    │   │   └── Footer.tsx      # 页脚
    │   ├── sections/           # 内容区块（10 个，多站点复用）
    │   │   ├── Hero.tsx                # 首屏横幅 + 主视觉
    │   │   ├── FeatureLeftImage.tsx    # 左图右文特性
    │   │   ├── FeatureRightImage.tsx   # 右图左文特性
    │   │   ├── FeatureBottomImage.tsx  # 上图下文特性
    │   │   ├── FeaturesGrid.tsx        # 特性网格卡片
    │   │   ├── Team.tsx                # 核心团队
    │   │   ├── Stats.tsx               # 数据统计条
    │   │   ├── Pricing.tsx             # 定价方案（含「最受欢迎」高亮）
    │   │   ├── FAQ.tsx                 # 手风琴式常见问题
    │   │   └── CTA.tsx                 # 底部行动号召
    │   ├── ui/                 # 通用 UI 原子组件
    │   │   ├── Button.tsx      # 按钮（variant / size / fullWidth / href 链接模式）
    │   │   ├── Badge.tsx       # 徽章（primary / success / warning / gray）
    │   │   └── Card.tsx        # 卡片（CardHeader / CardTitle / CardDescription）
    │   └── shared/             # （预留共享组件目录）
    ├── types/index.ts          # 全局类型：区块 props + SiteConfig / SiteData / SectionType
    └── assets/                 # 静态资源（hero.png、logo SVG）
```

## 架构说明

### 配置驱动渲染

每个落地页是一个 `SiteConfig`（定义见 `src/types/index.ts`）：

```ts
interface SiteConfig {
  id: string;             // 唯一标识，作为路由 /sites/:id
  name: string;           // 展示名称
  tagline: string;        // 一句话标语
  description: string;    // 详细描述（首页卡片展示）
  tags: string[];         // 标签（首页检索过滤）
  cover?: string;         // 封面图（首页卡片）
  sections: SectionType[]; // 区块渲染顺序
  data: SiteData;          // 各区块数据
}
```

`SiteView` 根据 `sections` 顺序 + `data` 内容，在 `sectionRenderers` 映射表中找到对应区块组件并注入 props 渲染。**新增一个区块类型**时只需：创建组件 → 在 `types` 中补充类型 → 在 `SiteView` 注册映射（可选在 `resolveSectionProps` 中做数组适配）。

### 一个落地页 = 一个数据文件

**每个落地页的全部数据（导航、Hero、特性、团队、统计、定价、FAQ、CTA 等）都写在它自己的站点配置文件中**，不设公共的 `data/` 目录。数据与配置一一对应，便于独立维护、复制与分享单个落地页。

- `sites/chatflow.ts`：ChatFlow 全部数据同置于此文件；
- `sites/nimbus.ts`：Nimbus Cloud 全部数据同置于此文件。

> 需要跨站点复用的数据（如共用图片）可放到 `src/assets/`；需要共享的常量可抽到 `src/types/index.ts` 或独立的工具模块，与站点数据本身解耦。

## 如何新增网站落地页

三步即可让新页面出现在门户首页，并可被检索、筛选与预览：

### 第 1 步：创建站点配置

在 `src/sites/` 下新建配置文件（如 `src/sites/my-site.ts`）：

```ts
// src/sites/my-site.ts
import type { SiteConfig } from "../types";

export const mySite: SiteConfig = {
  id: "my-site",                    // 路由为 /sites/my-site，需全局唯一
  name: "我的产品",
  tagline: "一句话标语",
  description: "首页卡片上展示的详细描述。",
  tags: ["SaaS", "营销"],           // 参与首页搜索与标签筛选
  cover: "https://example.com/cover.jpg", // 可选，缺省时显示占位图
  sections: [
    "hero",
    "featuresGrid",
    "stats",
    "pricing",
    "faq",
    "cta",
  ],
  data: {
    navbar: { logoText: "我的产品", ctaText: "开始使用", ctaHref: "#" },
    hero: {
      title: "主标题",
      subtitle: "副标题说明",
      primaryCtaText: "主要按钮",
      primaryCtaHref: "#",
      secondaryCtaText: "次要按钮",
      secondaryCtaHref: "#",
      imageUrl: "https://example.com/hero.png",
    },
    featuresGrid: [
      { id: 1, title: "特性一", description: "描述", icon: "🚀" },
      // ...
    ],
    stats: [
      { id: 1, value: "99.99%", label: "可用性" },
      // ...
    ],
    pricing: [
      { id: 1, name: "免费版", price: "$0", features: ["基础功能"], ctaText: "开始", ctaVariant: "outline" },
      // ...
    ],
    faq: [
      { id: 1, question: "常见问题", answer: "答案" },
      // ...
    ],
    cta: {
      title: "立即开始",
      description: "行动号召文案",
      primaryCtaText: "免费试用",
      primaryCtaHref: "#",
      secondaryCtaText: "联系我们",
      secondaryCtaHref: "#",
    },
    footer: { companyName: "我的产品" },
  },
};
```

> 所有区块数据都写在 `data` 字段中（配置与数据同一文件），保持「一个落地页 = 一个数据文件」。参考 `src/sites/chatflow.ts` 可看到包含全部 10 个区块数据的完整示例。

### 第 2 步：注册到站点注册表

在 `src/sites/index.ts` 中导入并加入 `sites` 数组：

```ts
import { mySite } from "./my-site";

export const sites: SiteConfig[] = [chatflowSite, nimbusSite, mySite];
```

### 第 3 步：完成

无需改动路由、首页或任何组件。启动 `pnpm dev` 后：

- 首页自动出现新站点卡片（封面、描述、标签）；
- 搜索关键词与标签筛选自动覆盖新站点；
- 「预览」按钮通过 iframe 实时渲染 `/sites/my-site`；
- 「打开页面」直接跳转完整落地页。

### 可选：新增区块类型

若现有 10 个区块不满足需求：

1. 在 `src/components/sections/` 创建组件（props 类型定义到 `src/types/index.ts`）；
2. 在 `SectionType` 联合类型中追加区块名；
3. 在 `SiteData` 中补充对应数据字段；
4. 在 `src/pages/SiteView.tsx` 的 `sectionRenderers` 中注册映射，数组型数据在 `resolveSectionProps` 中做适配；
5. 在任意站点的 `sections` 数组中启用。

## 定制指南

- **修改门户首页样式/布局**：编辑 `src/pages/Home.tsx`；
- **修改落地页渲染逻辑**：编辑 `src/pages/SiteView.tsx`；
- **调整区块组件**：编辑 `src/components/sections/*`，对所有使用该区块的站点全局生效；
- **修改通用组件**：编辑 `src/components/ui/*`；
- **品牌主色**：各区块默认使用 `indigo` 色系，可在组件中调整 Tailwind 类名。
