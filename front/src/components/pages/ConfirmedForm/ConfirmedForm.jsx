import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConfirmed } from "../../../redux/ac/confirmedAC";
import ConfirmModal from "./ConfirmModal/ConfirmModal";
import { useParams } from "react-router";
import ConfirmedList from "./ConfirmedList/ConfirmedList";

export default function ConfirmedForm() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getConfirmed(id));
  }, []);

  const confirmedList = useSelector((state) => state?.confirmedList);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      {confirmedList && <ConfirmedList confirmedList={confirmedList} />}
      <button type="button" onClick={toggleModal}>
        End Collection
      </button>
      {modal && <ConfirmModal toggleModal={toggleModal} />}
    </div>
  );
}
