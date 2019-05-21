import React, { useContext, useEffect } from 'react';

import { MarkersContext } from '../../context/markers';

import MapLoader from '../map-loader';

const MapWrapper = () => {
  const { setMarkers } = useContext(MarkersContext);

  useEffect(() => {
    setMarkers([
      {
        title: 'David',
        id: '1',
        location: {
          lat: '51.46000',
          lng: '-2.56000'
        }
      }
    ])

    // Emulate state change
    setTimeout(() => {
      setMarkers([
        {
          title: 'Paul',
          id: '2',
          location: {
            lat: '51.49000',
            lng: '-2.58000'
          },
        },
        {
          title: 'Sam',
          id: '3',
          location: {
            lat: '51.47000',
            lng: '-2.57000'
          }
        }
      ])
    }, 2000);
  }, []);

  return (
    <MapLoader />
  );

};

export default MapWrapper;
