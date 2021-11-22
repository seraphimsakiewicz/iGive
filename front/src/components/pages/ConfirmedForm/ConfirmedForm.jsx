import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConfirmed, submitConfirmed } from "../../../redux/ac/confirmedAC";
import ConfirmedPerson from "./ConfirmedPerson/ConfirmedPerson";
import ConfirmModal from "./ConfirmModal/ConfirmModal";

export default function ConfirmedForm() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfirmed());
  }, [dispatch]);

  const confirmedList = useSelector((state) => state.confirmedList);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleEnd = (e) => {
    e.preventDefault();
  };
  const handleCollect = (e) => {
    e.preventDefault();
    dispatch(submitConfirmed());
  };
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

      {!modal && <button onClick={toggleModal}>End Event</button>}
      {modal && <ConfirmModal toggleModal={toggleModal} />}
      <form onSubmit={handleEnd}></form>
    </div>
  );
}
