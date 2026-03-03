/**
 * Asset paths for UPHSL GDC website.
 * Export assets from Figma (node 1:2 or selection) and place files in public/assets/
 * with matching filenames. Replace placeholder paths with real assets when available.
 */
const ASSET_BASE = '/assets'
const PLACEHOLDER = `${ASSET_BASE}/placeholder.svg`

export const assets = {
  logoGdc: `${ASSET_BASE}/gdc-official-logo.png`,
  logoUphslGdc: `${ASSET_BASE}/uphsl-gdc-official-logo.png`,
  logoPlaceholder: PLACEHOLDER,
  yukiQuestioning: `${ASSET_BASE}/yuki-questioning.png`,
  yuki2d: `${ASSET_BASE}/yuki-2d.png`,
  yukiGraduation: `${ASSET_BASE}/yuki-graduation-pose.png`,
  pixiePose1: `${ASSET_BASE}/pixie-pose-1.png`,
  pixiePose4: `${ASSET_BASE}/pixie-pose-4.png`,
  img1385: `${ASSET_BASE}/img-1385.png`,
  heroPhoto: `${ASSET_BASE}/hero-photo.png`,
  achievementCard: `${ASSET_BASE}/achievement-card.png`,
  carouselVector: `${ASSET_BASE}/carousel-vector.svg`,
  avatarPlaceholder: `${ASSET_BASE}/avatar-placeholder.svg`,
  socialFacebook: `${ASSET_BASE}/social-facebook.svg`,
  socialTwitter: `${ASSET_BASE}/social-twitter.svg`,
  socialLinkedIn: `${ASSET_BASE}/social-linkedin.svg`,
  socialDiscord: `${ASSET_BASE}/social-discord.svg`,
  placeholder: PLACEHOLDER,
} as const
