import React, { useContext } from 'react';
import { Box, Text, Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStop, faArrowsRotate, faVideo, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './CommunicationNavbar.css';
import { SectionContext } from './SectionContext';

export default function ViewsSection() {
  const { sectionsState, toggleSection } = useContext(SectionContext);
  const isCollapsed = sectionsState.viewsSection;

  return (
    <>
      <Box style={{ height: '24px' }} />
      <Box
        className="communication-navbar-scroll"
        style={{
          position: 'fixed',
          top: isCollapsed
            ? 34 + 280 + 10 + (sectionsState.nestedNavbar ? 0 : 200) + (sectionsState.communicationNavbar ? 0 : 200)
            : 895, // Ensure original position when expanded
          right: 19,
          width: 190,
          minWidth: 190,
          maxWidth: 340,
          zIndex: 197,
          background: 'rgba(200,200,200,0.2)',
          borderRadius: 8,
          padding: 16,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, cursor: 'pointer' }} onClick={() => toggleSection('viewsSection')}>
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
            Views
          </Text>
          <FontAwesomeIcon icon={isCollapsed ? faPlus : faMinus} style={{ fontSize: '0.8rem', marginLeft: '-12px' }} />
        </div>
        {!isCollapsed && (
          <>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 0, marginLeft: 0, marginBottom: 8, justifyContent: 'space-between' }}>
              <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><span style={{fontWeight:'bold',fontSize:'1.1em',color:'#23272A'}}>N</span></Button>
              <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><span style={{fontWeight:'bold',fontSize:'1.1em',color:'#23272A'}}>S</span></Button>
              <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><span style={{fontWeight:'bold',fontSize:'1.1em',color:'#23272A'}}>E</span></Button>
              <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><span style={{fontWeight:'bold',fontSize:'1.1em',color:'#23272A'}}>W</span></Button>
              <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><FontAwesomeIcon icon={faStop} color="#23272A" style={{marginLeft: '3px'}} /></Button>
            </div>
          </>
        )}
      </Box>
    </>
  );
}
