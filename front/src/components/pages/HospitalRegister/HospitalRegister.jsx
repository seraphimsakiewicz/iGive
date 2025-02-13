import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { regHospital } from '../../../redux/ac/hospitalAC';

const HospitalRegister = () => {
  const initialValues = {
    email: '',
    password: '',
    city: '',
    title: '',
    headOfDep: '',
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  function submitRegister(e) {
    e.preventDefault();
    dispatch(regHospital(values, navigate));
  }

  return (
    <form className='reg-container' onSubmit={submitRegister}>
      <div className='mb-3'>
        <label htmlFor='title' className='form-label'>Hospital Name</label>
        <input
          type='text'
          className='form-control'
          value={values.title}
          onChange={handleInputChange}
          name='title'
          required
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>Email Address</label>
        <input
          type='email'
          className='form-control'
          value={values.email}
          onChange={handleInputChange}
          name='email'
          required
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='city' className='form-label'>City</label>
        <input
          type='text'
          className='form-control'
          value={values.city}
          onChange={handleInputChange}
          name='city'
          required
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='headOfDep' className='form-label'>Administrator Name</label>
        <input
          type='text'
          className='form-control'
          value={values.headOfDep}
          onChange={handleInputChange}
          name='headOfDep'
          required
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='password' className='form-label'>Password</label>
        <input
          type='password'
          className='form-control'
          value={values.password}
          onChange={handleInputChange}
          name='password'
          required
        />
      </div>

      <button type='submit' className='btn btn-reg'>
        Register
      </button>
    </form>
  );
};

export default HospitalRegister;
