const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

/**
 * WUR Image Collection Scraper
 * Scrapes plant images and names from https://images.wur.nl/digital/collection/coll13/search
 */

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the WUR website
    await page.goto('https://images.wur.nl/digital/collection/coll13/search', {
        waitUntil: 'networkidle2',
    });

    // Wait for the dynamic content to load
    await page.waitForSelector('#root'); // Adjust this selector based on the actual content

    // Extract data
    const data = await page.evaluate(() => {
        const items = [];
        // Replace the following selector and logic with the actual structure of the data
        document.querySelectorAll('.item-selector').forEach(item => {
            items.push({
                title: item.querySelector('.title-selector')?.innerText || 'No title',
                description: item.querySelector('.description-selector')?.innerText || 'No description',
            });
        });
        return items;
    });

    // Save data to a JSON file
    const outputPath = path.join(__dirname, 'data', 'wur_plants.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

    console.log(`Scraped ${data.length} items.`);

    await browser.close();
})();
