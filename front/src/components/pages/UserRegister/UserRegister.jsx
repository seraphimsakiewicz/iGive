import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { regUser } from "../../../redux/ac/userAC";
import { Link } from 'react-router-dom'

const UserRegister = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    bday: "",
    bloodType: "",
    OMS: "",
    city: "",
    building: "",
    street: "",
    telephone: "",
    email: "",
    pass: "",
  };

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  function submitRegister(e) {
    e.preventDefault();
    dispatch(regUser(values, navigate));

    setValues(initialValues);
  }

  return (
    <form className="reg-container" onSubmit={submitRegister}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          value={values.firstName}
          onChange={handleInputChange}
          name="firstName"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          value={values.lastName}
          onChange={handleInputChange}
          name="lastName"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          value={values.email}
          onChange={handleInputChange}
          name="email"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Telephone:
        </label>
        <input
          type="text"
          className="form-control"
          value={values.telephone}
          onChange={handleInputChange}
          pattern="[0-9]+"
          name="telephone"
        />
      </div>
      <div className="nativeDatePicker">
        <label htmlFor="bday">Birthday:</label>
        <input
          type="date"
          id="bday"
          name="bday"
          required
          value={values.bday}
          onChange={handleInputChange}
        />
        <span className="validity"></span>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Blood Type
        </label>
        <select
          name="bloodType"
          onChange={handleInputChange}
          value={values.bloodType}
        >
          <option value="A-">A- </option>
          <option value="B-">B- </option>
          <option value="AB-">AB- </option>
          <option value="O-">O- </option>
          <option value="A+">A+ </option>
          <option value="B+">B+ </option>
          <option value="AB+">AB+ </option>
          <option value="O+">O+ </option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          OMS:
        </label>
        <input
          type="text"
          className="form-control"
          value={values.OMS}
          onChange={handleInputChange}
          pattern="[0-9]+"
          name="OMS"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          City:
        </label>
        <input
          type="text"
          className="form-control"
          value={values.city}
          onChange={handleInputChange}
          name="city"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Building:
        </label>
        <input
          type="text"
          className="form-control"
          value={values.building}
          onChange={handleInputChange}
          name="building"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Street:
        </label>
        <input
          type="text"
          className="form-control"
          value={values.street}
          onChange={handleInputChange}
          name="street"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={values.pass}
          onChange={handleInputChange}
          name="pass"
        />
      </div>
      <Link className="reg-link__btn" to={'/user'}>
        <button type="submit" className="btn btn-reg">Зарегистрироваться</button>
      </Link>
    </form>
  );
};

export default UserRegister;
