import React from 'react';
import { Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons';

export default function WallButton({ onClick }) {
  return (
    <Text
      fw={400}
      c="#ffffff"
      style={{
        fontSize: '0.90rem',
        marginBottom: 8,
        marginLeft: 57,
        fontFamily: 'inherit',
        letterSpacing: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faGripHorizontal}
        style={{ marginRight: 8, color: '#87CEEB' }}
      />
      Wall
    </Text>
  );
}