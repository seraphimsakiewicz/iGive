import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { regUser } from '../../../redux/ac/userAC';

const UserRegister = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    bloodTypeId: '-1',
    city: '',
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
    dispatch(regUser(values, navigate));
  }

  return (
    <form className='reg-container' onSubmit={submitRegister}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>Name</label>
        <input
          type='text'
          className='form-control'
          value={values.name}
          onChange={handleInputChange}
          name='name'
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
        <label htmlFor='bloodType' className='form-label'>Blood Type</label>
        <select
          name='bloodTypeId'
          onChange={handleInputChange}
          value={values.bloodTypeId}
          required
        >
          <option value='-1'>Please choose</option>
          <option value='1'>O(I) Rh+</option>
          <option value='2'>O(I) Rh-</option>
          <option value='3'>A(II) Rh+</option>
          <option value='4'>A(II) Rh-</option>
          <option value='5'>B(III) Rh+</option>
          <option value='6'>B(III) Rh-</option>
          <option value='7'>AB(IV) Rh+</option>
          <option value='8'>AB(IV) Rh-</option>
        </select>
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

export default UserRegister;
