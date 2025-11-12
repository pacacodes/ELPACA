import React from 'react';
import { Card, ThemeIcon, Box } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb, faHardHat, faDraftingCompass, faPen, faTasks, faMap
} from '@fortawesome/free-solid-svg-icons';
import alpacaLogo from './alpaca.ico';

const serviceIcons = [
  { icon: faLightbulb, label: 'IDEAS' },
  { icon: faTasks, label: 'DAILY MANAGEMENT' },
  { icon: faMap, label: 'EXISTING INFO' },
  { icon: 'alpaca', label: 'ALPACA' },
  { icon: faHardHat, label: 'CONSTRUCTION MANAGEMENT' },
  { icon: faPen, label: 'DESIGN' },
  { icon: faDraftingCompass, label: 'CONSTRUCTION DOCUMENTS' },
];

export default function MainNavigation({ activeService, setActiveService }) {
  // Grid layout: top row 1, second row 2, third row 1 (alpaca), fourth row 2, fifth row 1
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ position: 'fixed', top: 34, left: -20, width: 280, zIndex: 200, fontFamily: 'inherit', fontWeight: 400 }}>
      <Box style={{ display: 'grid', gridTemplateRows: 'repeat(5, auto)', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginTop: -2, justifyItems: 'center', alignItems: 'center', fontFamily: 'inherit', fontWeight: 400 }}>
        {/* Top row: 1 icon (Ideas) */}
        <ThemeIcon size={36} radius="md" variant="light" color={activeService === 0 ? '#A8C686' : '#23272A'} style={{ gridRow: 1, gridColumn: '1 / span 2', justifySelf: 'center', cursor: 'pointer' }} onClick={() => setActiveService(0)}>
          <FontAwesomeIcon icon={faLightbulb} size="lg" color={activeService === 0 ? '#A8C686' : '#23272A'} />
        </ThemeIcon>
        {/* Second row: 2 icons (Tasks, Map) */}
        <ThemeIcon size={36} radius="md" variant="light" color={activeService === 1 ? '#A8C686' : '#23272A'} style={{ gridRow: 2, gridColumn: 1, cursor: 'pointer' }} onClick={() => setActiveService(1)}>
          <FontAwesomeIcon icon={faTasks} size="lg" color={activeService === 1 ? '#A8C686' : '#23272A'} />
        </ThemeIcon>
        <ThemeIcon size={36} radius="md" variant="light" color={activeService === 2 ? '#A8C686' : '#23272A'} style={{ gridRow: 2, gridColumn: 2, cursor: 'pointer' }} onClick={() => setActiveService(2)}>
          <FontAwesomeIcon icon={faMap} size="lg" color={activeService === 2 ? '#A8C686' : '#23272A'} />
        </ThemeIcon>
        {/* Third row: 1 icon (Alpaca) */}
        <ThemeIcon size={44} radius="md" variant="light" color="#23272A" style={{ gridRow: 3, gridColumn: '1 / span 2', justifySelf: 'center', cursor: 'pointer' }} onClick={() => setActiveService(3)}>
          <img src={alpacaLogo} alt="Alpaca" style={{ width: 40, height: 40, borderRadius: 11, filter: activeService === 3 ? 'brightness(0) sepia(1) hue-rotate(60deg) saturate(6) brightness(1.2)' : 'none' }} />
        </ThemeIcon>
        {/* Fourth row: 2 icons (HardHat, Pen) */}
        <ThemeIcon size={36} radius="md" variant="light" color={activeService === 4 ? '#A8C686' : '#23272A'} style={{ gridRow: 4, gridColumn: 1, cursor: 'pointer' }} onClick={() => setActiveService(4)}>
          <FontAwesomeIcon icon={faHardHat} size="lg" color={activeService === 4 ? '#A8C686' : '#23272A'} />
        </ThemeIcon>
        <ThemeIcon size={36} radius="md" variant="light" color={activeService === 5 ? '#A8C686' : '#23272A'} style={{ gridRow: 4, gridColumn: 2, cursor: 'pointer' }} onClick={() => setActiveService(5)}>
          <FontAwesomeIcon icon={faPen} size="lg" color={activeService === 5 ? '#A8C686' : '#23272A'} />
        </ThemeIcon>
        {/* Fifth row: 1 icon (Compass) */}
        <ThemeIcon size={36} radius="md" variant="light" color={activeService === 6 ? '#A8C686' : '#23272A'} style={{ gridRow: 5, gridColumn: '1 / span 2', justifySelf: 'center', cursor: 'pointer' }} onClick={() => setActiveService(6)}>
          <FontAwesomeIcon icon={faDraftingCompass} size="lg" color={activeService === 6 ? '#A8C686' : '#23272A'} />
        </ThemeIcon>
      </Box>
    </Card>
  );
}
