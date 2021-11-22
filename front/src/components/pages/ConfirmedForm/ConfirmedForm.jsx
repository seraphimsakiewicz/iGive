import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmedPerson from './ConfirmedPerson/ConfirmedPerson';
import { collectDonors, getConfirmed } from '../../../redux/ac/confirmedAC';
import confirmed from '../../../redux/data';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import { useParams } from 'react-router';

export default function ConfirmedForm() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    // dispatch(getConfirmed(id))
    dispatch(getConfirmed());
  }, [dispatch]);

  const confirmedList = useSelector((state) => state.confirmedList);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);

    const handleCollect = () => {
      dispatch(collectDonors());
    };

    return (
      <div>
        <h3>Confirm Donors:</h3>
        <ul class='list-group'>
          {confirmedList.map(
            (confirmed) =>
              !confirmed.status && (
                <ConfirmedPerson key={confirmed.id} confirmed={confirmed} />
              )
          )}
          {confirmedList.length > 0 ? (
            <button type='button' onClick={handleCollect}>
              Collect
            </button>
          ) : (
            ''
          )}
        </ul>
        <button type='button' onClick={toggleModal}>
          End Collection
        </button>
        {modal && <ConfirmModal toggleModal={toggleModal} />}
      </div>
    );
  };
}
