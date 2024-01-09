import React from "react";
import GoogleMapReact from "google-map-react";

const MapAPI = ({ text }) => <div>{text}</div>;

function GoogleMapsApi() {
  const defaultProps = {
    center: {
      lat: 51.9020837031582,
      lng: -0.19525324292467375,
    },
    zoom: 10,
  };

  return (
    <div className="h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAXgRvteDQbnKAKdRe_Rx95lSIvQ7ppaUU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapAPI lat={51.9020837031582} lng={-0.19525324292467375} />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMapsApi;
