import React from 'react';
import { Paper, Title, Stack } from '@mantine/core';

/**
 * BIMSidebar
 * Mantine-based sidebar for BIM tools, properties, and actions.
 */
export default function BIMSidebar({ children }) {
  return (
    <Paper shadow="md" radius="md" p="md" style={{ minWidth: 260, maxWidth: 340, height: '100%', background: 'rgba(251, 250, 245, 0.92)' }}>
      <Title order={4} mb="md">BIM Tools</Title>
      <Stack spacing="md">
        {children}
      </Stack>
    </Paper>
  );
}
