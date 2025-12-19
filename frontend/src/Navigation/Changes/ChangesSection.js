import React, { useContext, useEffect } from 'react';
import { Box, Text, Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import SubmitButton from './Submit/SubmitButton';
import ChangesCollapsible from './ChangesCollapsibleLink/ChangesCollapsible';
import '../../communication/CommunicationNavbar.css';
import { SectionContext } from '../../chatbot/SectionContext';

export default function ChangesSection() {
  const { sectionsState, toggleSection } = useContext(SectionContext);

  useEffect(() => {
    toggleSection('changesSection');
  }, [toggleSection]);

  return (
    <>
      <Box style={{ height: '14px' }} />
      <Box
        className="communication-navbar-scroll"
        style={{
          position: 'fixed',
          top: (34 + 280 + 10 - 20 - 80 + 20 + 600 + 10 + 30 + 25 + 5 + 40 + 5 - 200) + 80 + 10 + 35, // moved up an additional 5px
          height: '155px', // reduced height to match condensed list
          overflowY: 'auto',
          background: 'rgba(200,200,200,0.2)',
          left: '10px',
          width: 190,
          minWidth: 100,
          maxWidth: 260,
          zIndex: 199,
          borderRadius: 8,
          padding: '16px',
        }}
      >
        <Box style={{ position: 'relative', top: '-5px' }}>
          <div
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, cursor: 'pointer' }}
            onClick={() => toggleSection('changesSection')}
          >
            <Text
              fw={400}
              c="#23272A"
              style={{
                fontSize: '0.90rem',
                textTransform: 'uppercase',
                letterSpacing: 1,
                fontFamily: 'inherit',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%',
              }}
            >
              CHANGES
            </Text>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 0, marginLeft: 0, marginBottom: 8, justifyContent: 'space-between' }}>
            <Button
              variant="subtle"
              radius="md"
              style={{
                padding: 0,
                height: '36px',
                width: '36px',
                border: 'none',
                boxShadow: 'none',
                background: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                marginLeft: '-12px',
              }}
            >
              <FontAwesomeIcon icon={faSave} color="#23272A" style={{ fontSize: '22px' }} />
            </Button>
            <SubmitButton />
          </div>
          <ChangesCollapsible />
        </Box>
      </Box>
    </>
  );
}
