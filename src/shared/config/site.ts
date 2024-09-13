export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Pharm Vision',
  description: 'Агрегатор кешбека фарм-компаний',
  version: '0.1.19',
  publicRoutes: ['', '/registration', '/password-recovery', '/brands', '/brand/[0-9]*'],
};
