import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConfirmed } from "../../redux/ac/confirmedAC";
import ConfirmedPerson from "./ConfirmedPerson/ConfirmedPerson";

export default function ConfirmedForm() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfirmed());
  }, [dispatch]);

  const confirmed = useSelector((state) => state.confirmed);

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
          {confirmed.map((confirmed) => (
            <ConfirmedPerson key={confirmed.id} confirmed={confirmed} />
          ))}
          <button type="submit">Collect</button>
        </ul>
      </form>
      <button type="submit">End Collection</button>
    </form>
  );
}
