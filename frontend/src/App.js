import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import MantineNavbar from './MantineNavbar';
import { AppShell } from '@mantine/core';
import BIMApp from './bim/BIMApp';

function App() {
  const [activeNav, setActiveNav] = useState('Ideas');
  const [alpacaPopupOpen, setAlpacaPopupOpen] = useState(false);
  const [activeLayout, setActiveLayout] = useState('Worksheets');

  return (
    <AppShell>
      <AppShell.Navbar>
        <MantineNavbar
          setActiveNav={setActiveNav}
          setAlpacaPopupOpen={setAlpacaPopupOpen}
          setActiveLayout={setActiveLayout}
        />
      </AppShell.Navbar>
      <AppShell.Main>
        {/* Render main content based on navigation/layout selection */}
        <BIMApp />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
