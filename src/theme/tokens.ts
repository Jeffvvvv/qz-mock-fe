/**
 * Figma 设计稿中提取的自定义主题 token
 * 来源: Figma - 启智国智院版本 首页设计
 *
 * 与 Ant Design 主题 token 配合使用
 * @see config/config.ts antd.configProvider.theme
 */

/** 主色调 - Ant Design 蓝 */
export const colorPrimary = '#1890ff';

/** 主色调 - 暗黑模式 (Primary/6) */
export const colorPrimaryDark = '#177DDC';

/** 主色调浅色 (Primary/8) */
export const colorPrimaryLight = '#65B7F3';

/** 强调色 - 紫色 (Multiplayer/P) */
export const colorAccentPurple = '#907CFF';

/** 页面背景色 - 浅蓝灰 */
export const colorHeroBg = '#f8fbfe';

/** 暗黑主题背景色 */
export const colorDarkBg = '#00172f';

/** 中性色 - 纯黑 (Neutral/13) */
export const colorNeutral13 = '#000000';

/**
 * 提取的 Ant Design ConfigProvider theme token
 * 可直接传入 antd ConfigProvider 的 theme.token
 */
export const antdThemeToken = {
  colorPrimary,
  fontFamily: 'AlibabaSans, sans-serif',
};

/**
 * 暗黑模式 token
 */
export const antdDarkThemeToken = {
  colorPrimary: colorPrimaryDark,
  colorBgBase: colorDarkBg,
};

/**
 * 首页专用 token
 */
export const homePageToken = {
  heroBg: colorHeroBg,
  darkBg: colorDarkBg,
  accentPurple: colorAccentPurple,
  primaryLight: colorPrimaryLight,
  primaryDark: colorPrimaryDark,
};
