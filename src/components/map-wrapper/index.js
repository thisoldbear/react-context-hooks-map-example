import React, { useContext, useEffect } from 'react';

import { MarkersContext } from '../../context/markers';

import MapLoader from '../map-loader';

const MapWrapper = () => {
  const { dispatch } = useContext(MarkersContext);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        'data.json',
      )
        .then(resp => resp.json())
        .then(({ sites }) => {
          dispatch({ type: 'SET_MARKERS', payload: sites })
        })
    }

    fetchData();
  }, []);

  return (
    <MapLoader />
  );
};

export default MapWrapper;
