import React, { useRef, useContext, useEffect, useState } from "react";
import renderMarkers from "../markers";

import { MarkersContext } from '../../context/markers';
import { MapContext } from '../../context/map';
import { FilterContext } from '../../context/filter';

const Map = () => {
  // Get the markers from the request
  const { state: markersState } = useContext(MarkersContext);

  // Get the current filters
  const { state: filterState } = useContext(FilterContext);

  // Options for the map
  const { options } = useContext(MapContext);

  const [markersToRender, setMarkersToRender] = useState([]);

  const mapEl = useRef(null);
  const mapObj = useRef(null);
  const [hasMap, setHasMap] = useState(false);

  // Set mapObj.current
  useEffect(() => {
    mapObj.current = new window.google.maps.Map(mapEl.current, options);
    setHasMap(true);
  }, [options]);

  // When markers or filter state change
  useEffect(() => {
    let filteredMarkers = markersState.markers

    // Crude filtering
    if (filterState['postcode']) {
      filteredMarkers = filteredMarkers.filter(marker => marker['postcode'].includes(filterState['postcode']))
    }

    if (filterState['ff_funded']) {
      filteredMarkers = filteredMarkers.filter(marker => marker['ff_funded'])
    }

    setMarkersToRender(filteredMarkers);
  }, [markersState, filterState])

  return (
    <div className="map" ref={mapEl}>
      {hasMap && markersToRender && renderMarkers(markersToRender, mapObj.current)}
    </div>
  );
};

export default Map;
