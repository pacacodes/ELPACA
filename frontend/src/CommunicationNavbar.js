import React from 'react';
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
    <Box style={{ position: 'fixed', top: 630, right: 29, width: 260, minWidth: 180, maxWidth: 340, height: '170px', zIndex: 198, background: 'rgba(0,0,0,0.03)', borderRadius: 8, padding: 16 }}>
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
            width: '270px',
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
          <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%', alignSelf: 'center', marginLeft: '60px', marginTop: '10px' }}>
            <span style={{ fontWeight: 500, fontSize: '0.90rem', lineHeight: 1, textAlign: 'left' }}>Jordan Avery</span>
            <span style={{ fontWeight: 400, fontSize: '0.80rem', color: '#A0A0A0', marginTop: 2, textAlign: 'left' }}>Architect</span>
          </span>
          <span style={{ position: 'relative', display: 'inline-block', width: 32, height: 32, marginLeft: '-68px', alignSelf: 'center', marginTop: '-100px' }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: 14,
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: '#d3d3d3',
              zIndex: 1,
              boxShadow: '0 0 2px #bbb'
            }} />
            <span style={{ position: 'absolute', left: 16, top: 42, zIndex: 2, transform: 'translateY(-100%)' }}>
              <FontAwesomeIcon icon={faEnvelope} color="#23272A" style={{ fontSize: '0.8em' }} />
            </span>
          </span>
        </Button>
      </Stack>
    </Box>
  );
}
