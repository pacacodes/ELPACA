import React from 'react';

const submitButtonStyle = {
  padding: '10px 15px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: 'rgba(26, 26, 26, 0.9)',
  color: '#fff',
  fontSize: '14px',
  fontWeight: '500',
  fontFamily: 'inherit',
  cursor: 'pointer',
  minWidth: '158px',
  marginLeft: '-5px',
};

const SubmitButton = () => {
  return <button style={submitButtonStyle}>Submit</button>;
};

export default SubmitButton;