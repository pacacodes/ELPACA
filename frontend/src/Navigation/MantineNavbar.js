import React from 'react';
import alpacaLogo from './alpaca.ico';
import { AppShellNavbar, Box, Stack, Text, Divider, Center, ThemeIcon, Card, Button, Group } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb, faMap, faPen, faDraftingCompass, faHardHat, faTasks, faHome,
  faThLarge, faLaptop, faList, faEye, faDollarSign, faPaperclip, faCalendarAlt, faCommentDots, faArrowsRotate
} from '@fortawesome/free-solid-svg-icons';

const navSubtitles = [
  ['New Project', 'Import Project', 'Sample Project'], // Projects (Home)
  ['Plants', 'Materials', 'Styles'], // Ideas
  [], // Existing Info
  [], // Design
  [], // Construction Documents
  [], // Construction Management
  [], // Daily Management
];

const navIcons = [
  { icon: faHome, label: 'PROJECTS' },
  { icon: faLightbulb, label: 'IDEAS' },
  { icon: faMap, label: 'EXISTING INFO' },
  { icon: faPen, label: 'DESIGN' },
  { icon: faDraftingCompass, label: 'CONSTRUCTION DOCUMENTS' },
  { icon: faHardHat, label: 'CONSTRUCTION MANAGEMENT' },
  { icon: faTasks, label: 'DAILY MANAGEMENT' },
];

export default function MantineNavbar({ setActiveNav, setAlpacaPopupOpen, setActiveLayout }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Handle click for icons
  const handleNavClick = (idx) => {
    setActiveIndex(idx);
    const label = navIcons[idx].label;
    if (label === 'Projects') {
      setAlpacaPopupOpen(true);
    } else {
      setActiveNav(label);
    }
  };

  return (
    <>
      {/* Mantine Card with actions grid at top right */}
      <Card shadow="sm" padding="lg" radius="md" withBorder style={{ position: 'fixed', top: 24, right: 24, width: 320, zIndex: 200 }}>
  {/* Removed title and description above icons */}
        <Box style={{ display: 'grid', gridTemplateRows: 'repeat(5, auto)', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginTop: 8, justifyItems: 'center', alignItems: 'center' }}>
          {/* Top row: 1 icon (Ideas) */}
          <ThemeIcon size={36} radius="md" variant="light" color="#23272A" style={{ gridRow: 1, gridColumn: '1 / span 2', justifySelf: 'center' }}>
            <FontAwesomeIcon icon={faLightbulb} size="lg" color="#23272A" />
          </ThemeIcon>
          {/* Second row: 2 icons (Tasks, Map) */}
          <ThemeIcon size={36} radius="md" variant="light" color="#23272A" style={{ gridRow: 2, gridColumn: 1 }}>
            <FontAwesomeIcon icon={faTasks} size="lg" color="#23272A" />
          </ThemeIcon>
          <ThemeIcon size={36} radius="md" variant="light" color="#23272A" style={{ gridRow: 2, gridColumn: 2 }}>
            <FontAwesomeIcon icon={faMap} size="lg" color="#23272A" />
          </ThemeIcon>
          {/* Third row: 1 icon (Alpaca) */}
          <ThemeIcon size={40} radius="md" variant="light" color="#23272A" style={{ gridRow: 3, gridColumn: '1 / span 2', justifySelf: 'center' }}>
            <img src={alpacaLogo} alt="Alpaca" style={{ width: 36, height: 36, borderRadius: 10 }} />
          </ThemeIcon>
          {/* Fourth row: 2 icons (HardHat, Pen) */}
          <ThemeIcon size={36} radius="md" variant="light" color="#23272A" style={{ gridRow: 4, gridColumn: 1 }}>
            <FontAwesomeIcon icon={faHardHat} size="lg" color="#23272A" />
          </ThemeIcon>
          <ThemeIcon size={36} radius="md" variant="light" color="#23272A" style={{ gridRow: 4, gridColumn: 2 }}>
            <FontAwesomeIcon icon={faPen} size="lg" color="#23272A" />
          </ThemeIcon>
          {/* Fifth row: 1 icon (Compass) */}
          <ThemeIcon size={36} radius="md" variant="light" color="#23272A" style={{ gridRow: 5, gridColumn: '1 / span 2', justifySelf: 'center' }}>
            <FontAwesomeIcon icon={faDraftingCompass} size="lg" color="#23272A" />
          </ThemeIcon>
        </Box>
      </Card>
      <AppShellNavbar
        style={{ width: '72px', minWidth: 56, maxWidth: 120, height: '100vh', background: 'rgba(0,0,0,0.05)', borderRight: '1px solid var(--mantine-color-gray-3)', display: 'flex', flexDirection: 'row', padding: 0, position: 'fixed', left: 0, top: 0, zIndex: 100 }}
      >
      {/* Left: Logo/Title and Icon Nav */}
  <Box style={{ width: '64px', minWidth: 56, maxWidth: 120, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 0, paddingRight: 0, background: 'transparent' }}>
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 'var(--mantine-spacing-md)', borderBottom: '1px solid var(--mantine-color-gray-3)', paddingLeft: 0 }}>
          <ThemeIcon size={48} radius="xl" variant="light" style={{ background: 'transparent', alignSelf: 'flex-start', marginRight: 12, marginLeft: 0, marginTop: 12 }}>
            <img src={alpacaLogo} alt="Alpaca" style={{ width: 40, height: 40, borderRadius: 12 }} />
          </ThemeIcon>
          <Text size="lg" fw={700} style={{ marginBottom: 0, whiteSpace: 'pre', overflow: 'visible', marginLeft: 24 }}>
            {navIcons[activeIndex].label}
          </Text>
        </Box>
        <Box style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 'var(--mantine-spacing-md)', background: 'var(--mantine-color-body)', marginLeft: 12 }}>
          <Stack gap={48} style={{ width: '100%', alignItems: 'flex-start', marginLeft: 0 }}>
            {navIcons.map((nav, idx) => (
              <ThemeIcon
                key={nav.label}
                size={40}
                radius="md"
                variant="light"
                color="#23272A"
                style={{
                  cursor: 'pointer',
                  marginBottom: 24,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'background 0.2s',
                }}
                onClick={() => handleNavClick(idx)}
              >
                <FontAwesomeIcon icon={nav.icon} size="lg" color="#23272A" />
              </ThemeIcon>
            ))}
          </Stack>
        </Box>
      </Box>
      {/* Right: Dynamic Subtitle Section */}
      <Box
        style={{
          width: '220px',
          minWidth: 140,
          maxWidth: 340,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 'var(--mantine-spacing-xl)',
          position: 'relative',
          paddingLeft: 24,
          background: 'rgba(0,0,0,0.05)'
        }}
      >
        <Box
          style={{
            position: 'absolute',
            top: `calc(${activeIndex} * 64px + 120px)`, // 64px per button + header height + extra offset for logo/title
            left: 0,
            width: '100%',
            transition: 'top 0.2s',
          }}
        >
          <Stack gap={24} style={{ width: '100%' }}>
            {navSubtitles[activeIndex].map((subtitle) => (
                    <Text key={subtitle} size="md" fw={500} c="#23272A" style={{ paddingLeft: 8 }}>
                      {subtitle}
                    </Text>
            ))}
          </Stack>
        </Box>
      </Box>
    </AppShellNavbar>
    </>
  );
}

