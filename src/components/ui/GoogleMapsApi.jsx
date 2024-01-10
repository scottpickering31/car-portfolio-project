import React from "react";
import GoogleMapReact from "google-map-react";

const MapAPI = ({ text }) => <div>{text}</div>;

function GoogleMapsApi() {
  const defaultProps = {
    center: {
      lat: 51.50385857303638,
      lng: -0.12563124312495927,
    },
    zoom: 7,
  };

  return (
    <div className="h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAXgRvteDQbnKAKdRe_Rx95lSIvQ7ppaUU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapAPI lat={51.50385857303638} lng={-0.12563124312495927} />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMapsApi;
