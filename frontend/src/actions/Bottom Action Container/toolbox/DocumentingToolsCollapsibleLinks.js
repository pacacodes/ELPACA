import React from 'react';
import { Box, Stack, Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileAlt,
  faFileContract,
  faFileArchive,
  faFilePdf,
  faRobot
} from '@fortawesome/free-solid-svg-icons';

const documentingTools = [
  { label: 'Reports', icon: faFileAlt },
  { label: 'Contracts', icon: faFileContract },
  { label: 'Archives', icon: faFileArchive },
  { label: 'PDFs', icon: faFilePdf },
];

export default function DocumentingToolsCollapsibleLinks(props) {
  const onSubtitleClick = props && props.onSubtitleClick ? props.onSubtitleClick : undefined;

  return (
    <Box style={{ padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
      <Text fw={500} style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
        Documenting Tools
      </Text>
      <Stack spacing="sm">
        {documentingTools.map((tool) => (
          <Box
            key={tool.label}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <FontAwesomeIcon icon={tool.icon} size="lg" />
            <Text>{tool.label}</Text>
          </Box>
        ))}
        <Box style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Generate AI Model')}>
          <FontAwesomeIcon icon={faRobot} size="lg" />
          <Text>Generate AI Model</Text>
        </Box>
        <Box style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('AI Document')}>
          <FontAwesomeIcon icon={faRobot} size="lg" />
          <Text>AI Document</Text>
        </Box>
      </Stack>
    </Box>
  );
}