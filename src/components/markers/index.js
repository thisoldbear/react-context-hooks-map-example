import React from 'react';

import Marker from '../marker';

const renderMarkers = (markers, map) =>
  markers.map(({ title, latitude, longitude, pk }) =>
    React.cloneElement(<Marker />, {
      pk,
      title,
      key: pk,
      map,
      google: window.google,
      latitude,
      longitude
    })
  );

export default renderMarkers;
