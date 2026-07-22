import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 15000,
  use: {
    baseURL: 'http://localhost:8899',
    viewport: { width: 1440, height: 900 },
  },
  webServer: {
    command: 'npx http-server -p 8899 -c-1',
    port: 8899,
    timeout: 5000,
    reuseExistingServer: true,
  },
});
