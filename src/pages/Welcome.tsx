import { createStyles } from 'antd-style';
import { homePageToken } from '@/theme/tokens';

const ASSETS = '/assets/home';

const useStyles = createStyles(({ token }) => ({
  container: {
    position: 'relative',
    width: '100%',
    minHeight: 'calc(100vh - 56px)',
    overflow: 'hidden',
    background: homePageToken.heroBg,
  },

  /* ---- 背景层 ---- */
  heroBgWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '61%',
    opacity: 0.3,
  },
  heroBgImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    mixBlendMode: 'multiply',
  },
  heroBgGradient: {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(to bottom, rgba(255,255,255,0), ${homePageToken.heroBg})`,
  },

  /* ---- 暗黑覆盖层 ---- */
  darkOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: homePageToken.darkBg,
    clipPath: 'polygon(100% 0, 100% 100%, 55% 100%)',
    opacity: 0.92,
    pointerEvents: 'none',
  },

  /* ---- 装饰元素 ---- */
  decorations: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
  },
  decoImg: {
    position: 'absolute',
    objectFit: 'contain',
  },
  deco1: {
    width: 308,
    height: 308,
    top: '26%',
    left: '25%',
    opacity: 0.6,
  },
  deco2: {
    width: 284,
    height: 284,
    bottom: '-10%',
    right: '-5%',
    opacity: 0.5,
  },
  deco3: {
    width: 128,
    height: 128,
    bottom: '5%',
    left: '-2%',
    opacity: 0.5,
  },
  decoFrame: {
    width: 610,
    height: 610,
    top: '-40%',
    right: '10%',
    opacity: 0.3,
  },

  /* ---- 徽章 ---- */
  badges: {
    position: 'absolute',
    top: 29,
    left: 60,
    display: 'flex',
    gap: 16,
    zIndex: 10,
    flexWrap: 'wrap',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    height: 50,
    padding: '0 22px',
    borderRadius: 8,
    border: '2px solid #000',
    fontWeight: 700,
    fontSize: 22,
    color: '#fff',
    whiteSpace: 'nowrap' as const,
    cursor: 'default',
  },
  badgePurple: {
    background: homePageToken.accentPurple,
  },
  badgeBlack: {
    background: '#000',
  },
  badgeIcon: {
    width: 18,
    height: 22,
    objectFit: 'contain' as const,
  },

  /* ---- 主内容区 ---- */
  heroContent: {
    position: 'relative',
    zIndex: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    paddingBottom: 40,
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    marginBottom: 16,
  },
  logo: {
    width: 200,
    height: 200,
    objectFit: 'contain',
  },
  titleImg: {
    height: 87,
    objectFit: 'contain',
  },
  versionRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    marginTop: 8,
    marginBottom: 40,
  },
  versionText: {
    fontFamily:
      "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: 700,
    fontSize: 30,
    color: token.colorText,
  },

  /* ---- 特性列表 ---- */
  features: {
    position: 'relative',
    zIndex: 5,
    maxWidth: 928,
    margin: '0 auto',
    padding: '0 48px 48px',
    fontSize: 14,
    lineHeight: 1.8,
    color: token.colorText,
  },
  featureItem: {
    marginBottom: 4,
  },
  featureBold: {
    fontWeight: 700,
  },

  /* ---- 暗黑侧特性文字 ---- */
  darkFeatures: {
    position: 'absolute',
    bottom: 48,
    right: 48,
    maxWidth: 400,
    zIndex: 6,
    fontSize: 14,
    lineHeight: 1.8,
    color: '#fff',
    textAlign: 'right' as const,
  },
  darkVersionRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 14,
    marginBottom: 8,
  },
  darkVersionText: {
    fontFamily:
      "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: 700,
    fontSize: 30,
    color: '#fff',
  },
  darkLabel: {
    fontFamily:
      "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: 700,
    fontSize: 30,
    color: '#fff',
  },
}));

const Welcome: React.FC = () => {
  const { styles, cx } = useStyles();

  return (
    <div className={styles.container}>
      {/* 背景图 */}
      <div className={styles.heroBgWrapper}>
        <img
          className={styles.heroBgImg}
          src={`${ASSETS}/hero-bg.png`}
          alt=""
          aria-hidden
        />
        <div className={styles.heroBgGradient} />
      </div>

      {/* 暗黑斜切覆盖层 */}
      <div className={styles.darkOverlay} />

      {/* 装饰性几何图形 */}
      <div className={styles.decorations}>
        <img
          className={cx(styles.decoImg, styles.deco1)}
          src={`${ASSETS}/decoration-1.png`}
          alt=""
          aria-hidden
        />
        <img
          className={cx(styles.decoImg, styles.deco2)}
          src={`${ASSETS}/decoration-2.png`}
          alt=""
          aria-hidden
        />
        <img
          className={cx(styles.decoImg, styles.deco3)}
          src={`${ASSETS}/decoration-3.png`}
          alt=""
          aria-hidden
        />
        <img
          className={cx(styles.decoImg, styles.decoFrame)}
          src={`${ASSETS}/decoration-frame.png`}
          alt=""
          aria-hidden
        />
      </div>

      {/* 顶部徽章 */}
      <div className={styles.badges}>
        <div className={cx(styles.badge, styles.badgePurple)}>
          <img
            className={styles.badgeIcon}
            src={`${ASSETS}/badge-icon.png`}
            alt=""
          />
          Community Award 2022
        </div>
        <div className={cx(styles.badge, styles.badgeBlack)}>
          <img
            className={styles.badgeIcon}
            src={`${ASSETS}/props-icon.png`}
            alt=""
          />
          Bubbled Props
        </div>
      </div>

      {/* 主内容：Logo + 标题 */}
      <div className={styles.heroContent}>
        <div className={styles.logoRow}>
          <img
            className={styles.logo}
            src={`${ASSETS}/antd-logo.png`}
            alt="Ant Design Logo"
          />
          <img
            className={styles.titleImg}
            src={`${ASSETS}/antd-text.png`}
            alt="Ant Design"
          />
        </div>
        <div className={styles.versionRow}>
          <span className={styles.versionText}>Open Source</span>
          <span className={styles.versionText}>4.23.3</span>
        </div>
      </div>

      {/* 特性描述 - 亮色侧 */}
      <div className={styles.features}>
        <p className={styles.featureItem}>
          <span>{'• '}</span>
          <span className={styles.featureBold}>Efficiency: </span>
          <span>
            Built from scratch to take full advantage of auto layout +
            constraints + layout grid mechanism, with minimal layer hierarchy
            and naming
          </span>
        </p>
        <p className={styles.featureItem}>
          <span>{'• '}</span>
          <span className={styles.featureBold}>Accurate-to-Code: </span>
          <span>
            We carefully study the HTML and CSS of the official GitHub repo in
            order to achieve maximum consistency with the production code
          </span>
        </p>
        <p className={styles.featureItem}>
          <span>{'• '}</span>
          <span className={styles.featureBold}>Up-to-Date: </span>
          <span>
            Components are always updated to the latest version and in direct
            accordance to Ant Design changelog
          </span>
        </p>
      </div>

      {/* 暗黑侧内容 */}
      <div className={styles.darkFeatures}>
        <div className={styles.darkVersionRow}>
          <span className={styles.darkVersionText}>Open Source</span>
          <span className={styles.darkVersionText}>4.23.3</span>
        </div>
        <div className={styles.darkLabel}>Dark Theme</div>
      </div>
    </div>
  );
};

export default Welcome;
