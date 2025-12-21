import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function UserIcon({ icon, diameter = 34, color = '#23272A', background = '#d3d3d3', style }) {
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

  return (
    <span style={wrapperStyle}>
      <FontAwesomeIcon icon={icon || faEnvelope} color={color} style={{ fontSize: diameter >= 34 ? '0.98em' : '0.9em' }} />
    </span>
  );
}
