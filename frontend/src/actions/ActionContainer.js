import React from 'react';
import SearchBar from '../actions/SearchBar';
import CartButton from '../actions/CartButton';
import SaveButton from '../actions/SaveButton';
import SubmitButton from '../actions/SubmitButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ActionContainer = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '8px',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <SearchBar />
      <button style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '20px',
      }}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <CartButton />
      <SaveButton />
      <SubmitButton />
    </div>
  );
};

export default ActionContainer;