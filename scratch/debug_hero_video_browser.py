import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        print("Navigating to http://localhost:3000 ...")
        try:
            await page.goto("http://localhost:3000", wait_until="domcontentloaded")
            await page.wait_for_timeout(3000)
        except Exception as e:
            print("Navigation note:", e)

        # Inspect video element state
        video_info = await page.evaluate('''() => {
            const v = document.querySelector('video');
            if (!v) return { found: false };
            return {
                found: true,
                src: v.src || (v.querySelector('source') ? v.querySelector('source').src : ''),
                currentSrc: v.currentSrc,
                paused: v.paused,
                muted: v.muted,
                currentTime: v.currentTime,
                duration: v.duration,
                readyState: v.readyState,
                networkState: v.networkState,
                error: v.error ? v.error.message : null,
                videoWidth: v.videoWidth,
                videoHeight: v.videoHeight,
                clientWidth: v.clientWidth,
                clientHeight: v.clientHeight,
            };
        }''')
        print("VIDEO DEBUG INFO:", video_info)

        # Take screenshot of Hero section
        await page.screenshot(path="scratch/hero_debug.png")
        print("Saved screenshot to scratch/hero_debug.png")

        await browser.close()

asyncio.run(main())
