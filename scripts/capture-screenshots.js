import { chromium } from '@playwright/test'
import { spawn } from 'node:child_process'
import { mkdir } from 'node:fs/promises'
import { setTimeout as delay } from 'node:timers/promises'

const PREVIEW_URL = 'http://127.0.0.1:4173'
const OUTPUT_DIR = 'docs'

const viewports = [
  { name: 'desktop', width: 1280, height: 720 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 667 },
]

async function waitForServer(url, maxAttempts = 30, intervalMs = 1000) {
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const response = await fetch(url)
      if (response.ok) return
    } catch {
      // The preview server is not ready yet; retry.
    }
    await delay(intervalMs)
  }
  throw new Error(`Server at ${url} did not become ready in ${maxAttempts} seconds`)
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true })

  const preview = spawn('pnpm', ['preview'], { stdio: 'inherit' })
  const stopPreview = () => {
    if (!preview.killed) preview.kill('SIGTERM')
  }
  process.on('SIGINT', () => {
    stopPreview()
    process.exit(130)
  })
  process.on('SIGTERM', () => {
    stopPreview()
    process.exit(143)
  })

  try {
    await waitForServer(PREVIEW_URL)
    const browser = await chromium.launch()
    try {
      for (const viewport of viewports) {
        const page = await browser.newPage({ viewport })
        await page.goto(PREVIEW_URL, { waitUntil: 'networkidle' })
        await page.evaluate(() => document.fonts.ready)
        await page.screenshot({
          path: `${OUTPUT_DIR}/${viewport.name}.png`,
          fullPage: true,
        })
        await page.close()
        console.log(
          `Captured ${OUTPUT_DIR}/${viewport.name}.png at ${viewport.width}x${viewport.height}`
        )
      }
    } finally {
      await browser.close()
    }
  } finally {
    stopPreview()
  }
}

await main()