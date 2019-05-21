import React from 'react';
import './app.css';

import MapContextProvider from './context/map';
import MarkersContextProvider from './context/markers';

import MapWrapper from './components/map-wrapper';

const App = () => (
  <MapContextProvider>
    <MarkersContextProvider>
      <div className="app">
        <MapWrapper />
      </div>
    </ MarkersContextProvider>
  </MapContextProvider>
);


export default App;
