# ELPACA

A dynamic web application for sourcing and organizing plant information, with a focus on California native plants and landscape layouts. The project features a modern React frontend and an Express backend, designed for landscape architects, gardeners, and plant enthusiasts.

## Features

- **Interactive UI**: Floating buttons, draggable popups, and compact layout sections for easy navigation.
- **Plant Layer Visualization**: Visual representation of plant layers (ground cover, roots, herbaceous, shrub, tree, vine) using custom and Font Awesome icons.
- **Custom SVG Icons**: Unique icons for grass, roots, and carrot layers, visually representing plant structures.
- **Layouts Section**: Clearly defined section for managing worksheets, presentation sheets, schedules, site diagrams, budgets, project files, and calendars.
- **Responsive Design**: UI adapts to various screen sizes and devices.
- **Backend API**: Express server (Node.js) for future integration with plant databases and Wikipedia scraping (proxy-ready).

## Technologies Used

- **Frontend**: React, Font Awesome, custom SVGs, modern CSS
- **Backend**: Express (Node.js)
- **Icons**: Font Awesome (free solid and brands), custom SVGs

## Folder Structure

```
ELPACA/
├── frontend/
│   ├── src/
│   │   └── App.js
│   └── ...
├── backend/
│   └── index.js
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
1. Clone the repository:
	```bash
	git clone https://github.com/pacacodes/ELPACA.git
	cd ELPACA
	```
2. Install frontend dependencies:
	```bash
	cd frontend
	npm install
	```
3. Install backend dependencies:
	```bash
	cd ../backend
	npm install
	```

### Running the App
1. Start the backend server:
	```bash
	cd backend
	npm start
	```
2. Start the frontend React app:
	```bash
	cd ../frontend
	npm start
	```
3. Open your browser to `http://localhost:3000` to view the app.

## Customization
- **Icons**: Easily swap or update icons in `App.js` for different plant layers or layouts.
- **Styling**: Modify CSS in `App.js` or add new styles for custom themes.
- **API Integration**: Extend the backend to connect with plant databases or external APIs.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT

## Author
- pacacodes

---

This project is a modern tool for landscape planning and plant information management, designed to be visually appealing, extensible, and user-friendly.