import React from 'react';
import { Collapse, Group, Text, Box } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPenNib, faHighlighter, faMarker, faDrawPolygon, faEraser, faRuler, faPen, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function DiagramToolsCollapsibleLinks(props) {
  const [opened, setOpened] = React.useState(false);
  // Accept onSubtitleClick prop
  const onSubtitleClick = props && props.onSubtitleClick ? props.onSubtitleClick : undefined;
  React.useEffect(() => {
    const handler = e => {
      if (e.detail === 'diagram') setOpened(true);
    };
    window.addEventListener('openToolboxGroup', handler);
    return () => window.removeEventListener('openToolboxGroup', handler);
  }, []);
  return (
    <Box style={{ width: 'calc(100% + 15px)', height: 'calc(100% - 20px)', marginTop: 16, marginLeft: -8, marginRight: 'auto', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 8, padding: '8px 0', display: 'block' }}>
      <Box onClick={() => setOpened((o) => !o)} style={{ position: 'relative', cursor: 'pointer', paddingRight: 28, minHeight: 61, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Group position="apart" style={{ flexDirection: 'column', alignItems: 'flex-start', marginLeft: 20, width: 'calc(100% + 20px)' }}>
        <Text fw={500} c="#ffffff" style={{ fontSize: '0.855rem', fontFamily: 'inherit', letterSpacing: 1, marginBottom: 0, marginLeft: 0, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: 10 }}>
          <FontAwesomeIcon icon={faPencilAlt} style={{ color: '#FFD700', fontSize: '1.2em' }} />
          Diagram Tools
        </Text>
        <Text fw={400} c="#bdbdbd" style={{ fontSize: '0.76rem', fontFamily: 'inherit', letterSpacing: 1, marginTop: 0, marginLeft: 31, lineHeight: 1.1 }}>
          Sketching
        </Text>
      </Group>
      <FontAwesomeIcon icon={opened ? faMinus : faPlus} style={{ color: '#ffffff', fontSize: '0.8em', position: 'absolute', top: '50%', right: 14, transform: 'translateY(-50%)' }} />
      </Box>
      <Collapse in={opened} transitionDuration={200}>
        <Box style={{ padding: '12px 0' }}>
          {/* AI generation actions */}
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('AI Sketch')}><FontAwesomeIcon icon={faRobot} style={{ color: '#FFD700', marginRight:8 }}/>AI Sketch</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('AI Diagram')}><FontAwesomeIcon icon={faRobot} style={{ color: '#FFD700', marginRight:8 }}/>AI Diagram</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Pencil')}><FontAwesomeIcon icon={faPencilAlt} style={{ color: '#FFD700', marginRight:8 }}/>Pencil</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Marker')}><FontAwesomeIcon icon={faMarker} style={{ color: '#FFD700', marginRight:8 }}/>Marker</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Drafting Pen')}><FontAwesomeIcon icon={faPenNib} style={{ color: '#FFD700', marginRight:8 }}/>Drafting Pen</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Marquee Pencil')}><FontAwesomeIcon icon={faDrawPolygon} style={{ color: '#FFD700', marginRight:8 }}/>Marquee Pencil</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Eraser')}><FontAwesomeIcon icon={faEraser} style={{ color: '#FFD700', marginRight:8 }}/>Eraser</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Ruler')}><FontAwesomeIcon icon={faRuler} style={{ color: '#FFD700', marginRight:8 }}/>Ruler</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Highlighter')}><FontAwesomeIcon icon={faHighlighter} style={{ color: '#FFD700', marginRight:8 }}/>Highlighter</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Trace Paper')}><FontAwesomeIcon icon={faFileAlt} style={{ color: '#FFD700', marginRight:8 }}/>Trace Paper</Text>
        </Box>
      </Collapse>
    </Box>
  );
}
