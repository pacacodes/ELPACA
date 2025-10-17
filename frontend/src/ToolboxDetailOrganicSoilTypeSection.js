import React, { useState } from 'react';
import { Grid, Card, Text, Group, Collapse, ActionIcon } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain, faLeaf, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { IconPlus, IconMinus } from '@tabler/icons-react';

export default function SoilTypeSection() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ marginBottom: 24, backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: '8px', position: 'relative', width: 'calc(100% - 140px)', margin: '20px auto' }}>
      <Text fw={400} style={{ fontSize: '0.90rem', marginBottom: 12, textTransform: 'capitalize', letterSpacing: 1, fontFamily: 'inherit', color: '#ffffff', display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faMountain} style={{ fontSize: '1.32em', color: '#8D6E63', marginRight: '8px' }} />
        Soil Type
      </Text>
      <ActionIcon
        onClick={() => setOpened((o) => !o)}
        style={{ position: 'absolute', top: 26, right: 16, background: 'none', border: 'none' }}
      >
        {opened ? <IconMinus size={14} style={{ color: '#ffffff', cursor: 'pointer' }} /> : <IconPlus size={14} style={{ color: '#ffffff', cursor: 'pointer' }} />}
      </ActionIcon>
      <Collapse in={opened}>
        <Grid gutter={16}>
          <Grid.Col span={4} style={{ paddingLeft: '20px' }}>
            <Card shadow="sm" padding="md" radius="lg" withBorder style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <FontAwesomeIcon icon={faMountain} style={{ fontSize: '1.2em', color: '#8D6E63', marginRight: '10px' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit' }}>Sandy</Text>
            </Card>
            <div style={{ marginTop: '5px', marginBottom: '-10px', overflowX: 'auto', overflowY: 'hidden', maxHeight: '720px', width: '100%', maxWidth: '620px', padding: '-20px', borderRadius: '8px', display: 'flex', flexWrap: 'nowrap', justifyContent: 'flex-start', transform: 'translate(-20px, -20px)' }}>
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} style={{ flex: '0 0 calc(50% - 8px)', maxWidth: 'calc(50% - 8px)', display: 'flex', justifyContent: 'center', transform: 'rotate(90deg)', marginRight: '-40px' }}>
                  <Card shadow="sm" padding={0} radius={8} withBorder style={{ background: 'rgba(26, 26, 26, 0.15)', borderRadius: '8px', width: '230px', height: '160px', padding: '1px 1px 1px 1px', position: 'relative', transform: 'rotate(270deg)' }}>
                    <div style={{ position: 'absolute', bottom: '10px', left: '10px', textAlign: 'left' }}>
                      <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit', marginBottom: 4 }}>Card Title</Text>
                      <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit' }}>Card description</Text>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </Grid.Col>
          <Grid.Col span={4} style={{ paddingLeft: '20px' }}>
            <Card shadow="sm" padding="md" radius="lg" withBorder style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <FontAwesomeIcon icon={faLeaf} style={{ fontSize: '1.2em', color: '#4CAF50', marginRight: '10px' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit' }}>Loamy</Text>
            </Card>
            <div style={{ marginTop: '5px', marginBottom: '-10px', overflowX: 'auto', overflowY: 'hidden', maxHeight: '720px', width: '100%', maxWidth: '620px', padding: '-20px', borderRadius: '8px', display: 'flex', flexWrap: 'nowrap', justifyContent: 'flex-start', transform: 'translate(-20px, -20px)' }}>
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} style={{ flex: '0 0 calc(50% - 8px)', maxWidth: 'calc(50% - 8px)', display: 'flex', justifyContent: 'center', transform: 'rotate(90deg)', marginRight: '-40px' }}>
                  <Card shadow="sm" padding={0} radius={8} withBorder style={{ background: 'rgba(26, 26, 26, 0.15)', borderRadius: '8px', width: '230px', height: '160px', padding: '1px 1px 1px 1px', position: 'relative', transform: 'rotate(270deg)' }}>
                    <div style={{ position: 'absolute', bottom: '10px', left: '10px', textAlign: 'left' }}>
                      <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit', marginBottom: 4 }}>Card Title</Text>
                      <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit' }}>Card description</Text>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </Grid.Col>
          <Grid.Col span={4} style={{ paddingLeft: '20px' }}>
            <Card shadow="sm" padding="md" radius="lg" withBorder style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <FontAwesomeIcon icon={faSeedling} style={{ fontSize: '1.2em', color: '#2E7D32', marginRight: '10px' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit' }}>Clay</Text>
            </Card>
            <div style={{ marginTop: '5px', marginBottom: '-10px', overflowX: 'auto', overflowY: 'hidden', maxHeight: '720px', width: '100%', maxWidth: '620px', padding: '-20px', borderRadius: '8px', display: 'flex', flexWrap: 'nowrap', justifyContent: 'flex-start', transform: 'translate(-20px, -20px)' }}>
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} style={{ flex: '0 0 calc(50% - 8px)', maxWidth: 'calc(50% - 8px)', display: 'flex', justifyContent: 'center', transform: 'rotate(90deg)', marginRight: '-40px' }}>
                  <Card shadow="sm" padding={0} radius={8} withBorder style={{ background: 'rgba(26, 26, 26, 0.15)', borderRadius: '8px', width: '230px', height: '160px', padding: '1px 1px 1px 1px', position: 'relative', transform: 'rotate(270deg)' }}>
                    <div style={{ position: 'absolute', bottom: '10px', left: '10px', textAlign: 'left' }}>
                      <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit', marginBottom: 4 }}>Card Title</Text>
                      <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit' }}>Card description</Text>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </Grid.Col>
        </Grid>
      </Collapse>
    </div>
  );
}
