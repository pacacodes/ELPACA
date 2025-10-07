import React from 'react';
import { Grid, Card, Text, Group } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain, faLeaf, faSeedling } from '@fortawesome/free-solid-svg-icons';

export default function SoilTypeSection() {
  return (
    <div style={{ marginBottom: 24 }}>
  <Text fw={400} style={{ fontSize: '0.90rem', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1, fontFamily: 'inherit', color: '#23272A' }}>Soil Type</Text>
      <Grid gutter={16}>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="md" radius="md" withBorder style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Group position="center" spacing={8}>
              <FontAwesomeIcon icon={faMountain} style={{ fontSize: '1.5em', color: '#8B4513' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#23272A', fontFamily: 'inherit' }}>Sandy</Text>
            </Group>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="md" radius="md" withBorder style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Group position="center" spacing={8}>
              <FontAwesomeIcon icon={faLeaf} style={{ fontSize: '1.5em', color: '#228B22' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#23272A', fontFamily: 'inherit' }}>Loamy</Text>
            </Group>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="md" radius="md" withBorder style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Group position="center" spacing={8}>
              <FontAwesomeIcon icon={faSeedling} style={{ fontSize: '1.5em', color: '#A0522D' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#23272A', fontFamily: 'inherit' }}>Clay</Text>
            </Group>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}
