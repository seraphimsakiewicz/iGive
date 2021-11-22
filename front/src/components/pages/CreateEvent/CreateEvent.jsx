import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewEventFromServer } from '../../../redux/ac/eventAC';

function CreateEvent() {
  const [inputBloodType, setInputBloodType] = useState('');
  const [inputAmountBlood, setInputAmountBlood] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputPriority, setInputPriority] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addNewEventFromServer(inputBloodType, inputAmountBlood, inputDate, inputPriority)
    );
    setInputBloodType('');
    setInputAmountBlood('');
    setInputDate('');
    navigate('/hospital');
  };
  return (
    <form
      onSubmit={submitHandler}
      className='d-flex align-items-center justify-content-center flex-column py-5'
    >
      <h2 className='mb-4'>Сбор крови</h2>
      <div className='mb-3'>
        {/* <input
          type='text'
          value={inputBloodType}
          onChange={(e) => setInputBloodType(e.target.value)}
          placeholder='Тип крови'
          className='form-control my-2'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
        /> */}
        <label htmlFor="exampleInputEmail1" className="form-label">
          Blood Type
        </label>
        <select
          name="bloodTypeId"
          onChange={(e) => setInputBloodType(e.target.value)}
          value={inputBloodType}
        >
          <option value="-1" selected>
            Please choose
          </option>
          <option value="1">A-</option>
          <option value="2">B- </option>
          <option value="3">AB- </option>
          <option value="4">O- </option>
          <option value="5">A+ </option>
          <option value="6">B+ </option>
          <option value="7">AB+ </option>
          <option value="8">O+ </option>
        </select>
        <input
          type='number'
          value={inputAmountBlood}
          onChange={(e) => setInputAmountBlood(e.target.value)}
          placeholder='Кол-во крови в литрах'
          className='form-control my-2'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
        />
        <input
          type='date'
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
          placeholder='Дату сбора'
          className='form-control my-2'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Blood Type
        </label>
        <select
          name="bloodTypeId"
          onChange={(e) => setInputPriority(e.target.value)}
          value={inputPriority}
        >
          <option value={`${1}`}>Низкий</option>
          <option value={`${2}`}>Средний</option>
          <option value={`${3}`}>Высокий</option>
        </select>
        {/* <input
          type='time'
          value={inputPriority}
          onChange={(e) => setinputPriority(e.target.value)}
          placeholder='Время сбора'
          className='form-control my-2'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
        /> */}
      </div>
      <button type='submit' className='btn btn-primary mt-1'>
        Добавить
      </button>
    </form>
  );
}

export default CreateEvent;