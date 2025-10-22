import React, { createContext, useState } from 'react';

export const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const [sectionsState, setSectionsState] = useState({
    nestedNavbar: false,
    communicationNavbar: false,
    viewsSection: false,
  });

  const toggleSection = (section) => {
    setSectionsState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <SectionContext.Provider value={{ sectionsState, toggleSection }}>
      {children}
    </SectionContext.Provider>
  );
};