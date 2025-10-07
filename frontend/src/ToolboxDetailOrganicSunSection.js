import React from 'react';
import { Grid, Card, Text, Group } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudSun, faCloud } from '@fortawesome/free-solid-svg-icons';

export default function SunSection() {
  return (
    <div style={{ marginBottom: 24 }}>
  <Text fw={400} style={{ fontSize: '0.90rem', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1, fontFamily: 'inherit', color: '#23272A' }}>Sun</Text>
      <Grid gutter={16}>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="md" radius="md" withBorder style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Group position="center" spacing={8}>
              <FontAwesomeIcon icon={faSun} style={{ fontSize: '1.5em', color: '#FFD700' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#23272A', fontFamily: 'inherit' }}>Full Sun</Text>
            </Group>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="md" radius="md" withBorder style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Group position="center" spacing={8}>
              <FontAwesomeIcon icon={faCloudSun} style={{ fontSize: '1.5em', color: '#F4E285' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#23272A', fontFamily: 'inherit' }}>Partial Sun</Text>
            </Group>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="md" radius="md" withBorder style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Group position="center" spacing={8}>
              <FontAwesomeIcon icon={faCloud} style={{ fontSize: '1.5em', color: '#B0C4DE' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#23272A', fontFamily: 'inherit' }}>Shade</Text>
            </Group>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}
