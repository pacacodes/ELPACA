import React from 'react';
import alpacaLogo from './alpaca.ico';
import { AppShellNavbar, Box, Stack, Text, Divider, Center, ThemeIcon } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb, faMap, faPen, faDraftingCompass, faHardHat, faTasks, faFolderOpen,
  faThLarge, faLaptop, faList, faEye, faDollarSign, faPaperclip, faCalendarAlt, faCommentDots, faArrowsRotate
} from '@fortawesome/free-solid-svg-icons';

const navIcons = [
  { icon: faLightbulb, label: 'Ideas | Project Analysis' },
  { icon: faMap, label: 'Existing Info | Site Analysis' },
  { icon: faPen, label: 'Design | Schematic Design' },
  { icon: faDraftingCompass, label: 'Documents | Design Development & Construction Docs' },
  { icon: faHardHat, label: 'Construction | Bidding & Construction Management' },
  { icon: faTasks, label: 'Management | Daily Management & Analytics' },
  { icon: faFolderOpen, label: 'Home | Projects & Project Analysis' },
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
      style={{ width: '20vw', minWidth: 180, maxWidth: 400, height: '100vh', background: 'var(--mantine-color-body)', borderRight: '1px solid var(--mantine-color-gray-3)', display: 'flex', flexDirection: 'column', padding: 0, position: 'fixed', left: 0, top: 0, zIndex: 100 }}
    >
      {/* Logo and Title */}
      <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 'var(--mantine-spacing-md)', borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
        <ThemeIcon size={48} radius="xl" variant="light" style={{ background: 'transparent', alignSelf: 'flex-start', marginRight: 16, marginLeft: 12, marginTop: 12 }}>
          <img src={alpacaLogo} alt="Alpaca" style={{ width: 40, height: 40, borderRadius: 12 }} />
        </ThemeIcon>
        <Text size="lg" fw={700} style={{ marginBottom: 0, whiteSpace: 'normal', overflowWrap: 'break-word' }}>
          {navIcons[activeIndex].label}
        </Text>
      </Box>
      {/* Vertical Icon Nav */}
      <Box style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingTop: 'var(--mantine-spacing-md)', background: 'var(--mantine-color-body)', marginLeft: 0 }}>
        <Stack gap={48} style={{ width: '100%', alignItems: 'flex-start' }}>
          {navIcons.map((nav, idx) => (
            <ThemeIcon
              key={nav.label}
              size={40}
              radius="md"
              variant={activeIndex === idx ? 'filled' : 'light'}
              color={activeIndex === idx ? 'blue' : 'gray'}
              style={{ cursor: 'pointer', marginBottom: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              onClick={() => handleNavClick(idx)}
            >
              <FontAwesomeIcon icon={nav.icon} size="lg" />
            </ThemeIcon>
          ))}
        </Stack>
      </Box>
    </AppShellNavbar>
  );
}
