import React from 'react';
import SearchBar from './Search/SearchBar';
import CartButton from './ShoppingCart/CartButton';
import ToolboxServiceButton from './toolbox/ToolboxServiceButton';

const ActionContainer = () => {
  console.log('Rendering ActionContainer');

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: '1200px',
      borderRadius: '8px',
      padding: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      pointerEvents: 'none',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', pointerEvents: 'auto' }}>
        <ToolboxServiceButton inline />
        <SearchBar />
        <CartButton />
      </div>
    </div>
  );
};

export default ActionContainer;