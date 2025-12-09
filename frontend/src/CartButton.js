import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function CartButton() {
  return (
    <div style={{ position: 'fixed', left: 'calc(50% + 40px)', bottom: '32px', zIndex: 1200, transform: 'translateY(0)' }}>
      <button
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          background: 'none',
          color: '#23272A', // Match the dark grey of the other icons
          fontSize: '0.9rem',
          outline: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '1.458rem', color: '#23272A' }} /> {/* Reduced size by 10% */}
      </button>
    </div>
  );
}