# CLAUDE.md — qz-mock-fe

## 项目概述

基于 **Ant Design Pro 6.0** + **UmiJS 4.6 (@umijs/max)** 的企业级前端项目，使用 React 19 + TypeScript 5 + Antd 6。

## 技术栈

| 层面         | 技术                                          |
| ------------ | --------------------------------------------- |
| 框架         | UmiJS 4.6 (`@umijs/max`)                      |
| UI 库        | Ant Design 6 + ProComponents 3.1              |
| 样式         | antd-style (CSS-in-JS / Emotion)、clsx        |
| 状态管理     | Umi initialState + useModel                   |
| 路由         | 配置式路由 (`config/routes.ts`)，hash 模式     |
| 请求层       | Umi request (基于 umi-request)                 |
| Mock         | Express-based mock server (`mock/` 目录)       |
| 测试         | Jest 30 + @testing-library/react 16            |
| Lint/Format  | Biome 2.1                                      |
| Git Hooks    | Husky 9 + lint-staged + commitlint (conventional) |
| 日期         | dayjs                                          |
| i18n         | Umi locale 插件，支持 8 种语言，默认 zh-CN     |
| Node         | >= 20.0.0                                      |

## 目录结构

```
config/                  # Umi 配置
  config.ts              # 主配置（插件、主题、mock、openapi）
  routes.ts              # 路由表
  proxy.ts               # 开发代理（test / pre 环境）
  defaultSettings.ts     # ProLayout 主题设置
  oneapi.json            # 本地 OpenAPI schema
src/
  app.tsx                # 运行时配置（getInitialState、layout、request）
  access.ts              # 权限控制（canAdmin）
  requestErrorConfig.ts  # 请求/响应拦截 & 错误处理
  global.tsx             # PWA / Service Worker 逻辑
  global.style.ts        # 全局样式
  loading.tsx            # 全局 loading 骨架屏
  components/            # 共享组件（Footer、RightContent、HeaderDropdown）
  pages/                 # 页面组件
    Welcome.tsx           # 首页
    Admin.tsx             # 管理员页面（需 canAdmin）
    404.tsx               # 404 页面
    user/login/           # 登录页（账号登录 + 手机号登录）
    table-list/           # 表格 CRUD 页面（ProTable）
  services/              # API 服务层（自动生成，勿手动编辑）
    ant-design-pro/       # 从 oneapi.json 生成
    swagger/              # 从远程 Swagger 生成
  locales/               # 国际化翻译文件（8 种语言）
mock/                    # Mock 数据（user、listTableList、notices、route、monitor）
tests/                   # 测试配置（setupTests.jsx）
types/                   # 全局类型定义
public/                  # 静态资源（favicon、logo、PWA icons）
```

## 常用命令

```bash
npm run start            # 开发（带 mock）
npm run start:dev        # 开发（无 mock，UMI_ENV=dev）
npm run start:test       # 连接 test 环境 API
npm run start:pre        # 连接 pre 环境 API
npm run build            # 生产构建
npm run lint             # Biome lint + tsc 类型检查
npm run test             # Jest 测试
npm run test:coverage    # 覆盖率报告
npm run tsc              # 仅类型检查
npm run openapi          # 根据 OpenAPI schema 重新生成 services
npm run analyze          # 构建并分析 bundle
```

## 关键约定

### 路由 & 权限

- 路由在 `config/routes.ts` 中集中配置，非文件约定式
- 权限逻辑在 `src/access.ts`，当前仅有 `canAdmin`（`currentUser.access === 'admin'`）
- 路由中通过 `access: 'canAdmin'` 声明需要的权限
- 未登录自动重定向到 `/user/login`

### Services（API 层）

- `src/services/` 下代码由 `npm run openapi` 自动生成，**不要手动编辑**
- 本地 schema：`config/oneapi.json`
- 远程 schema：配置在 `config/config.ts` 的 `openAPI` 字段
- API 类型定义在各 `typings.d.ts` 中

### 请求配置

- 拦截器在 `src/requestErrorConfig.ts`
- 请求拦截：自动追加 `?token=123`（需替换为实际鉴权逻辑）
- 响应拦截：检查 `response.data.success`
- 错误展示策略：SILENT / WARN_MESSAGE / ERROR_MESSAGE / NOTIFICATION / REDIRECT

### Mock

- 开发环境默认启用 mock（`npm run start`）
- 加 `MOCK=none` 关闭（`npm run start:dev`）
- Mock 文件在 `mock/` 目录，格式为默认导出对象，key 为 `METHOD /path`
- 测试账号：admin / ant.design（管理员）、user / ant.design（普通用户）

### 样式

- 优先使用 `antd-style` 的 `createStyles` 编写组件样式
- 工具类使用 `clsx` 进行 className 合并
- 全局样式在 `src/global.style.ts`
- 主题 token 通过 `antd-style` 的 `useToken` 获取

### 组件开发

- 使用函数式组件 + Hooks
- 表格类页面优先使用 `ProTable`，表单使用 `ProForm` / `ModalForm`
- 共享组件放 `src/components/`，页面级组件放对应 `pages/xxx/components/`
- 使用 `useModel('@@initialState')` 获取全局状态
- 使用 `useAccess()` 获取权限信息
- 使用 `useIntl()` 做国际化

### 代码风格

- Biome 统一格式化和 lint（单引号、2 空格缩进）
- 提交前自动 `biome check --write`（lint-staged）
- Commit message 遵循 Conventional Commits 规范
- TypeScript 严格模式，所有代码须有类型
- 禁用规则：`noExplicitAny`、`useUniqueElementIds`、`useExhaustiveDependencies`

### 测试

- Jest 30 + jsdom 环境
- 测试文件与页面同目录：`xxx.test.tsx`，或放 `tests/`
- 使用 `@testing-library/react` 编写测试
- `tests/setupTests.jsx` 提供 localStorage / matchMedia 等 mock

### 国际化

- 默认语言 zh-CN，启用浏览器语言检测
- 翻译文件在 `src/locales/{lang}/`
- 按模块拆分：`menu.ts`、`pages.ts`、`component.ts` 等
- 页面中使用 `useIntl()` 或 `<FormattedMessage />`

### 路径别名

- `@/*` → `src/*`
- `@@/*` → `src/.umi/*`（Umi 生成目录，勿手动修改）

## 注意事项

- `src/.umi/` 和 `src/.umi-production/` 为 Umi 自动生成，已在 `.gitignore` 中
- `npm install` 后会自动执行 `max setup`（postinstall）
- `.npmrc` 配置了 `legacy-peer-deps=true`
- PWA 功能已启用，Service Worker 逻辑在 `src/global.tsx`
