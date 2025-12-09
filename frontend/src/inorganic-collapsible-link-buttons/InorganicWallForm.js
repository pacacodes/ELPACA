import React from 'react';

export default function InorganicWallForm({ onSubmit }) {
  return (
    <div>
      <h3 style={{ color: '#ffffff' }}>Wall Parameters</h3>
      <form onSubmit={onSubmit}>
        <label style={{ color: '#ffffff' }}>
          Height:
          <input type="number" name="height" style={{ margin: '0 10px' }} required />
        </label>
        <label style={{ color: '#ffffff' }}>
          Width:
          <input type="number" name="width" style={{ margin: '0 10px' }} required />
        </label>
        <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
      </form>
    </div>
  );
}