import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const marker = (
    <LocationMarker
      lat={eventData?.coordinates?.lat}
      lng={eventData?.coordinates?.lng}
      onClick={() => setLocationInfo({ title: eventData?.hospitalName})}
    />
  );
console.log(eventData?.coordinates);
  return (
    <div className="map container">
      <GoogleMapReact
        // bootstrapURLKeys={{ key: "AIzaSyAPpD6MEtXe6aj42FUQANeGsQ6VBriq9jA" }}
        center={eventData?.coordinates}
        zoom={zoom}
      >
        {marker}
      </GoogleMapReact>

      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

export default Map;
