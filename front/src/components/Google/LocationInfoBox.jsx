const LocationInfoBox = ({ info }) => {
  console.log(info);
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      <ul>
        <li>
          Hospital: <strong>{info?.Hospital?.title}</strong>
          DATE: <strong>{info?.eventDate}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
//this appears when u click on a marker.
