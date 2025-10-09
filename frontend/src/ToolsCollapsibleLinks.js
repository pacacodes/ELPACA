import React from 'react';
import { Collapse, Group, Text, Box } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDrawPolygon, faSlash, faFillDrip, faFont, faTag, faRulerCombined, faProjectDiagram, faCircle, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { faPenFancy } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function ToolsCollapsibleLinks(props) {
  const [opened, setOpened] = React.useState(false);
  // Accept onSubtitleClick prop
  const onSubtitleClick = props && props.onSubtitleClick ? props.onSubtitleClick : undefined;
  React.useEffect(() => {
    const handler = e => {
      if (e.detail === 'documenting') setOpened(true);
    };
    window.addEventListener('openToolboxGroup', handler);
    return () => window.removeEventListener('openToolboxGroup', handler);
  }, []);

  return (
    <Box style={{ width: 'calc(100% + 15px)', height: 'calc(100% - 20px)', marginTop: 13, marginLeft: -8, marginRight: 'auto', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 8, padding: '8px 0', display: 'block' }}>
      <Group position="apart" style={{ cursor: 'pointer', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 20, width: 'calc(100% + 20px)' }} onClick={() => setOpened((o) => !o)}>
        <Text fw={500} c="#ffffff" style={{ fontSize: '0.90rem', fontFamily: 'inherit', letterSpacing: 1, marginBottom: 0, marginLeft: 0, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: 10 }}>
          <FontAwesomeIcon icon={faPenFancy} style={{ color: '#ffffff', fontSize: '1.2em' }} />
          Documenting Tools
        </Text>
        <Text fw={400} c="#bdbdbd" style={{ fontSize: '0.80rem', fontFamily: 'inherit', letterSpacing: 1, marginTop: 2, marginLeft: 31, lineHeight: 1.1 }}>
          Drawing & Editing
        </Text>
      </Group>
      <FontAwesomeIcon icon={opened ? faMinus : faPlus} style={{ color: '#ffffff', fontSize: '0.7em', position: 'relative', top: '-32px', right: '-220px' }} />
      <Collapse in={opened} transitionDuration={200}>
        <Box style={{ padding: '12px 0' }}>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Arrow')}><FontAwesomeIcon icon={faArrowRight} style={{marginRight:8}}/>Arrow</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Marquee')}><FontAwesomeIcon icon={faDrawPolygon} style={{marginRight:8}}/>Marquee</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Line')}><FontAwesomeIcon icon={faSlash} style={{marginRight:8}}/>Line</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Fill')}><FontAwesomeIcon icon={faFillDrip} style={{marginRight:8}}/>Fill</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Text')}><FontAwesomeIcon icon={faFont} style={{marginRight:8}}/>Text</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Label')}><FontAwesomeIcon icon={faTag} style={{marginRight:8}}/>Label</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Dimension')}><FontAwesomeIcon icon={faRulerCombined} style={{marginRight:8}}/>Dimension</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Polyline')}><FontAwesomeIcon icon={faProjectDiagram} style={{marginRight:8}}/>Polyline</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Arc/Circle')}><FontAwesomeIcon icon={faCircle} style={{marginRight:8}}/>Arc/Circle</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Spline')}><FontAwesomeIcon icon={faWaveSquare} style={{marginRight:8}}/>Spline</Text>
        </Box>
      </Collapse>
    </Box>
  );
}
