import React from 'react';

export default function SaveButton() {
  return (
    <div style={{ position: 'fixed', left: 'calc(50% + 100px)', bottom: '32px', zIndex: 1200 }}>
      <button
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          background: 'rgba(26, 26, 26, 0.9)',
          color: '#ffffff',
          fontSize: '0.9rem',
          outline: 'none',
          cursor: 'pointer',
        }}
      >
        Save
      </button>
    </div>
  );
}