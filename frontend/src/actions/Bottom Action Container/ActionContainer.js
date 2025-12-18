import React from 'react';
import SearchBar from './Search/SearchBar';
import CartButton from './ShoppingCart/CartButton';
import SaveButton from './Save/SaveButton';
import SubmitButton from './Submit/SubmitButton';
import ToolboxServiceButton from './toolbox/ToolboxServiceButton';

const ActionContainer = () => {
  console.log('Rendering ActionContainer');

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '1400px',
      backgroundColor: 'rgba(200, 200, 200, 0.2)',
      borderRadius: '8px',
      padding: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '15px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <SearchBar />
      <ToolboxServiceButton inline />
      <CartButton />
      <SaveButton />
      <SubmitButton />
    </div>
  );
};

export default ActionContainer;