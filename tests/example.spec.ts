import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
   await page.goto('http://127.0.0.1:8080');
});

test.describe('html checks', () => {
   test('index html exists', async ({ page }) => {

   });

});
