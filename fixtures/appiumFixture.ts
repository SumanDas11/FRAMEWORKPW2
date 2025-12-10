import { remote } from 'webdriverio';

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName: "Android",
        "appium:automationName": "UiAutomator2",
        "appium:deviceName": "Android Emulator",
        "appium:app": process.env.ANDROID_APP_PATH,
        "appium:noReset": true
    }
} as const; // 👈 ensures proper typing

const client = await remote(opts);
