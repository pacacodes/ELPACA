import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMap, faPen, faDraftingCompass, faHardHat, faTasks } from '@fortawesome/free-solid-svg-icons';

function NavigationCircle({ setActiveNav, setAlpacaPopupOpen }) {
  return (
    <>
      {/* Navigation title above circular array */}
      <div style={{position:'fixed', right:'2rem', top:'2.2rem', width:'160px', display:'flex', justifyContent:'flex-start', marginBottom:'0.38rem', zIndex:1002}}>
        <div style={{width:'100%',display:'flex',justifyContent:'flex-start',marginBottom:'0.38rem'}}>
          <span style={{ color: '#888', fontWeight: 'bold', fontSize: '0.78rem', letterSpacing: '0.04em', textAlign: 'left', marginLeft: '-2.7rem' }}>Navigation</span>
        </div>
      </div>
      {/* Floating alpaca button in top right with 6 surrounding buttons */}
      <div style={{
        position: 'fixed',
        right: '2rem',
        top: '3.8rem',
        width: '160px',
        height: '160px',
        pointerEvents: 'auto',
        zIndex: 1001,
      }}>
        {/* Navigation circle buttons */}
        {[...Array(6)].map((_, i) => {
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
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(168, 190, 150, 0.7)',
                border: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.20)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: '#fff',
                pointerEvents: 'auto',
                zIndex: 1003,
              }}
              aria-label={i === 0 ? 'Ideas' : `Circle button ${i+1}`}
              title={i === 0 ? 'Ideas' : undefined}
              onClick={() => setActiveNav(i)}
            >
              {i === 0 ? (
                <FontAwesomeIcon icon={faLightbulb} />
              ) : i === 1 ? (
                <FontAwesomeIcon icon={faMap} />
              ) : i === 2 ? (
                <FontAwesomeIcon icon={faPen} />
              ) : i === 3 ? (
                <FontAwesomeIcon icon={faDraftingCompass} />
              ) : i === 4 ? (
                <FontAwesomeIcon icon={faHardHat} />
              ) : (
                <FontAwesomeIcon icon={faTasks} />
              )}
            </button>
          );
        })}
        {/* Center alpaca/project button */}
        <button
          style={{
            position: 'absolute',
            left: '47%',
            top: '47%',
            transform: 'translate(-50%, -50%)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'transparent',
            color: '#333',
            border: 'none',
            boxShadow: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            zIndex: 1004,
            flexDirection: 'column',
            padding: 0
          }}
          aria-label="Projects"
          title="Projects"
          onClick={() => { setActiveNav(-1); setAlpacaPopupOpen(true); }}
        >
          <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt="alpaca icon" style={{ width: '32.96px', height: '32.96px', display: 'block' }} />
        </button>
      </div>
    </>
  );
}

export default NavigationCircle;
