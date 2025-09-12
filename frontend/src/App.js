
import React, { useEffect, useState } from 'react';

function App() {
  const [plants, setPlants] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

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
        onClick={() => setShowPopup(true)}
      >
        +
      </button>

      {/* Popup window */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
            minWidth: '340px',
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            position: 'relative',
          }}>
            {/* Close button as small black X in top right */}
            <button
              onClick={() => setShowPopup(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '28px',
                height: '28px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
              }}
              aria-label="Close popup"
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <line x1="3" y1="3" x2="15" y2="15" stroke="black" strokeWidth="2" />
                <line x1="15" y1="3" x2="3" y2="15" stroke="black" strokeWidth="2" />
              </svg>
            </button>
            {/* Column of buttons on the left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginRight: '2rem', alignItems: 'flex-start' }}>
              {[
                { name: 'ground cover layer', icon: (<svg width="24" height="24" viewBox="0 0 24 24"><ellipse cx="12" cy="18" rx="10" ry="4" fill="white" /></svg>) },
                { name: 'root layer', icon: (<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 20 Q10 16 12 12 Q14 16 12 20 Z" fill="white" /><rect x="11" y="8" width="2" height="6" fill="white" /></svg>) },
                { name: 'herbaceous layer', icon: (<svg width="24" height="24" viewBox="0 0 24 24"><rect x="10" y="12" width="4" height="8" rx="2" fill="white" /><ellipse cx="12" cy="10" rx="3" ry="4" fill="white" /></svg>) },
                { name: 'shrub layer', icon: (<svg width="24" height="24" viewBox="0 0 24 24"><ellipse cx="12" cy="14" rx="5" ry="4" fill="white" /><rect x="11" y="18" width="2" height="4" fill="white" /></svg>) },
                { name: 'low tree layer', icon: (<svg width="24" height="24" viewBox="0 0 24 24"><ellipse cx="12" cy="10" rx="4" ry="5" fill="white" /><rect x="11" y="15" width="2" height="7" fill="white" /></svg>) },
                { name: 'tall tree layer', icon: (<svg width="24" height="24" viewBox="0 0 24 24"><ellipse cx="12" cy="8" rx="5" ry="7" fill="white" /><rect x="11" y="15" width="2" height="7" fill="white" /></svg>) },
                { name: 'vine layer', icon: (<svg width="24" height="24" viewBox="0 0 24 24"><path d="M8 20 Q12 10 16 20" stroke="white" strokeWidth="2" fill="none" /><ellipse cx="8" cy="20" rx="2" ry="1.5" fill="white" /><ellipse cx="16" cy="20" rx="2" ry="1.5" fill="white" /></svg>) },
              ].map((layer, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <button
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#4caf50',
                      color: 'white',
                      border: 'none',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                    }}
                    aria-label={layer.name}
                  >
                    {layer.icon}
                  </button>
                  <span style={{ textTransform: 'capitalize', fontWeight: '500', color: '#333', fontSize: '1rem' }}>{layer.name}</span>
                </div>
              ))}
            </div>
            {/* Popup content on the right */}
            <div style={{ flex: 1 }}>
              <h2>Popup Window</h2>
              <p>This is a popup window opened by clicking the plus button.</p>
            </div>
          </div>
        </div>
      )}

      {/* Floating alpaca button in top right with 6 surrounding buttons */}
      <div style={{
        position: 'fixed',
        right: '2rem',
        top: '2rem',
        width: '160px',
        height: '160px',
        pointerEvents: 'none', // let buttons be clickable but not the container
      }}>
        {/* 6 surrounding buttons in a circle */}
        {[...Array(6)].map((_, i) => {
          // Rotate so that the first button is at the top (12 o'clock)
          const angle = ((i / 6) * 2 * Math.PI) - Math.PI / 2;
          const radius = 60;
          const x = 56 + radius * Math.cos(angle);
          const y = 56 + radius * Math.sin(angle);
          return (
            <button
              key={i}
              style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: '#4caf50',
                color: 'white',
                border: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                pointerEvents: 'auto',
              }}
              aria-label={`Circle button ${i+1}`}
            >
              {i === 0 ? (
                // Lightbulb silhouette cutout SVG with filament for the top button
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="10" r="6" fill="white" />
                  <rect x="9" y="16" width="6" height="4" rx="2" fill="white" />
                  <rect x="10" y="20" width="4" height="2" rx="1" fill="white" />
                  <line x1="10" y1="13" x2="14" y2="13" stroke="#4caf50" strokeWidth="1.5" />
                  <line x1="12" y1="13" x2="12" y2="16" stroke="#4caf50" strokeWidth="1.5" />
                </svg>
              ) : null}
            </button>
          );
        })}
        {/* Center alpaca button */}
        <button
          style={{
            position: 'absolute',
            left: '56px',
            top: '56px',
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
            pointerEvents: 'auto',
          }}
          aria-label="Alpaca"
        >
          {/* Center button is now solid green with no image */}
        </button>
      </div>
    </div>
  );
}

export default App;
