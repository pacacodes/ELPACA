import React, { useContext, useEffect } from 'react';
import { Box, Text, Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStop, faArrowsRotate, faVideo, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './CommunicationNavbar.css';
import { SectionContext } from './SectionContext';

export default function ViewsSection() {
  const { sectionsState, toggleSection } = useContext(SectionContext);

  useEffect(() => {
    toggleSection('viewsSection'); // Ensure this section is open by default
  }, [toggleSection]);

  const isCollapsed = sectionsState.viewsSection;

  return (
    <>
      <Box style={{ height: '24px' }} />
      <Box
        className="communication-navbar-scroll"
        style={{
          position: 'fixed',
          top: 34 + 280 + 10 - 20 - 80 + 20 + 600 + 10 + 30, // Move down by an additional 30px
          height: isCollapsed ? '35px' : '80px', // Match collapsed height to CommunicationNavbar
          overflowY: isCollapsed ? 'hidden' : 'auto', // Match scrolling behavior
          background: 'rgba(200,200,200,0.2)', // Match background style
          left: '10px', // Align to the left under NestedNavbar
          width: 190,
          minWidth: 100,
          maxWidth: 260,
          zIndex: 199,
          borderRadius: 8,
          padding: isCollapsed ? '0 16px' : '16px', // Match padding for collapsed view
        }}
      >
        <Box
          style={{
            position: 'relative',
            top: '-5px', // Move content up by 10px
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
            <div style={{ display: 'flex', flexDirection: 'row', gap: 0, marginLeft: 0, marginBottom: 8, justifyContent: 'space-between' }}>
              <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><span style={{fontWeight:'bold',fontSize:'1.1em',color:'#23272A'}}>N</span></Button>
              <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><span style={{fontWeight:'bold',fontSize:'1.1em',color:'#23272A'}}>S</span></Button>
              <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><span style={{fontWeight:'bold',fontSize:'1.1em',color:'#23272A'}}>E</span></Button>
              <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><span style={{fontWeight:'bold',fontSize:'1.1em',color:'#23272A'}}>W</span></Button>
              <Button variant="subtle" radius="md" size="sm" style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}><FontAwesomeIcon icon={faStop} color="#23272A" style={{marginLeft: '3px'}} /></Button>
            </div>
          )}
        </Box>
      </Box>
    </>
  );
}
