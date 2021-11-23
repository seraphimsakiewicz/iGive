import React from "react";
import { useDispatch } from "react-redux";
import { collectDonors } from "../../../../redux/ac/confirmedAC";
import ConfirmedPerson from "../ConfirmedPerson/ConfirmedPerson";

export default function ConfirmedList({ confirmedList }) {
  const dispatch = useDispatch();

  const handleCollect = () => {
    dispatch(collectDonors());
  };

  return (
    <div>
      <h3>Confirm Donors:</h3>
      <ul class="list-group">
        {confirmedList?.map(
          (confirmed) =>
            !confirmed?.status && (
              <ConfirmedPerson key={confirmed?.id} confirmed={confirmed} />
            )
        )}
        {confirmedList?.length > 0 ? (
          <button type="button" onClick={handleCollect}>
            Collect
          </button>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}
