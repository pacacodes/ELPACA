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
        width: '500px',
        maxWidth: '70vw',
        boxShadow: '0 6px 18px rgba(0, 0, 0, 0.25)',
      }}
    />
  );
};

export default SearchBar;