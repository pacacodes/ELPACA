import React, { useContext } from 'react';
import './CommunicationNavbar.css';
import { Box, Stack, Text, Group, Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCommentDots, faPhone, faPaperPlane, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { SectionContext } from './SectionContext';

export default function CommunicationNavbar() {
  const { sectionsState, toggleSection } = useContext(SectionContext);
  const isCollapsed = sectionsState.communicationNavbar;

  const communicationLinks = [
    { label: 'Email', icon: faEnvelope },
    { label: 'Chat', icon: faCommentDots },
    { label: 'Phone', icon: faPhone },
    { label: 'Send Message', icon: faPaperPlane },
  ];

  return (
    <Box
      className="communication-navbar-scroll"
      style={{
        position: 'fixed',
        top: isCollapsed
          ? 34 + 280 + 10 + (sectionsState.nestedNavbar ? 0 : 200)
          : 550, // Ensure original position when expanded
        right: 19,
        width: 190,
        minWidth: 180,
        maxWidth: 340,
        zIndex: 198,
        background: 'rgba(200,200,200,0.2)',
        borderRadius: 8,
        padding: 16
      }}
    >
      <Text
        fw={400}
        c="#23272A"
        style={{
          fontSize: '0.90rem',
          marginBottom: 18,
          marginLeft: 0, // Adjusted from 10px to 0 to move left
          textTransform: 'uppercase',
          letterSpacing: 1,
          fontFamily: 'inherit',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => toggleSection('communicationNavbar')}
      >
        Communication
        <FontAwesomeIcon icon={isCollapsed ? faPlus : faMinus} style={{ fontSize: '0.8rem', marginLeft: '-30px' }} />
      </Text>
      {!isCollapsed && (
        <>
          <Group spacing={16} style={{ marginLeft: 0, marginBottom: 18 }}>
            {communicationLinks.map(link => (
              <Button
                key={link.label}
                variant="subtle"
                radius="md"
                size="sm"
                style={{ padding: '6px 10px', border: 'none', boxShadow: 'none', background: 'none' }}
              >
                <FontAwesomeIcon icon={link.icon} color="#23272A" />
              </Button>
            ))}
          </Group>
          <Stack gap={12} style={{ marginTop: 10, alignItems: 'center' }}>
            {/* Combined user button: name/title left, icon group right */}
            <Button
              variant="subtle"
              radius="md"
              size="sm"
              style={{
                fontFamily: 'inherit',
                color: '#23272A',
                border: 'none',
                boxShadow: 'none',
                width: '170px', // Reduced from 210px to 170px
                height: '80px', // Increased height to accommodate the third row
                background: 'rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 0,
                borderRadius: '18px',
                justifyContent: 'space-between',
                marginLeft: 'auto', // Centered horizontally
                marginRight: 'auto' // Centered horizontally
              }}
            >
              <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%', alignSelf: 'center', marginLeft: '60px', marginTop: '10px' }}>
                <span style={{ fontWeight: 500, fontSize: '0.90rem', lineHeight: 1, textAlign: 'left' }}>Jordan Avery</span>
                <span style={{ fontWeight: 400, fontSize: '0.80rem', color: '#A0A0A0', marginTop: 2, textAlign: 'left' }}>Architect</span>
                <span style={{ fontWeight: 400, fontSize: '0.75rem', color: '#23272A', marginTop: 2, textAlign: 'left' }}>Subject</span> {/* Made Subject copy darker */}
              </span>
              <span style={{ position: 'relative', display: 'inline-block', width: 34.56, height: 34.56, marginLeft: '-88px', alignSelf: 'center', marginTop: '-175px' }}> {/* Moved icon group up by 10px */}
                <span style={{
                  position: 'absolute',
                  left: 0,
                  top: -12.88, /* Adjusted top to move the icon group up */
                  width: 25.92, // Reduced by 10%
                  height: 25.92, // Reduced by 10%
                  borderRadius: '50%',
                  background: '#d3d3d3',
                  zIndex: 1,
                  boxShadow: '0 0 2px #bbb'
                }} />
                <span style={{ position: 'absolute', left: 17.28, top: 17.36, zIndex: 2, transform: 'translateY(-100%)' }}>
                  <FontAwesomeIcon icon={faEnvelope} color="#23272A" style={{ fontSize: '0.864em' }} />
                </span>
              </span>
            </Button>

            {/* User Button 2 with padding above */}
            <div style={{ height: '12px' }} />
            <Button
              variant="subtle"
              radius="md"
              size="sm"
              style={{
                fontFamily: 'inherit',
                color: '#23272A',
                border: 'none',
                boxShadow: 'none',
                width: '170px', // Reduced from 210px to 170px
                height: '80px', // Increased height to accommodate the third row
                background: 'rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 0,
                borderRadius: '18px',
                justifyContent: 'space-between',
                marginLeft: 'auto', // Centered horizontally
                marginRight: 'auto' // Centered horizontally
              }}
            >
              <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%', alignSelf: 'center', marginLeft: '60px', marginTop: '10px' }}>
                <span style={{ fontWeight: 500, fontSize: '0.90rem', lineHeight: 1, textAlign: 'left' }}>User Button 2</span>
                <span style={{ fontWeight: 400, fontSize: '0.80rem', color: '#A0A0A0', marginTop: 2, textAlign: 'left' }}>Role</span>
                <span style={{ fontWeight: 400, fontSize: '0.75rem', color: '#23272A', marginTop: 2, textAlign: 'left' }}>Subject</span> {/* Made Subject copy darker */}
              </span>
              <span style={{ position: 'relative', display: 'inline-block', width: 34.56, height: 34.56, marginLeft: '-88px', alignSelf: 'center', marginTop: '-175px' }}> {/* Moved icon group up by 10px */}
                <span style={{
                  position: 'absolute',
                  left: 0,
                  top: -12.88, /* Adjusted top to move the icon group up */
                  width: 25.92, // Reduced by 10%
                  height: 25.92, // Reduced by 10%
                  borderRadius: '50%',
                  background: '#d3d3d3',
                  zIndex: 1,
                  boxShadow: '0 0 2px #bbb'
                }} />
                <span style={{ position: 'absolute', left: 17.28, top: 17.36, zIndex: 2, transform: 'translateY(-100%)' }}>
                  <FontAwesomeIcon icon={faEnvelope} color="#23272A" style={{ fontSize: '0.864em' }} />
                </span>
              </span>
            </Button>

            {/* User Button 3 */}
            <div style={{ height: '12px' }} />
            <Button
              variant="subtle"
              radius="md"
              size="sm"
              style={{
                fontFamily: 'inherit',
                color: '#23272A',
                border: 'none',
                boxShadow: 'none',
                width: '170px', // Reduced from 210px to 170px
                height: '80px', // Increased height to accommodate the third row
                background: 'rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 0,
                borderRadius: '18px',
                justifyContent: 'space-between',
                marginLeft: 'auto', // Centered horizontally
                marginRight: 'auto' // Centered horizontally
              }}
            >
              <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%', alignSelf: 'center', marginLeft: '60px', marginTop: '10px' }}>
                <span style={{ fontWeight: 500, fontSize: '0.90rem', lineHeight: 1, textAlign: 'left' }}>User Button 3</span>
                <span style={{ fontWeight: 400, fontSize: '0.80rem', color: '#A0A0A0', marginTop: 2, textAlign: 'left' }}>Role</span>
                <span style={{ fontWeight: 400, fontSize: '0.75rem', color: '#23272A', marginTop: 2, textAlign: 'left' }}>Subject</span> {/* Made Subject copy darker */}
              </span>
              <span style={{ position: 'relative', display: 'inline-block', width: 34.56, height: 34.56, marginLeft: '-88px', alignSelf: 'center', marginTop: '-175px' }}> {/* Moved icon group up by 10px */}
                <span style={{
                  position: 'absolute',
                  left: 0,
                  top: -12.88, /* Adjusted top to move the icon group up */
                  width: 25.92, // Reduced by 10%
                  height: 25.92, // Reduced by 10%
                  borderRadius: '50%',
                  background: '#d3d3d3',
                  zIndex: 1,
                  boxShadow: '0 0 2px #bbb'
                }} />
                <span style={{ position: 'absolute', left: 17.28, top: 17.36, zIndex: 2, transform: 'translateY(-100%)' }}>
                  <FontAwesomeIcon icon={faEnvelope} color="#23272A" style={{ fontSize: '0.864em' }} />
                </span>
              </span>
            </Button>

            {/* User Button 4 */}
            <div style={{ height: '12px' }} />
            <Button
              variant="subtle"
              radius="md"
              size="sm"
              style={{
                fontFamily: 'inherit',
                color: '#23272A',
                border: 'none',
                boxShadow: 'none',
                width: '170px', // Reduced from 210px to 170px
                height: '80px', // Increased height to accommodate the third row
                background: 'rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 0,
                borderRadius: '18px',
                justifyContent: 'space-between',
                marginLeft: 'auto', // Centered horizontally
                marginRight: 'auto' // Centered horizontally
              }}
            >
              <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%', alignSelf: 'center', marginLeft: '60px', marginTop: '10px' }}>
                <span style={{ fontWeight: 500, fontSize: '0.90rem', lineHeight: 1, textAlign: 'left' }}>User Button 4</span>
                <span style={{ fontWeight: 400, fontSize: '0.80rem', color: '#A0A0A0', marginTop: 2, textAlign: 'left' }}>Role</span>
                <span style={{ fontWeight: 400, fontSize: '0.75rem', color: '#23272A', marginTop: 2, textAlign: 'left' }}>Subject</span> {/* Made Subject copy darker */}
              </span>
              <span style={{ position: 'relative', display: 'inline-block', width: 34.56, height: 34.56, marginLeft: '-88px', alignSelf: 'center', marginTop: '-175px' }}> {/* Moved icon group up by 10px */}
                <span style={{
                  position: 'absolute',
                  left: 0,
                  top: -12.88, /* Adjusted top to move the icon group up */
                  width: 25.92, // Reduced by 10%
                  height: 25.92, // Reduced by 10%
                  borderRadius: '50%',
                  background: '#d3d3d3',
                  zIndex: 1,
                  boxShadow: '0 0 2px #bbb'
                }} />
                <span style={{ position: 'absolute', left: 17.28, top: 17.36, zIndex: 2, transform: 'translateY(-100%)' }}>
                  <FontAwesomeIcon icon={faEnvelope} color="#23272A" style={{ fontSize: '0.864em' }} />
                </span>
              </span>
            </Button>

            {/* User Button 5 */}
            <div style={{ height: '12px' }} />
            <Button
              variant="subtle"
              radius="md"
              size="sm"
              style={{
                fontFamily: 'inherit',
                color: '#23272A',
                border: 'none',
                boxShadow: 'none',
                width: '170px', // Reduced from 210px to 170px
                height: '80px', // Increased height to accommodate the third row
                background: 'rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 0,
                borderRadius: '18px',
                justifyContent: 'space-between',
                marginLeft: 'auto', // Centered horizontally
                marginRight: 'auto' // Centered horizontally
              }}
            >
              <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%', alignSelf: 'center', marginLeft: '60px', marginTop: '10px' }}>
                <span style={{ fontWeight: 500, fontSize: '0.90rem', lineHeight: 1, textAlign: 'left' }}>User Button 5</span>
                <span style={{ fontWeight: 400, fontSize: '0.80rem', color: '#A0A0A0', marginTop: 2, textAlign: 'left' }}>Role</span>
                <span style={{ fontWeight: 400, fontSize: '0.75rem', color: '#23272A', marginTop: 2, textAlign: 'left' }}>Subject</span> {/* Made Subject copy darker */}
              </span>
              <span style={{ position: 'relative', display: 'inline-block', width: 34.56, height: 34.56, marginLeft: '-88px', alignSelf: 'center', marginTop: '-175px' }}> {/* Moved icon group up by 10px */}
                <span style={{
                  position: 'absolute',
                  left: 0,
                  top: -12.88, /* Adjusted top to move the icon group up */
                  width: 25.92, // Reduced by 10%
                  height: 25.92, // Reduced by 10%
                  borderRadius: '50%',
                  background: '#d3d3d3',
                  zIndex: 1,
                  boxShadow: '0 0 2px #bbb'
                }} />
                <span style={{ position: 'absolute', left: 17.28, top: 17.36, zIndex: 2, transform: 'translateY(-100%)' }}>
                  <FontAwesomeIcon icon={faEnvelope} color="#23272A" style={{ fontSize: '0.864em' }} />
                </span>
              </span>
            </Button>
          </Stack>
        </>
      )}
    </Box>
  );
}
