import React from 'react';
import { Collapse, Group, Text, Box } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faCloud, faLeaf, faClover, faCarrot, faDisease, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function InorganicCollapsibleLinks() {
  const [opened, setOpened] = React.useState(false);

  return (
  <Box style={{ width: 'calc(100% - 80px)', height: 'calc(100% - 20px)', marginTop: 13, marginLeft: -8, marginRight: 'auto', background: 'rgba(0,0,0,0.03)', borderRadius: 8, padding: '8px 0', display: 'block' }}>
  <Group position="apart" style={{ cursor: 'pointer', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 20, width: 'calc(100% + 20px)' }} onClick={() => setOpened((o) => !o)}>
        <Text fw={500} c="#23272A" style={{ fontSize: '0.90rem', fontFamily: 'inherit', letterSpacing: 1, marginBottom: 0, marginLeft: 0, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: 10 }}>
          <FontAwesomeIcon icon={faHouse} style={{ color: '#23272A', fontSize: '1.2em' }} />
          Inorganic Objects
        </Text>
        <Text fw={400} c="#6c757d" style={{ fontSize: '0.80rem', fontFamily: 'inherit', letterSpacing: 1, marginTop: 2, marginLeft: 31, lineHeight: 1.1 }}>
          Building Materials
        </Text>
      </Group>
  <FontAwesomeIcon icon={opened ? faMinus : faPlus} style={{ color: '#23272A', fontSize: '0.7em', position: 'relative', top: '-32px', right: '-260px' }} />
      <Collapse in={opened} transitionDuration={200}>
        <Box style={{ padding: '12px 0' }}>
          {/* Inorganic subtitles */}
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Wall</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Column</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Beam</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Slab</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Mesh</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Roof</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Shell</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Morph</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Curtain Wall</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Stair</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Railing</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Door</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Window</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Skylight</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Furniture</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Fixtures</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>Appliances</Text>
        </Box>
      </Collapse>
    </Box>
  );
}
