import React from 'react';

import Marker from '../marker';

const renderMarkers = (markers, map) =>
  markers.map(({ title, lat, lng, id }) =>
    <Marker
      id={id}
      title={title}
      key={id}
      map={map}
      google={window.google}
      lat={lat}
      lng={lng}
    />
  );

export default renderMarkers;
