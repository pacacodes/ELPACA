import React from 'react';
import SearchBar from '../actions/SearchBar';
import CartButton from '../actions/CartButton';
import SaveButton from '../actions/SaveButton';
import SubmitButton from '../actions/SubmitButton';
import ToolboxServiceButton from '../actions/toolbox/ToolboxServiceButton';

const ActionContainer = () => {
  console.log('Rendering ActionContainer');

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '600px',
      backgroundColor: 'rgba(200, 200, 200, 0.2)',
      borderRadius: '12px',
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