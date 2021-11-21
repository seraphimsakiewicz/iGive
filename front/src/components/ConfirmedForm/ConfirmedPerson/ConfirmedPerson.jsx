
import { useDispatch } from "react-redux";
import { useState } from "react";
import { editConfirmCount } from "../../../redux/ac/confirmedAC";

export default function ConfirmedPerson({ confirmed }) {
  const [liters, setLiters] = useState("0");

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setLiters(e.target.value);
    const mL = parseInt(liters);
    dispatch(editConfirmCount(confirmed.id, mL));
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
        value={liters}
        onChange={handleOnChange}
      />
    </li>
  );
}
