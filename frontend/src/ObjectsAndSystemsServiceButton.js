import React, { useState } from 'react';
import { Card, ThemeIcon, Paper, Text } from '@mantine/core';
import './CommunicationNavbar.css';
import OrganicCollapsibleLinks from './OrganicCollapsibleLinks';
import InorganicCollapsibleLinks from './InorganicCollapsibleLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function ObjectsAndSystemsServiceButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" style={{ position: 'fixed', left: 12, bottom: 32, width: 72, zIndex: 1200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ThemeIcon size={48} radius="md" variant="light" color="#fff" style={{ cursor: 'pointer', background: 'transparent' }} onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.8em', fontWeight: 300 }} color="#23272A" />
        </ThemeIcon>
      </Card>
      {open && (
  <Paper shadow="md" radius="md" className="communication-navbar-scroll" style={{ position: 'fixed', left: 32, bottom: 120, minWidth: 245, width: '245px', minHeight: 830, zIndex: 1201, padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(245,245,245,0.5)', borderRadius: '8px', overflowY: 'auto', maxHeight: '830px' }}>
          <Text
            fw={400}
            c="#23272A"
            style={{
              fontSize: '0.90rem',
              marginBottom: 18,
              marginLeft: 2,
              marginTop: 3,
              textTransform: 'uppercase',
              letterSpacing: 1,
              fontFamily: 'inherit',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '100%'
            }}
          >
            Tool Box
          </Text>
          {/* Add popup content here */}
          <OrganicCollapsibleLinks />
          <InorganicCollapsibleLinks />
          <button
            style={{ position: 'absolute', top: 20, right: 20, background: 'none', color: '#23272A', border: 'none', fontWeight: 500, fontSize: '1.5rem', cursor: 'pointer' }}
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </Paper>
      )}
    </>
  );
}
