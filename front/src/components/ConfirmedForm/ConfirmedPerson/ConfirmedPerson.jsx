import {
  editConfirmCount,
} from "../../../redux/ac/confirmedAC";

import { useDispatch } from "react-redux";
import { useState } from "react";

export default function ConfirmedPerson({ confirmed }) {
  const [liters, setLiters] = useState("");

  const dispatch = useDispatch();



  const handleOnInput = () => {
    dispatch(editConfirmCount());
  };

  return (
    <li class="list-group-item">
      {confirmed.name}
      <input
        type="number"
        min="0"
        step="10"
        max="1000"
        placeholder="quantity in mL"
        onChange={handleOnInput}
      />
    </li>
  );
}
