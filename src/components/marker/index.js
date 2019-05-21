import { useRef, useEffect } from 'react';

const Marker = ({ map, google, position: { lat, lng }, title, id }) => {
  const marker = useRef(null);

  useEffect(() => {
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
      marker.current.setMap(null);
    }
  });

  return null;
}

export default Marker;
