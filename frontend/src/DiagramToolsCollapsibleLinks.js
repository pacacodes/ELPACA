import React from 'react';
import { Collapse, Group, Text, Box } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPenNib, faHighlighter, faMarker, faDrawPolygon, faEraser, faRuler, faPen } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function DiagramToolsCollapsibleLinks() {
  const [opened, setOpened] = React.useState(false);

  return (
    <Box style={{ width: 'calc(100% + 15px)', height: 'calc(100% - 20px)', marginTop: 13, marginLeft: -8, marginRight: 'auto', background: 'rgba(0,0,0,0.03)', borderRadius: 8, padding: '8px 0', display: 'block' }}>
      <Group position="apart" style={{ cursor: 'pointer', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 20, width: 'calc(100% + 20px)' }} onClick={() => setOpened((o) => !o)}>
        <Text fw={500} c="#23272A" style={{ fontSize: '0.90rem', fontFamily: 'inherit', letterSpacing: 1, marginBottom: 0, marginLeft: 0, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: 10 }}>
          <FontAwesomeIcon icon={faPencilAlt} style={{ color: '#23272A', fontSize: '1.2em' }} />
          Diagram Tools
        </Text>
        <Text fw={400} c="#6c757d" style={{ fontSize: '0.80rem', fontFamily: 'inherit', letterSpacing: 1, marginTop: 2, marginLeft: 31, lineHeight: 1.1 }}>
          Sketching
        </Text>
      </Group>
      <FontAwesomeIcon icon={opened ? faMinus : faPlus} style={{ color: '#23272A', fontSize: '0.7em', position: 'relative', top: '-32px', right: '-220px' }} />
      <Collapse in={opened} transitionDuration={200}>
        <Box style={{ padding: '12px 0' }}>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faPen} style={{marginRight:8}}/>Pen</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faPencilAlt} style={{marginRight:8}}/>Pencil</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faMarker} style={{marginRight:8}}/>Marker</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faPenNib} style={{marginRight:8}}/>Drafting Pen</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faDrawPolygon} style={{marginRight:8}}/>Marquee Pencil</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faEraser} style={{marginRight:8}}/>Eraser</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faRuler} style={{marginRight:8}}/>Ruler</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faHighlighter} style={{marginRight:8}}/>Highlighter</Text>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faFileAlt} style={{marginRight:8}}/>Trace Paper</Text>
        </Box>
      </Collapse>
    </Box>
  );
}
