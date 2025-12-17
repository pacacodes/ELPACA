import React, { createContext, useState } from 'react';
import drawWall from './inorganic-collapsible-link-buttons/DrawWall';

const ViewerContext = createContext({
  drawWall: () => {},
  setWallDimensions: () => {},
  wallDimensions: null,
});

export function ViewerProvider({ children }) {
  const [wallDimensions, setWallDimensions] = useState(null);

  const contextValue = {
    drawWall,
    setWallDimensions,
    wallDimensions,
  };

  return (
    <ViewerContext.Provider value={contextValue}>
      {children}
    </ViewerContext.Provider>
  );
}

export { ViewerContext };
export default ViewerContext;