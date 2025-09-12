
import React, { useEffect, useState } from 'react';

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/plants')
      .then(res => res.json())
      .then(data => setPlants(data));
  }, []);

  return (
    <div style={{ padding: '2rem', position: 'relative', minHeight: '100vh' }}>
      <h1>Plant Information</h1>
      <ul>
        {plants.map(plant => (
          <li key={plant.id}>
            <strong>{plant.name}</strong>: {plant.description}
          </li>
        ))}
      </ul>
      {/* Floating plus button in bottom left */}
      <button
        style={{
          position: 'fixed',
          left: '2rem',
          bottom: '2rem',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: '#4caf50',
          color: 'white',
          fontSize: '2rem',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Add plant"
      >
        +
      </button>

      {/* Floating alpaca button in top right */}
      <button
        style={{
          position: 'fixed',
          right: '2rem',
          top: '2rem',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: '#4caf50',
          color: 'white',
          fontSize: '2rem',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Alpaca"
      >
        {/* Alpaca side profile SVG icon */}
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="18" cy="18" rx="7" ry="6" fill="#fff3e0" stroke="#388e3c" strokeWidth="2"/>
          <ellipse cx="10" cy="13" rx="4" ry="5" fill="#fff3e0" stroke="#388e3c" strokeWidth="2"/>
          <circle cx="8.5" cy="12" r="0.7" fill="#388e3c"/>
          <rect x="13" y="17" width="2" height="4" rx="1" fill="#388e3c"/>
          <rect x="7" y="8" width="2" height="2" rx="1" fill="#fff3e0" stroke="#388e3c" strokeWidth="1"/>
        </svg>
      </button>
    </div>
  );
}

export default App;
