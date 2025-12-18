import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartButton = () => {
  return (
    <button
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '20px',
      }}
    >
      <FontAwesomeIcon icon={faShoppingCart} />
    </button>
  );
};

export default CartButton;