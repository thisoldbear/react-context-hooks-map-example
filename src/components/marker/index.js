import { useRef, useEffect } from 'react';

const Marker = ({ map, google, lat, lng, title, id }) => {
  const marker = useRef(null);

  useEffect(() => {

    console.warn(`Rendered ${id}`);

    const position = new google.maps.LatLng(lat, lng);

    // Set the marker value
    marker.current = new google.maps.Marker({
      map,
      position,
      title
    });

    marker.current.addListener('click', () => {
      alert(`Marker ${id} ${title}`);
    });

    // Cleanup
    return () => {
      console.error(`Removed ${id}`);

      marker.current.setMap(null);
    }
  }, [lat, lng, title, id]);

  return null;
}

export default Marker;
