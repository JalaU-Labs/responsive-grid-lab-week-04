import { test, expect } from '@playwright/test'

test('la pagina carga correctamente', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toContainText('Responsive Grid Lab')
})
