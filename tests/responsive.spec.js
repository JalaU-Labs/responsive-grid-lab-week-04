import { test, expect } from '@playwright/test'

const expectedColumns = {
  desktop: 4,
  tablet: 2,
  mobile: 1,
}

test('el grid usa el numero de columnas esperado para el viewport', async ({ page }, testInfo) => {
  await page.goto('/')
  const grid = page.locator('.grid')
  await expect(grid).toBeVisible()
  const columns = await grid.evaluate(
    (element) => getComputedStyle(element).gridTemplateColumns.split(' ').length
  )
  expect(columns).toBe(expectedColumns[testInfo.project.name])
})

test('se renderizan cuatro tarjetas con imagen, texto y alt descriptivo', async ({ page }) => {
  await page.goto('/')
  const cards = page.locator('.card')
  await expect(cards).toHaveCount(4)
  for (let index = 0; index < 4; index += 1) {
    const card = cards.nth(index)
    await expect(card.locator('img')).toBeVisible()
    await expect(card.locator('img')).toHaveAttribute('alt', /.+/)
    await expect(card.locator('h2')).toHaveText(/.+/)
    await expect(card.locator('p')).toHaveText(/.+/)
  }
})

test('el espaciado del grid y de las tarjetas es mayor a cero', async ({ page }) => {
  await page.goto('/')
  const gridGap = await page
    .locator('.grid')
    .evaluate((element) => parseFloat(getComputedStyle(element).columnGap))
  expect(gridGap).toBeGreaterThan(0)
  const cardPadding = await page
    .locator('.card')
    .first()
    .evaluate((element) => parseFloat(getComputedStyle(element).paddingLeft))
  expect(cardPadding).toBeGreaterThan(0)
})