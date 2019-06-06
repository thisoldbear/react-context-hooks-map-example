import React from 'react';
import './app.css';

import MapContextProvider from './context/map';
import MarkersContextProvider from './context/markers';
import FilterContextProvider from './context/filter';

import MapWrapper from './components/map-wrapper';
import Filters from './components/filters';

const App = () => (
  <MapContextProvider>
    <MarkersContextProvider>
      <FilterContextProvider>
        <div className="app">
          <Filters />
          <MapWrapper />
        </div>
      </ FilterContextProvider>
    </ MarkersContextProvider>
  </MapContextProvider>
);


export default App;
