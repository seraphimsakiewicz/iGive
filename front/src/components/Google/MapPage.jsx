import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoordinates } from "../../redux/ac/geocodeAC";
import Map from "./Map";

function MapPage() {
  const [hospitalName, setHospitalName] = useState("");

  const [location, setLocation] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const hospital = {
      id: 1,
      name: "Городская клиническая больница но 1 им. Н.И. Пирогова",
      address: "Ленинский проспект., 8, Москва, 119049",
    };
    dispatch(getCoordinates(hospital.name));
    setHospitalName(hospital.name);

    // if (navigator && navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((pos) => {
       
    //     setLocation({
    //       lat: pos.coords.latitude,
    //       lng: pos.coords.longitude,
    //     });
    //   });
    // } else {
    //   console.log("location not allowed");
    // }
  }, []);

  const coordinates = useSelector((state) => state?.coordinates);
  const eventData = { hospitalName, coordinates };

  return (
    <div>
      <Map eventData={eventData} 
      // center={location} 
      zoom={11} />
    </div>
  );
}

export default MapPage;
//this is the div that holds that loader and map, here we can pass the map configs.
