import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.waterheaterrepairrocklin.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: { format: 'file', inlineStylesheets: 'auto' },
  compressHTML: true,
  // allow tunnelled hosts (localhost.run / ngrok) when previewing remotely
  vite: { preview: { allowedHosts: true }, server: { allowedHosts: true } },
});
