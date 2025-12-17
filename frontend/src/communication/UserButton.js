import React from 'react';
import { Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function UserButton({ name, role }) {
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
        width: '210px', // Reduced from 250px to 210px
        height: '60px',
        background: 'rgba(0,0,0,0.03)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        borderRadius: '18px',
        justifyContent: 'space-between',
        marginLeft: '5px'
      }}
    >
      <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%', alignSelf: 'center', marginLeft: '80px', marginTop: '10px' }}>
        <span style={{ fontWeight: 500, fontSize: '0.90rem', lineHeight: 1, textAlign: 'left' }}>{name}</span>
        <span style={{ fontWeight: 400, fontSize: '0.80rem', color: '#A0A0A0', marginTop: 2, textAlign: 'left' }}>{role}</span>
      </span>
      <span style={{ position: 'relative', display: 'inline-block', width: 38.4, height: 38.4, marginLeft: '-68px', alignSelf: 'center', marginTop: '-140px' }}>
        <span style={{
          position: 'absolute',
          left: 0,
          top: -3.2,
          width: 28.8,
          height: 28.8,
          borderRadius: '50%',
          background: '#d3d3d3',
          zIndex: 1,
          boxShadow: '0 0 2px #bbb'
        }} />
        <span style={{ position: 'absolute', left: 19.2, top: 30.4, zIndex: 2, transform: 'translateY(-100%)' }}>
          <FontAwesomeIcon icon={faEnvelope} color="#23272A" style={{ fontSize: '0.96em' }} />
        </span>
      </span>
    </Button>
  );
}
