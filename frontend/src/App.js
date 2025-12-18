import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import MainNavigation from './Navigation/MainNavigation';
import NestedNavbar from './Navigation/NestedNavbar';
import CommunicationNavbar from './communication/CommunicationNavbar';
import ViewsSection from './Navigation/views/ViewsSection';
import ToolboxServiceButton from './actions/Bottom Action Container/toolbox/ToolboxServiceButton';
import { AppShell } from '@mantine/core';
import BIMApp from './bim/BIMApp';
import { SectionProvider, SectionContext } from './chatbot/SectionContext';
import AIChatBotSection from './chatbot/AIChatBotSection';
import Actions from './actions/Bottom Action Container/Actions';

function App() {
  const [activeService, setActiveService] = useState(0);

  return (
    <SectionProvider>
      <AppShell
        layout="default"
        style={{ height: '100vh', overflow: 'hidden' }}
      >
        {/* Main Navigation (Service Card) */}
        <MainNavigation activeService={activeService} setActiveService={setActiveService} />
        {/* Layouts (Nested Navbar) below MainNavigation */}
        <NestedNavbar activeService={activeService} />
        {/* Communication section below Layouts */}
        <CommunicationNavbar />
        {/* Views section below Communication */}
        <ViewsSection />
        {/* AI Chat Bot section below Views */}
        <AIChatBotSection />
        {/* <ToolboxServiceButton /> */}
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
