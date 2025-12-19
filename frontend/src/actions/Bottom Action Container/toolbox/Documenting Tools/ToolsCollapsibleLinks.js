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
      {/* Header button with right-aligned toggle icon */}
      <Box onClick={() => setOpened((o) => !o)} style={{ position: 'relative', cursor: 'pointer', paddingRight: 28, minHeight: 64, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Group position="apart" style={{ flexDirection: 'column', alignItems: 'flex-start', marginLeft: 20, width: 'calc(100% + 20px)' }}>
        <Text fw={500} c="#ffffff" style={{ fontSize: '0.90rem', fontFamily: 'inherit', letterSpacing: 1, marginBottom: 0, marginLeft: 0, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: 10 }}>
          <FontAwesomeIcon icon={faPenFancy} style={{ color: '#FF7F50', fontSize: '1.2em' }} />
          Documenting Tools
        </Text>
        <Text fw={400} c="#bdbdbd" style={{ fontSize: '0.80rem', fontFamily: 'inherit', letterSpacing: 1, marginTop: 0, marginLeft: 31, lineHeight: 1.1 }}>
          Drawing & Editing
        </Text>
      </Group>
      <FontAwesomeIcon icon={opened ? faMinus : faPlus} style={{ color: '#ffffff', fontSize: '0.8em', position: 'absolute', top: '50%', right: 14, transform: 'translateY(-50%)' }} />
      </Box>
      <Collapse in={opened} transitionDuration={200}>
        <Box style={{ padding: '12px 0' }}>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Arrow')}><FontAwesomeIcon icon={faArrowRight} style={{marginRight:8, color:'#FF7F50'}}/>Arrow</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Marquee')}><FontAwesomeIcon icon={faDrawPolygon} style={{marginRight:8, color:'#FF7F50'}}/>Marquee</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Line')}><FontAwesomeIcon icon={faSlash} style={{marginRight:8, color:'#FF7F50'}}/>Line</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Fill')}><FontAwesomeIcon icon={faFillDrip} style={{marginRight:8, color:'#FF7F50'}}/>Fill</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Text')}><FontAwesomeIcon icon={faFont} style={{marginRight:8, color:'#FF7F50'}}/>Text</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Label')}><FontAwesomeIcon icon={faTag} style={{marginRight:8, color:'#FF7F50'}}/>Label</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Dimension')}><FontAwesomeIcon icon={faRulerCombined} style={{marginRight:8, color:'#FF7F50'}}/>Dimension</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Polyline')}><FontAwesomeIcon icon={faProjectDiagram} style={{marginRight:8, color:'#FF7F50'}}/>Polyline</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Arc/Circle')}><FontAwesomeIcon icon={faCircle} style={{marginRight:8, color:'#FF7F50'}}/>Arc/Circle</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Spline')}><FontAwesomeIcon icon={faWaveSquare} style={{marginRight:8, color:'#FF7F50'}}/>Spline</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('AI Document')}><FontAwesomeIcon icon={faPenFancy} style={{ color: '#FF7F50', marginRight:8 }}/>AI Document</Text>
        </Box>
      </Collapse>
    </Box>
  );
}
