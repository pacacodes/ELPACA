import React from 'react';
import { AppShellNavbar, Box, Stack, Text, Divider, Center, ThemeIcon } from '@mantine/core';
import alpacaLogo from './alpaca_silhouette.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb, faMap, faPen, faDraftingCompass, faHardHat, faTasks, faFolderOpen,
  faThLarge, faLaptop, faList, faEye, faDollarSign, faPaperclip, faCalendarAlt, faCommentDots, faArrowsRotate
} from '@fortawesome/free-solid-svg-icons';

const navIcons = [
  { icon: faLightbulb, label: 'Ideas' },
  { icon: faMap, label: 'Maps' },
  { icon: faPen, label: 'Sketch' },
  { icon: faDraftingCompass, label: 'Design' },
  { icon: faHardHat, label: 'BIM' },
  { icon: faTasks, label: 'Tasks' },
  { icon: faFolderOpen, label: 'Projects' },
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
      style={{ width: 260, height: '100%', background: 'var(--mantine-color-body)', borderRight: '1px solid var(--mantine-color-gray-3)', display: 'flex', flexDirection: 'column', padding: 0 }}
    >
      {/* Logo and Title */}
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 'var(--mantine-spacing-md)', borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
        <ThemeIcon size={48} radius="xl" variant="light" style={{ marginBottom: 12 }}>
          <img src={alpacaLogo} alt="Alpaca" style={{ width: 32, height: 32 }} />
        </ThemeIcon>
        <Text size="lg" fw={700} style={{ marginBottom: 4 }}>
          {navIcons[activeIndex].label}
        </Text>
      </Box>
      {/* Vertical Icon Nav */}
      <Box style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 'var(--mantine-spacing-md)', background: 'var(--mantine-color-body)' }}>
        <Stack gap="md" style={{ width: '100%' }}>
          {navIcons.map((nav, idx) => (
            <ThemeIcon
              key={nav.label}
              size={40}
              radius="md"
              variant={activeIndex === idx ? 'filled' : 'light'}
              color={activeIndex === idx ? 'blue' : 'gray'}
              style={{ cursor: 'pointer', margin: '0 auto' }}
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
