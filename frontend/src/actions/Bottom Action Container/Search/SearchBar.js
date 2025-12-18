import React from 'react';

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search for tools, objects, documents, services, or people..."
      style={{
        padding: '10px 15px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: 'rgba(26, 26, 26, 0.9)',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '500',
        position: 'relative',
        left: '-300px',
        width: '500px',
      }}
    />
  );
};

export default SearchBar;