import React, { useState } from 'react';
import { Card, ThemeIcon, Paper, Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function PermacultureServiceButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
  <Card shadow="sm" padding="lg" radius="md" style={{ position: 'fixed', left: 12, bottom: 32, width: 72, zIndex: 1200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <ThemeIcon size={48} radius="md" variant="light" color="#fff" style={{ cursor: 'pointer', background: 'transparent' }} onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.8em', fontWeight: 300 }} color="#23272A" />
        </ThemeIcon>
      </Card>
      {open && (
  <Paper shadow="md" radius="md" style={{ position: 'fixed', left: 32, bottom: 120, minWidth: 340, minHeight: 630, zIndex: 1201, padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(245,245,245,0.5)', borderRadius: '8px' }}>
          <Text
            fw={400}
            c="#23272A"
            style={{
              fontSize: '0.90rem',
              marginBottom: 18,
              marginLeft: 10,
              textTransform: 'uppercase',
              letterSpacing: 1,
              fontFamily: 'inherit',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '100%'
            }}
          >
            Objects & Systems
          </Text>
          {/* Add popup content here */}
          <button
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: 18,
              right: 18,
              width: '28px',
              height: '28px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              pointerEvents: 'auto',
              zIndex: 1202,
            }}
            aria-label="Close popup"
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <line x1="3" y1="3" x2="15" y2="15" stroke="#23272A" strokeWidth="2" />
              <line x1="15" y1="3" x2="3" y2="15" stroke="#23272A" strokeWidth="2" />
            </svg>
          </button>
        </Paper>
      )}
    </>
  );
}
