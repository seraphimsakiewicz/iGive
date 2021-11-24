import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editHospitalProfileFromServer } from '../../../redux/ac/hospitalAC';

function EditHospital() {
  const { hospital } = useSelector(state => state);
  const [inputHeadOfDep, setInputHeadOfDep] = useState(hospital?.headOfDep);
  const [inputDescription, setInputDescription] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editHospitalProfileFromServer(inputHeadOfDep, inputDescription));
  }
  return (
    <form onSubmit={submitHandler} className="d-flex align-items-center justify-content-center flex-column py-5">
      <h2 className="mb-4">Редактировать страницу</h2>
      <div className="mb-3">
        <input type="text" value={inputHeadOfDep} onChange={(e) => setInputHeadOfDep(e.target.value)} placeholder="Enter our head of department" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <input type="text" value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} placeholder="Enter our description" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <button type="submit" className="btn btn-success mt-1">Отправить</button>
    </form>
  )
}

export default EditHospital
