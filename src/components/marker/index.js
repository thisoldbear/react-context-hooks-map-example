import { useRef, useEffect } from 'react';

const Marker = ({ map, google, latitude, longitude, title, pk }) => {
  const marker = useRef(null);

  useEffect(() => {

    console.warn(`Rendered ${pk}`);

    const position = new google.maps.LatLng(latitude, longitude);

    // Set the marker value
    marker.current = new google.maps.Marker({
      map,
      position,
      title
    });

    marker.current.addListener('click', () => {
      alert(`Marker ${pk}`);
    });

    // Cleanup
    return () => {
      console.error(`Removed ${pk}`);

      marker.current.setMap(null);
    }
  }, [latitude, longitude, title, pk]);

  return null;
}

export default Marker;
