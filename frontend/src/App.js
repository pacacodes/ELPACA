import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import MainNavigation from './MainNavigation';
import Layouts from './NestedNavbar';
import CommunicationNavbar from './CommunicationNavbar';
import ViewsSection from './ViewsSection';
import { AppShell } from '@mantine/core';
import BIMApp from './bim/BIMApp';

function App() {
  const [activeService, setActiveService] = useState(0);

  return (
    <AppShell
      layout="default"
      style={{ height: '100vh', overflow: 'hidden' }}
    >
      {/* Main Navigation (Service Card) */}
      <MainNavigation activeService={activeService} setActiveService={setActiveService} />
  {/* Layouts (Nested Navbar) below MainNavigation */}
  <Layouts activeService={activeService} />
  {/* Communication section below Layouts */}
  <CommunicationNavbar />
  {/* Views section below Communication */}
  <ViewsSection />
      <AppShell.Main style={{ height: '100vh', overflow: 'hidden', padding: 0 }}>
        {/* Render main content based on navigation/layout selection */}
        <BIMApp />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
