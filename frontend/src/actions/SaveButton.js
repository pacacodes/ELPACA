import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const SaveButton = () => {
  return (
    <button
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '20px',
      }}
    >
      <FontAwesomeIcon icon={faSave} />
    </button>
  );
};

export default SaveButton;