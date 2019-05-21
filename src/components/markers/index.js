import React from 'react';

import Marker from '../marker';

const renderMarkers = (markers, map) =>
  markers.map(({ title, location: { lat, lng }, id }) =>
    React.cloneElement(
      <Marker />, {
        id,
        title,
        key: id,
        map,
        google: window.google,
        position: {
          lat,
          lng,
        },
      })
  );

export default renderMarkers;
