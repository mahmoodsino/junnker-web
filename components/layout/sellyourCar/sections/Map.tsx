import React, { useEffect, useState } from "react";
//@ts-ignore
import { GoogleMap } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";

interface Props {
  lat: {
    lat: number;
    lng: number;
  };
  setLat: any;
}

const Map = ({ lat, setLat }: Props) => {
  const [map, setMap] = useState(null);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: !lat?.lat ? 33.510414 : lat.lat,
    lng: !lat?.lng ? 36.278336 : lat.lng,
  };

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        console.log(coords);
        const loc = {
          lat: latitude,
          lng: longitude,
        };

        setLat(loc);
      });
    }
  }, []);

  return (
    <div className="mt-10 flex justify-between">
      <div className="lg:w-[80%] sm:w-[100%] border">
        <div>
          <GoogleMap
            options={{
              disableDefaultUI: true,
              disableDoubleClickZoom: true,
              gestureHandling: "none",
              keyboardShortcuts: false,
            }}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11}
            onUnmount={onUnmount}
          >
            <MarkerF position={{ lat: lat?.lat!, lng: lat?.lng! }} />
          </GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default Map;
