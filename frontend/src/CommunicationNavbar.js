import React from 'react';
import './CommunicationNavbar.css';
import { Box, Stack, Text, Group, Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCommentDots, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const communicationLinks = [
  { label: 'Email', icon: faEnvelope },
  { label: 'Chat', icon: faCommentDots },
  { label: 'Phone', icon: faPhone },
  { label: 'Send Message', icon: faPaperPlane },
];

export default function CommunicationNavbar() {
  return (
  <Box className="communication-navbar-scroll" style={{ position: 'fixed', top: 630, right: 29, width: 260, minWidth: 180, maxWidth: 340, height: '270px', zIndex: 198, background: 'rgba(0,0,0,0.03)', borderRadius: 8, padding: 16, overflowY: 'auto' }}>
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
        Communication
      </Text>
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
            width: '250px',
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
            <span style={{ fontWeight: 500, fontSize: '0.90rem', lineHeight: 1, textAlign: 'left' }}>Jordan Avery</span>
            <span style={{ fontWeight: 400, fontSize: '0.80rem', color: '#A0A0A0', marginTop: 2, textAlign: 'left' }}>Architect</span>
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
            width: '250px',
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
            <span style={{ fontWeight: 500, fontSize: '0.90rem', lineHeight: 1, textAlign: 'left' }}>User Button 2</span>
            <span style={{ fontWeight: 400, fontSize: '0.80rem', color: '#A0A0A0', marginTop: 2, textAlign: 'left' }}>Role</span>
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
            width: '250px',
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
            <span style={{ fontWeight: 500, fontSize: '0.90rem', lineHeight: 1, textAlign: 'left' }}>User Button 3</span>
            <span style={{ fontWeight: 400, fontSize: '0.80rem', color: '#A0A0A0', marginTop: 2, textAlign: 'left' }}>Role</span>
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
            width: '250px',
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
            <span style={{ fontWeight: 500, fontSize: '0.90rem', lineHeight: 1, textAlign: 'left' }}>User Button 4</span>
            <span style={{ fontWeight: 400, fontSize: '0.80rem', color: '#A0A0A0', marginTop: 2, textAlign: 'left' }}>Role</span>
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
            width: '250px',
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
            <span style={{ fontWeight: 500, fontSize: '0.90rem', lineHeight: 1, textAlign: 'left' }}>User Button 5</span>
            <span style={{ fontWeight: 400, fontSize: '0.80rem', color: '#A0A0A0', marginTop: 2, textAlign: 'left' }}>Role</span>
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
      </Stack>
    </Box>

  );
}
