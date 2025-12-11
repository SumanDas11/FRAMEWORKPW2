import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  globalTimeout: 10 * 60 * 1000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 4,

  // Only set workers in CI (avoids undefined assignment)
  ...(process.env.CI ? { workers: 1 } : {}),

  reporter: 'html',

  use: {
    baseURL: process.env.BASE_URL || 'https://www.amazon.in/',
    trace: 'on',
    headless: true,
    screenshot: 'on',
    video: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
