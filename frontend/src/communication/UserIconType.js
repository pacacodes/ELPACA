import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function UserIconType({ icon, color = '#23272A', size = '0.98em', style }) {
  return (
    <FontAwesomeIcon icon={icon || faEnvelope} color={color} style={{ fontSize: size, ...style }} />
  );
}
