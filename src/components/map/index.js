import React, { useRef, useContext, useEffect, useState } from 'react';
import renderMarkers from '../markers';

import { MarkersContext } from '../../context/markers';
import { MapContext } from '../../context/map';

const Map = () => {
  const { markers } = useContext(MarkersContext);
  const { options } = useContext(MapContext);

  const mapEl = useRef(null);
  const mapObj = useRef(null);
  const [hasMap, setHasMap] = useState(false);

  // Set mapObj.current
  useEffect(() => {
    mapObj.current = new window.google.maps.Map(mapEl.current, options);
    setHasMap(true);
  }, [options]);

  return (
    <div className="map" ref={mapEl}>
      {hasMap && renderMarkers(markers, mapObj.current)}
    </div>
  );
};

export default Map;
