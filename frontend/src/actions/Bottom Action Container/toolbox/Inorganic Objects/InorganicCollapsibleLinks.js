import React from 'react';
import { Collapse, Group, Text, Box } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSquare, faMinus, faLayerGroup, faTh, faHome, faCircle, faShapes, faBorderAll, faStairs, faBars, faDoorOpen, faWindowMaximize, faSun, faCouch, faBolt, faCogs, faFaucet } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import WallButton from './Wall/WallButton';

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
    <Box style={{ width: 'calc(100% + 15px)', height: 'calc(100% - 20px)', marginTop: 16, marginLeft: -8, marginRight: 'auto', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 8, padding: '8px 0', display: 'block' }}>
      <Box onClick={() => setOpened((o) => !o)} style={{ position: 'relative', cursor: 'pointer', paddingRight: 28, minHeight: 61, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Group position="apart" style={{ flexDirection: 'column', alignItems: 'flex-start', marginLeft: 20, width: 'calc(100% + 20px)' }}>
        <Text fw={500} c="#ffffff" style={{ fontSize: '0.855rem', fontFamily: 'inherit', letterSpacing: 1, marginBottom: 0, marginLeft: 0, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: 10 }}>
          <FontAwesomeIcon icon={faHouse} style={{ color: '#87CEEB', fontSize: '1.2em' }} />
          Inorganic Objects
        </Text>
        <Text fw={400} c="#bdbdbd" style={{ fontSize: '0.76rem', fontFamily: 'inherit', letterSpacing: 1, marginTop: 0, marginLeft: 31, lineHeight: 1.1 }}>
          Building Materials
        </Text>
      </Group>
      <FontAwesomeIcon icon={opened ? faMinus : faPlus} style={{ color: '#ffffff', fontSize: '0.8em', position: 'absolute', top: '50%', right: 14, transform: 'translateY(-50%)' }} />
      </Box>
      <Collapse in={opened} transitionDuration={200}>
        <Box style={{ padding: '12px 0' }}>
          {/* Inorganic subtitles */}
          <WallButton onClick={() => onSubtitleClick && onSubtitleClick('Wall')} />
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Column')}><FontAwesomeIcon icon={faSquare} style={{marginRight:8, color:'#87CEEB'}}/>Column</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Beam')}><FontAwesomeIcon icon={faMinus} style={{marginRight:8, color:'#87CEEB'}}/>Beam</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Slab')}><FontAwesomeIcon icon={faLayerGroup} style={{marginRight:8, color:'#87CEEB'}}/>Slab</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Mesh')}><FontAwesomeIcon icon={faTh} style={{marginRight:8, color:'#87CEEB'}}/>Mesh</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Roof')}><FontAwesomeIcon icon={faHome} style={{marginRight:8, color:'#87CEEB'}}/>Roof</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Shell')}><FontAwesomeIcon icon={faCircle} style={{marginRight:8, color:'#87CEEB'}}/>Shell</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Morph')}><FontAwesomeIcon icon={faShapes} style={{marginRight:8, color:'#87CEEB'}}/>Morph</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Curtain Wall')}><FontAwesomeIcon icon={faBorderAll} style={{marginRight:8, color:'#87CEEB'}}/>Curtain Wall</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Stair')}><FontAwesomeIcon icon={faStairs} style={{marginRight:8, color:'#87CEEB'}}/>Stair</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Railing')}><FontAwesomeIcon icon={faBars} style={{marginRight:8, color:'#87CEEB'}}/>Railing</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Door')}><FontAwesomeIcon icon={faDoorOpen} style={{marginRight:8, color:'#87CEEB'}}/>Door</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Window')}><FontAwesomeIcon icon={faWindowMaximize} style={{marginRight:8, color:'#87CEEB'}}/>Window</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Skylight')}><FontAwesomeIcon icon={faSun} style={{marginRight:8, color:'#87CEEB'}}/>Skylight</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Furniture')}><FontAwesomeIcon icon={faCouch} style={{marginRight:8, color:'#87CEEB'}}/>Furniture</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Electrical')}><FontAwesomeIcon icon={faBolt} style={{marginRight:8, color:'#87CEEB'}}/>Electrical</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Mechanical')}><FontAwesomeIcon icon={faCogs} style={{marginRight:8, color:'#87CEEB'}}/>Mechanical</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Plumbing')}><FontAwesomeIcon icon={faFaucet} style={{marginRight:8, color:'#87CEEB'}}/>Plumbing</Text>
        </Box>
      </Collapse>
    </Box>
  );
}
