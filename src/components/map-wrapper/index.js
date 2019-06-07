import React, { useContext, useEffect } from "react";

import { MarkersContext } from "../../context/markers";

import MapLoader from "../map-loader";

const MapWrapper = () => {
  const { setMarkers } = useContext(MarkersContext);

  useEffect(() => {
    console.log("Render [1]");

    setMarkers([
      {
        title: "David",
        id: "1",
        lat: "51.46000",
        lng: "-2.56000"
      }
    ]);

    // Emulate state change
    setTimeout(() => {
      console.log("Render [1, 2, 3]");

      console.log("Expect [1] to not re-render");

      setMarkers([
        {
          title: "David",
          id: "1",
          lat: "51.46000",
          lng: "-2.56000"
        },
        {
          title: "Paul",
          id: "2",
          lat: "51.49000",
          lng: "-2.58000"
        },
        {
          title: "Sam",
          id: "3",
          lat: "51.47000",
          lng: "-2.57000"
        }
      ]);
    }, 2000);

    // Emulate state change
    setTimeout(() => {
      console.log("Render [2, 4]");

      setMarkers([
        {
          title: "Paul",
          id: "2",
          lat: "51.49000",
          lng: "-2.58000"
        },
        {
          title: "Colin",
          id: "4",
          lat: "51.48000",
          lng: "-2.56000"
        }
      ]);
    }, 4000);
  }, [setMarkers]);

  return <MapLoader />;
};

export default MapWrapper;
