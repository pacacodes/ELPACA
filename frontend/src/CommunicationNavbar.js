import React from 'react';
import { Box, Stack, Text } from '@mantine/core';
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
      <Stack gap={12} style={{ marginTop: 28 }}>
        {communicationLinks.map(link => (
          <Text key={link.label} fw={400} c="#23272A" style={{ fontSize: '0.90rem', display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'inherit', marginLeft: 10 }}>
            <FontAwesomeIcon icon={link.icon} style={{ marginRight: 6 }} />
            {link.label}
          </Text>
        ))}
      </Stack>
    </Box>
  );
}
