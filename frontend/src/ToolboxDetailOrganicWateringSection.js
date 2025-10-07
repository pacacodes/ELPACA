import React from 'react';
import { Grid, Card, Text, Group } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faWater, faDroplet } from '@fortawesome/free-solid-svg-icons';

export default function WateringSection() {
  return (
    <div style={{ marginBottom: 24 }}>
  <Text fw={400} style={{ fontSize: '0.90rem', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1, fontFamily: 'inherit', color: '#23272A' }}>Watering</Text>
      <Grid gutter={16}>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="md" radius="md" withBorder style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Group position="center" spacing={8}>
              <FontAwesomeIcon icon={faTint} style={{ fontSize: '1.5em', color: '#00BFFF' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#23272A', fontFamily: 'inherit' }}>Low</Text>
            </Group>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="md" radius="md" withBorder style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Group position="center" spacing={8}>
              <FontAwesomeIcon icon={faWater} style={{ fontSize: '1.5em', color: '#1E90FF' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#23272A', fontFamily: 'inherit' }}>Medium</Text>
            </Group>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="md" radius="md" withBorder style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Group position="center" spacing={8}>
              <FontAwesomeIcon icon={faDroplet} style={{ fontSize: '1.5em', color: '#4682B4' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#23272A', fontFamily: 'inherit' }}>High</Text>
            </Group>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}
