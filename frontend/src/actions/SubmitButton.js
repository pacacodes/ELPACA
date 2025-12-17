import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const SubmitButton = () => {
  return (
    <button
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '20px',
      }}
    >
      <FontAwesomeIcon icon={faPaperPlane} />
    </button>
  );
};

export default SubmitButton;