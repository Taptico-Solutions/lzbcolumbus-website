import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 640, "height": 800})
        await page.goto("file:///home/ubuntu/lzbcolumbus/comfort-club-welcome-email-pdf.html")
        await page.wait_for_load_state("networkidle")
        # Get full page height
        height = await page.evaluate("document.body.scrollHeight")
        await page.set_viewport_size({"width": 640, "height": height})
        await page.screenshot(path="/home/ubuntu/lzbcolumbus/comfort-club-welcome-email.png", full_page=True)
        await browser.close()
        print(f"Done — height: {height}px")

asyncio.run(main())
