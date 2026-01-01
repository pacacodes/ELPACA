import React from 'react';

export default function UserIcon({ diameter = 54, background = '#d3d3d3', style, children }) {
  const wrapperStyle = {
    width: diameter,
    height: diameter,
    borderRadius: '50%',
    background,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 2px #bbb',
    ...style,
  };

  return <span style={wrapperStyle}>{children}</span>;
}
