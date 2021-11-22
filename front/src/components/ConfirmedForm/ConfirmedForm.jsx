import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConfirmed, submitConfirmed } from "../../redux/ac/confirmedAC";
import ConfirmedPerson from "./ConfirmedPerson/ConfirmedPerson";

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
    dispatch(submitConfirmed());
  };
  console.log(confirmedList);
  return (
    <div>
      <h3>Confirm Donors:</h3>
      <form onSubmit={handleCollect}>
        <ul className="list-group">
          {confirmedList?.map((confirmed) =>
            !confirmed.status ? (
              <ConfirmedPerson key={confirmed.id} confirmed={confirmed} />
            ) : (
              ""
            )
          )}
          <button type="submit">Collect</button>
        </ul>
      </form>
      <form>
        <button type="submit">End Collection</button>
      </form>
    </div>
  );
}
