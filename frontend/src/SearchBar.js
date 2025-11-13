import React from 'react';

export default function SearchBar() {
  return (
    <div style={{ position: 'fixed', left: '600px', bottom: '32px', zIndex: 1200 }}>
      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          background: 'rgba(26, 26, 26, 0.9)',
          color: '#ffffff',
          fontSize: '0.9rem',
          outline: 'none',
          width: '260px', // Increased width by 60px
        }}
      />
    </div>
  );
}