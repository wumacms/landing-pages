# ChatFlow · 企业级即时通讯营销落地页

基于 **React 19 + TypeScript + Vite + Tailwind CSS 4** 构建的单页营销网站，展示「ChatFlow」企业级即时通讯产品的完整落地页：Hero、功能特性、团队、数据统计、定价、常见问题与行动号召等模块。

## 技术栈

| 类别 | 技术 |
| --- | --- |
| 框架 | React 19 (`react` / `react-dom`) |
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

## 项目结构

```
react-tailwind/
├── index.html                  # 入口 HTML（lang="zh-CN"）
├── vite.config.ts              # Vite 配置（React + Tailwind 插件）
├── package.json
└── src/
    ├── main.tsx                # 应用入口（React StrictMode）
    ├── App.tsx                 # 页面组装：组合各区块并注入数据
    ├── index.css               # 全局样式（@import "tailwindcss"）
    ├── components/
    │   ├── layout/             # 页面骨架
    │   │   ├── Navbar.tsx      # 响应式导航：滚动毛玻璃、下拉菜单、移动端抽屉
    │   │   └── Footer.tsx      # 页脚
    │   ├── sections/           # 内容区块（10 个）
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
    ├── data/                   # 数据驱动：区块内容与页面解耦
    │   ├── navbar.ts           # 导航菜单（含多级下拉）
    │   ├── hero.ts             # 首屏文案与图片
    │   ├── features.ts         # 特性网格 + 三种图文特性
    │   ├── team.ts             # 团队成员
    │   ├── stats.ts            # 数据指标
    │   ├── pricing.ts          # 定价方案
    │   └── faq.ts              # 常见问题
    ├── types/index.ts          # 全局类型定义（NavItem / Feature / TeamMember / Stat / PricingPlan / FAQItem）
    └── assets/                 # 静态资源（hero.png、logo SVG）
```

## 架构特点

- **数据驱动**：所有展示内容集中放在 `src/data/`，组件仅通过 props 接收数据，替换文案无需改动组件代码。
- **组件分层**：`layout`（页面骨架）→ `sections`（业务区块）→ `ui`（可复用原子组件）三层结构，职责清晰。
- **响应式布局**：导航栏在移动端切换为抽屉菜单；网格、图文区块随断点（`sm` / `md` / `lg`）自适应。
- **交互细节**：导航栏滚动吸顶 + 毛玻璃背景、下拉菜单 hover 展开、FAQ 手风琴展开收起、卡片 hover 上浮阴影。
- **Tailwind CSS 4**：通过 `@tailwindcss/vite` 插件接入，CSS 侧仅需 `@import "tailwindcss"`，无需 `tailwind.config.js`。
- **品牌主色**：基于 `indigo` 色系的统一视觉（按钮、统计条、CTA 等）。

## 定制指南

1. **修改文案/图片**：编辑 `src/data/` 下对应文件即可。
2. **调整页面结构**：在 `src/App.tsx` 中增删区块组件（`sections/*`）。
3. **新增 UI 组件**：放入 `src/components/ui/` 并遵循现有 props 风格。
4. **新增区块**：在 `src/components/sections/` 创建组件 → 在 `src/data/` 提供数据 → 在 `App.tsx` 组装。
