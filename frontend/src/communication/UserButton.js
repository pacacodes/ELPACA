import React from 'react';
import { Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import UserIcon from './UserIcon';

export default function UserButton({ name, role, subject, icon }) {
  return (
    <Button
      variant="subtle"
      radius="md"
      size="sm"
      style={{
        fontFamily: 'inherit',
        color: '#23272A',
        border: 'none',
        boxShadow: 'none',
        width: '190px',
        height: '100px',
        background: 'rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '6px 10px',
        borderRadius: '8px',
        justifyContent: 'flex-start',
        gap: '10px',
        marginLeft: '10px'
      }}
    >
      <UserIcon icon={icon || faEnvelope} />
      <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', lineHeight: 1.1 }}>
        <span style={{ fontWeight: 500, fontSize: '0.90rem', lineHeight: 1, textAlign: 'left' }}>{name}</span>
        <span style={{ fontWeight: 400, fontSize: '0.80rem', color: '#A0A0A0', marginTop: 2, textAlign: 'left' }}>{role}</span>
        {subject && (
          <span style={{ fontWeight: 400, fontSize: '0.78rem', color: '#888', marginTop: 3, textAlign: 'left' }}>{subject}</span>
        )}
      </span>
    </Button>
  );
}
