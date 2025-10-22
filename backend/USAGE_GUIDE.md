# WUR Plant Scraper - Usage Guide

## Overview
The WUR Plant Scraper is a Puppeteer-based web scraping tool that extracts plant data from the Wageningen University & Research (WUR) Digital Collections, specifically the Root System Drawings collection. The scraper automatically categorizes plants into permaculture layers.

## Prerequisites
- Node.js v18 or higher
- Chromium or Chrome browser (usually pre-installed on most systems)
- Internet connection (to access WUR website)

## Installation

```bash
cd backend
npm install
```

## Usage

### 1. Running the Scraper Manually

To scrape plant data from the WUR website:

```bash
cd backend
node scraper.js
```

**Output:**
- Console logs showing scraping progress
- JSON file saved to `data/wur_plants.json`
- Summary of plants by permaculture layer

**Example output:**
```
Starting WUR plant scraper...
Navigating to WUR collection...
Waiting for content to load...
Extracting plant data...
✓ Successfully scraped 11 plant records
✓ Data saved to /home/runner/work/ELPACA/ELPACA/backend/data/wur_plants.json

Plants by permaculture layer:
  canopy: 3
  groundcover: 2
  herbaceous: 2
  shrub: 2
  understory: 2
```

### 2. Using the API Endpoints

Start the backend server:

```bash
cd backend
npm start
```

#### Get Current Plant Data
```bash
curl http://localhost:5000/api/wur-plants
```

Returns the cached plant data from `wur_plants.json`.

#### Trigger a Fresh Scrape
```bash
curl -X POST http://localhost:5000/api/wur-plants/scrape
```

Runs the scraper and returns fresh data. This also updates `wur_plants.json`.

**Response format:**
```json
{
  "success": true,
  "count": 11,
  "plants": [
    {
      "id": "sample_1",
      "name": "Quercus robur (English Oak)",
      "imageUrl": "https://images.wur.nl/...",
      "thumbnailUrl": "https://images.wur.nl/...",
      "detailUrl": "https://images.wur.nl/...",
      "source": "WUR Root System Drawings",
      "layer": "canopy",
      "scrapedAt": "2025-10-22T18:23:05.951Z"
    }
  ]
}
```

### 3. Testing Categorization Logic

To validate that the permaculture layer categorization is working correctly:

```bash
cd backend
node test-categorization.js
```

This runs a comprehensive test suite covering all layer categories.

## Data Structure

Each plant record includes:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (e.g., "sample_1" or WUR collection ID) |
| `name` | string | Plant name (scientific name with common name) |
| `imageUrl` | string | Full-size image URL |
| `thumbnailUrl` | string | Thumbnail image URL |
| `detailUrl` | string | Link to WUR detail page |
| `source` | string | Data source identifier |
| `layer` | string | Permaculture layer (canopy, understory, shrub, herbaceous, groundcover) |
| `scrapedAt` | string | ISO timestamp of when the data was scraped |

## Permaculture Layers

The scraper categorizes plants into five permaculture layers:

### Canopy Layer (9m+ tall)
Large trees that form the upper canopy:
- Oak (Quercus), Maple (Acer), Beech (Fagus)
- Ash (Fraxinus), Pine (Pinus), Birch (Betula)
- Elm (Ulmus), Hornbeam (Carpinus), Alder (Alnus)

### Understory Layer (3-9m tall)
Small trees and large shrubs:
- Cherry (Prunus), Rowan (Sorbus), Hawthorn (Crataegus)
- Serviceberry (Amelanchier), Dogwood (Cornus)
- Apple (Malus), Pear (Pyrus)

### Shrub Layer (1-3m tall)
Woody plants:
- Hazel (Corylus), Elder (Sambucus), Currant (Ribes)
- Raspberry/Blackberry (Rubus), Rose (Rosa)
- Viburnum, Blueberry (Vaccinium)

### Herbaceous Layer
Non-woody plants, grasses, and crops:
- Wheat (Triticum), Oats (Avena), Barley (Hordeum)
- Most agricultural crops and wild herbaceous plants
- Default category for unmatched plants

### Groundcover Layer (< 0.3m tall)
Low-growing spreading plants:
- Strawberry (Fragaria), Thyme (Thymus)
- Stonecrop (Sedum), Periwinkle (Vinca)
- Carpet-forming plants

## Fallback Behavior

When the WUR website is not accessible (network issues, site down, etc.), the scraper automatically returns sample data with diverse plant species across all permaculture layers. This ensures the application remains functional even when external resources are unavailable.

## Environment Configuration

The scraper automatically detects and uses system Chrome/Chromium. If you need to specify a custom browser path:

Edit `scraper.js` and modify the `executablePath` in the Puppeteer launch options:

```javascript
browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/path/to/your/chrome',  // Modify this
    args: [...]
});
```

## Troubleshooting

### Chrome/Chromium Not Found
If you get an error about Chrome not being found:
1. Install Chromium: `apt-get install chromium-browser`
2. Or specify the path in `scraper.js` as shown above

### Timeout Errors
If scraping times out:
- Increase timeout values in `scraper.js`
- Check your internet connection
- The WUR site may be temporarily unavailable (fallback data will be used)

### Network Errors
If you see DNS resolution errors:
- Check internet connectivity
- The WUR domain may be blocked in your network
- Fallback sample data will be used automatically

## Integration with Frontend

The scraped data is consumed by the frontend via the Express API:
- `/api/wur-plants` - Get cached plant data
- `/api/wur-plants/scrape` - Trigger fresh scrape

The frontend displays plant images in a modal with filtering by permaculture layer.

## Performance Considerations

- First scrape may take 30-60 seconds to load the React SPA
- Subsequent scrapes are cached in `wur_plants.json`
- Use the API's scrape endpoint sparingly to avoid overloading the WUR site
- Consider implementing a caching strategy (e.g., scrape once per day)

## Contributing

To improve the categorization logic:
1. Add keyword patterns to the `categorizeByPermacultureLayer` function in `scraper.js`
2. Run `node test-categorization.js` to verify changes
3. Test with real data by running `node scraper.js`

To improve scraping selectors:
1. Inspect the WUR website HTML structure
2. Update selectors in the `page.evaluate()` section
3. Test thoroughly with various plant types
