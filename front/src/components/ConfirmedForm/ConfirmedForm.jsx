import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConfirmed } from "../../redux/ac/confirmedAC";
import ConfirmedPerson from "./ConfirmedPerson/ConfirmedPerson";

export default function ConfirmedForm() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfirmed());
  }, []);

  const confirmed = useSelector((state) => state.confirmed);
  console.log(confirmed);

  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <h3>Confirm Donors:</h3>
      <ul class="list-group">
        {confirmed.map((confirmed) => (
          <ConfirmedPerson key={confirmed.id} confirmed={confirmed} />
        ))}
      </ul>
      <button type="submit">End Collection</button>
    </form>
  );
}
