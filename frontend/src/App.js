import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import MainNavigation from './MainNavigation';
import Layouts from './NestedNavbar';
import CommunicationNavbar from './CommunicationNavbar';
import ViewsSection from './ViewsSection';
import ToolboxServiceButton from './ToolboxServiceButton';
import { AppShell } from '@mantine/core';
import BIMApp from './bim/BIMApp';
import { SectionProvider } from './SectionContext';
import AIChatBotSection from './AIChatBotSection';
import TopBar from './TopBar';
import Actions from './Actions';

function App() {
  const [activeService, setActiveService] = useState(0);

  return (
    <SectionProvider>
      <AppShell
        layout="default"
        style={{ height: '100vh', overflow: 'hidden' }}
      >
        <TopBar />
        {/* Main Navigation (Service Card) */}
        <MainNavigation activeService={activeService} setActiveService={setActiveService} />
        {/* Layouts (Nested Navbar) below MainNavigation */}
        <Layouts activeService={activeService} />
        {/* Communication section below Layouts */}
        <CommunicationNavbar />
        {/* Views section below Communication */}
        <ViewsSection />
        {/* AI Chat Bot section below Views */}
        <AIChatBotSection />
        <ToolboxServiceButton />
        <AppShell.Main style={{ height: '100vh', overflow: 'hidden', padding: 0, position: 'absolute', top: 0, left: 0, width: '100%' }}>
          {/* Render main content based on navigation/layout selection */}
          <BIMApp />
        </AppShell.Main>
        {/* Actions Component */}
        <Actions />
      </AppShell>
    </SectionProvider>
  );
}

export default App;
