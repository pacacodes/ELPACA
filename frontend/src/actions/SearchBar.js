import React from 'react';

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search..."
      style={{
        padding: '10px 15px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: 'rgba(100, 100, 100, 0.3)',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '500',
      }}
    />
  );
};

export default SearchBar;