import React from 'react';
import { Collapse, Group, Text, Box } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGripHorizontal, faSquare, faMinus, faLayerGroup, faTh, faHome, faCircle, faShapes, faBorderAll, faStairs, faBars, faDoorOpen, faWindowMaximize, faSun, faCouch, faWrench, faBlender } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ToolsCollapsibleLinks from './ToolsCollapsibleLinks';
import ViewpointToolsCollapsibleLinks from './ViewpointToolsCollapsibleLinks';
import DiagramToolsCollapsibleLinks from './DiagramToolsCollapsibleLinks';

export default function InorganicCollapsibleLinks(props) {
  const [opened, setOpened] = React.useState(false);
  // Accept onSubtitleClick prop
  const onSubtitleClick = props && props.onSubtitleClick ? props.onSubtitleClick : undefined;
  React.useEffect(() => {
    const handler = e => {
      if (e.detail === 'inorganic') setOpened(true);
    };
    window.addEventListener('openToolboxGroup', handler);
    return () => window.removeEventListener('openToolboxGroup', handler);
  }, []);
  return (
    <Box style={{ width: 'calc(100% + 15px)', height: 'calc(100% - 20px)', marginTop: 13, marginLeft: -8, marginRight: 'auto', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 8, padding: '8px 0', display: 'block' }}>
      <Group position="apart" style={{ cursor: 'pointer', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 20, width: 'calc(100% + 20px)' }} onClick={() => setOpened((o) => !o)}>
        <Text fw={500} c="#ffffff" style={{ fontSize: '0.90rem', fontFamily: 'inherit', letterSpacing: 1, marginBottom: 0, marginLeft: 0, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: 10 }}>
          <FontAwesomeIcon icon={faHouse} style={{ color: '#87CEEB', fontSize: '1.2em' }} />
          Inorganic Objects
        </Text>
        <Text fw={400} c="#bdbdbd" style={{ fontSize: '0.80rem', fontFamily: 'inherit', letterSpacing: 1, marginTop: 2, marginLeft: 31, lineHeight: 1.1 }}>
          Building Materials
        </Text>
      </Group>
      <FontAwesomeIcon icon={opened ? faMinus : faPlus} style={{ color: '#ffffff', fontSize: '0.7em', position: 'relative', top: '-32px', right: '-220px' }} />
      <Collapse in={opened} transitionDuration={200}>
        <Box style={{ padding: '12px 0' }}>
          {/* Inorganic subtitles */}
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Wall')}><FontAwesomeIcon icon={faGripHorizontal} style={{marginRight:8, color:'#87CEEB'}}/>Wall</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Column')}><FontAwesomeIcon icon={faSquare} style={{marginRight:8, color:'#87CEEB'}}/>Column</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Beam')}><FontAwesomeIcon icon={faMinus} style={{marginRight:8, color:'#87CEEB'}}/>Beam</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Slab')}><FontAwesomeIcon icon={faLayerGroup} style={{marginRight:8, color:'#87CEEB'}}/>Slab</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Mesh')}><FontAwesomeIcon icon={faTh} style={{marginRight:8, color:'#87CEEB'}}/>Mesh</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Roof')}><FontAwesomeIcon icon={faHome} style={{marginRight:8, color:'#87CEEB'}}/>Roof</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Shell')}><FontAwesomeIcon icon={faCircle} style={{marginRight:8, color:'#87CEEB'}}/>Shell</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Morph')}><FontAwesomeIcon icon={faShapes} style={{marginRight:8, color:'#87CEEB'}}/>Morph</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Curtain Wall')}><FontAwesomeIcon icon={faBorderAll} style={{marginRight:8, color:'#87CEEB'}}/>Curtain Wall</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Stair')}><FontAwesomeIcon icon={faStairs} style={{marginRight:8, color:'#87CEEB'}}/>Stair</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Railing')}><FontAwesomeIcon icon={faBars} style={{marginRight:8, color:'#87CEEB'}}/>Railing</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Door')}><FontAwesomeIcon icon={faDoorOpen} style={{marginRight:8, color:'#87CEEB'}}/>Door</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Window')}><FontAwesomeIcon icon={faWindowMaximize} style={{marginRight:8, color:'#87CEEB'}}/>Window</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Skylight')}><FontAwesomeIcon icon={faSun} style={{marginRight:8, color:'#87CEEB'}}/>Skylight</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Furniture')}><FontAwesomeIcon icon={faCouch} style={{marginRight:8, color:'#87CEEB'}}/>Furniture</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Fixtures')}><FontAwesomeIcon icon={faWrench} style={{marginRight:8, color:'#87CEEB'}}/>Fixtures</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Appliances')}><FontAwesomeIcon icon={faBlender} style={{marginRight:8, color:'#87CEEB'}}/>Appliances</Text>
        </Box>
      </Collapse>
    </Box>
  );
}
