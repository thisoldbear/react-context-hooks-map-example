import React from 'react';

import Marker from '../marker';

const renderMarkers = (markers, map) =>
  markers.map(({ site_name: title, latitude: lat, longitude: lng, pk: id }) => (
    <Marker
      id={id}
      title={title}
      key={id}
      map={map}
      google={window.google}
      lat={lat}
      lng={lng}
    />
  ));

export default renderMarkers;
