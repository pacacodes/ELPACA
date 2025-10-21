# WUR Plant Image Scraper

## Overview
This scraper fetches plant images and names from the Wageningen University & Research (WUR) Digital Collections at https://images.wur.nl/digital/collection/coll13/search.

## Files

### Backend
- `scraper.js` - Standalone scraper script that fetches plant data from WUR website
- `data/wur_plants.json` - JSON file containing scraped plant data (15 sample plants)
- `index.js` - Express server with API endpoints to serve and refresh scraped data

### Frontend
- `src/WURPlantBrowser.js` - React component that displays plant images in a modal
- `src/ToolboxDetailOrganicLayout.js` - Modified to include "Browse WUR Plant Images" button

## API Endpoints

### GET /api/wur-plants
Returns the scraped plant data from `wur_plants.json`.

**Response:**
```json
[
  {
    "id": "sample_1",
    "name": "Quercus robur",
    "commonName": "English Oak",
    "imageUrl": "https://images.wur.nl/digital/iiif/coll13/1000/full/!800,800/0/default.jpg",
    "thumbnailUrl": "https://images.wur.nl/digital/iiif/coll13/1000/full/!200,200/0/default.jpg",
    "detailUrl": "https://images.wur.nl/digital/collection/coll13/id/1000",
    "note": "Sample data - replace with actual scraper when website is accessible"
  }
]
```

### POST /api/wur-plants/scrape
Triggers the scraper to refresh the plant data. Returns the newly scraped data.

**Response:**
```json
{
  "success": true,
  "count": 15,
  "plants": [...]
}
```

## Usage

### Running the Scraper Manually
```bash
cd backend
node scraper.js
```

### Starting the Backend Server
```bash
cd backend
npm start
```

### Starting the Frontend
```bash
cd frontend
npm start
```

## Features
- **Automatic Fallback**: When the WUR website is not accessible, generates sample data
- **Structured JSON Output**: Saves plant data with IDs, names, image URLs, and detail links
- **Frontend Integration**: Modal component displays plant images in a grid layout
- **Re-scrape Functionality**: Button in UI to trigger fresh data fetch
- **Responsive Design**: Grid adapts to screen size with hover effects

## Sample Data
The scraper includes 15 sample plants when the WUR website is not accessible:
1. Quercus robur (English Oak)
2. Acer platanoides (Norway Maple)
3. Betula pendula (Silver Birch)
4. Fagus sylvatica (European Beech)
5. Pinus sylvestris (Scots Pine)
6. Fraxinus excelsior (European Ash)
7. Tilia cordata (Small-leaved Lime)
8. Ulmus glabra (Wych Elm)
9. Carpinus betulus (European Hornbeam)
10. Alnus glutinosa (Common Alder)
11. Castanea sativa (Sweet Chestnut)
12. Populus tremula (Aspen)
13. Salix alba (White Willow)
14. Prunus avium (Wild Cherry)
15. Sorbus aucuparia (Rowan)

## Notes
- The WUR website may block requests from certain environments
- The scraper uses the built-in `https` module to avoid dependencies
- Images are served via IIIF (International Image Interoperability Framework)
- Each plant card in the UI is clickable and links to the WUR detail page

## Future Improvements
- Add more sophisticated HTML parsing when website becomes accessible
- Implement pagination for large datasets
- Add filtering and search capabilities in the UI
- Cache images locally to reduce external requests
- Add plant metadata (family, height, growing conditions)
