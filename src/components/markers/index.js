import React from 'react';

import Marker from '../marker';

const renderMarkers = (markers, map) =>
  markers.map(({ title, lat, lng, id }) =>
    React.cloneElement(
      <Marker />, {
        id,
        title,
        key: id,
        map,
        google: window.google,
        lat,
        lng,
      })
  );

export default renderMarkers;
