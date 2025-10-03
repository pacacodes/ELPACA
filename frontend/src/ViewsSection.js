import React from 'react';
import { Box, Text, Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faLayerGroup, faMap, faChartBar, faThLarge, faCubes, faCamera } from '@fortawesome/free-solid-svg-icons';
import './CommunicationNavbar.css';

export default function ViewsSection() {
  return (
    <>
      <Box style={{ height: '24px' }} />
  <Box className="communication-navbar-scroll" style={{ position: 'fixed', top: 950, right: 29, width: 260, minWidth: 180, maxWidth: 340, height: '80px', zIndex: 197, background: 'rgba(0,0,0,0.03)', borderRadius: 8, padding: 16, overflowY: 'auto' }}>
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
          Views
        </Text>
        {/* Row of buttons below the title */}
  <div style={{ display: 'flex', flexDirection: 'row', gap: 0, marginLeft: 0, marginBottom: 8 }}>
          <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><FontAwesomeIcon icon={faEye} color="#23272A" /></Button>
          <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><FontAwesomeIcon icon={faLayerGroup} color="#23272A" /></Button>
          <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><FontAwesomeIcon icon={faMap} color="#23272A" /></Button>
          <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><FontAwesomeIcon icon={faChartBar} color="#23272A" /></Button>
          <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><FontAwesomeIcon icon={faThLarge} color="#23272A" /></Button>
          <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><FontAwesomeIcon icon={faCubes} color="#23272A" /></Button>
          <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><FontAwesomeIcon icon={faCamera} color="#23272A" /></Button>
        </div>
      </Box>
    </>
  );
}
