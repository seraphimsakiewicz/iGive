import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewEvent } from '../../redux/ac/eventAC';

function CreateEvent() {
  const [inputBloodType, setInputBloodType] = useState('');
  const [inputAmountBlood, setInputAmountBlood] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputTime, setInputTime] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewEvent(inputBloodType, inputAmountBlood, inputDate, inputTime));
    setInputBloodType('')
    setInputAmountBlood('')
    setInputDate('')
    setInputTime('')
    navigate('/hospital')

  }
  return (
    <form onSubmit={submitHandler} className="d-flex align-items-center justify-content-center flex-column py-5">
      <h2 className="mb-4">Сбор крови</h2>
      <div className="mb-3">
        <input type="text" value={inputBloodType} onChange={(e) => setInputBloodType(e.target.value)} placeholder="Тип крови" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <input type="number" value={inputAmountBlood} onChange={(e) => setInputAmountBlood(e.target.value)} placeholder="Кол-во крови в литрах" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <input type="date" value={inputDate} onChange={(e) => setInputDate(e.target.value)} placeholder="Дату сбора" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <input type="time" value={inputTime} onChange={(e) => setInputTime(e.target.value)} placeholder="Время сбора" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <button type="submit" className="btn btn-primary mt-1">Добавить</button>
    </form>
  )
}

export default CreateEvent
