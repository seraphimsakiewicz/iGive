import {
  editConfirmCount,
  editConfirmStatus,
} from "../../../redux/ac/confirmedAC";

import { useDispatch } from "react-redux";

export default function ConfirmedPerson({ confirmed }) {

  
  const dispatch = useDispatch();

  const handleOnCheck = () => {
    dispatch(editConfirmStatus(confirmed.id));
  };

  const handleOnInput = () => {
    dispatch(editConfirmCount());
  };

  return (
    <li class="list-group-item">
      {confirmed.name}
      <input type="checkbox" onChange={handleOnCheck} />
      <input
        type="text"
        placeholder="quantity in liters"
        onChange={handleOnInput}
      />
    </li>
  );
}
