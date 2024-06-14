const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Information</h2>
      <ul>
        <li>
          Hospital: <strong>{info?.Hospital?.title}</strong>
          Date: <strong>{info?.eventDate}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
//this appears when u click on a marker.
