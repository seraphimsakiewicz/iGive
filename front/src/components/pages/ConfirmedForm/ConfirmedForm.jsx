import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConfirmedPerson from "./ConfirmedPerson/ConfirmedPerson";
import {getConfirmed} from '../../../redux/ac/confirmedAC'


export default function ConfirmedForm() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfirmed());
  }, [dispatch]);

  const confirmedList = useSelector((state) => state.confirmedList);


  const handleEnd = (e) => {
    e.preventDefault();
  };

  const handleCollect = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <h3>Confirm Donors:</h3>
      <form>
        <ul class="list-group">

          {confirmedList.map((confirmed) => (

            <ConfirmedPerson key={confirmed.id} confirmed={confirmed} />
          ))}
          <button type="submit">Collect</button>
        </ul>
      </form>
      <button type="submit">End Collection</button>
    </form>
  );
}
