import React from 'react';
import alpacaLogo from './alpaca.ico';
import { AppShellNavbar, Box, Stack, Text, Divider, Center, ThemeIcon } from '@mantine/core';
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
    <AppShellNavbar
  style={{ width: '24vw', minWidth: 320, maxWidth: 520, height: '100vh', background: 'var(--mantine-color-body)', borderRight: '1px solid var(--mantine-color-gray-3)', display: 'flex', flexDirection: 'row', padding: 0, position: 'fixed', left: 0, top: 0, zIndex: 100 }}
    >
      {/* Left: Logo/Title and Icon Nav */}
      <Box style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 'var(--mantine-spacing-md)', borderBottom: '1px solid var(--mantine-color-gray-3)', paddingLeft: 0 }}>
          <ThemeIcon size={48} radius="xl" variant="light" style={{ background: 'transparent', alignSelf: 'flex-start', marginRight: 12, marginLeft: 0, marginTop: 12 }}>
            <img src={alpacaLogo} alt="Alpaca" style={{ width: 40, height: 40, borderRadius: 12 }} />
          </ThemeIcon>
          <Text size="lg" fw={700} style={{ marginBottom: 0, whiteSpace: 'pre', overflow: 'visible', marginLeft: 0 }}>
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
          width: '50%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 'var(--mantine-spacing-xl)',
          position: 'relative',
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
  );
}

