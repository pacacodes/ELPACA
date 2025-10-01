import React from 'react';
import { Box, Stack, Text } from '@mantine/core';

const navSubtitles = [
  [
    'Users',
    'Professionals',
    'Ideas',
    'Budgets',
    'Calendar & Timelines'
  ], // Ideas
  ['Daily Task 1', 'Daily Task 2'], // Daily Management
  ['Map Info 1', 'Map Info 2'], // Existing Info
  ['New Project', 'Select Project', 'Import Project', 'Export Project'], // Alpaca
  ['Construction Management 1', 'Construction Management 2'], // HardHat
  ['Design 1', 'Design 2'], // Pen
  ['Documents 1', 'Documents 2'], // Compass
];

export default function NestedNavbar({ activeService }) {
  return (
    <Box style={{ position: 'fixed', top: 270, right: 29, width: 240, minWidth: 140, maxWidth: 320, zIndex: 199, background: 'rgba(0,0,0,0.03)', borderRadius: 8, padding: 16 }}>
      <Stack gap={12}>
        {navSubtitles[activeService].map((subtitle) => (
          <Text key={subtitle} size="md" fw={500} c="#23272A">
            {subtitle}
          </Text>
        ))}
      </Stack>
    </Box>
  );
}
