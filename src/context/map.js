import React, { createContext } from 'react';

export const MapContext = createContext();

export default ({ children }) =>
  <MapContext.Provider
    value={{
      options: {
        center: { lat: 51.45523, lng: -2.59665 },
        zoom: 12,
      }
    }}
  >
    {children}
  </MapContext.Provider>
