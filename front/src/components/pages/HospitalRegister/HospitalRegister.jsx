import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { regHospital } from "../../../redux/ac/hospitalAC";
import { Link } from 'react-router-dom'

const HospitalRegister = () => {
  const initialValues = {
    hospitalName: "",
    firstName: "",
    lastName: "",
    INN: "",
    site: "",
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
    dispatch(regHospital(values, navigate));
  }

  return (
    <form className="reg-container" onSubmit={submitRegister}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Hospital Name
        </label>
        <input
          type="text"
          className="form-control"
          value={values.hospitalName}
          onChange={handleInputChange}
          name="hospitalName"
        />
      </div>
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
          Site:
        </label>
        <input
          type="text"
          className="form-control"
          value={values.site}
          onChange={handleInputChange}
          name="site"
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

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          INN:
        </label>
        <input
          type="text"
          className="form-control"
          value={values.INN}
          onChange={handleInputChange}
          pattern="[0-9]+"
          name="INN"
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
      <Link className="reg-link__btn" to={'/hospital'}>
        <button type="submit" className="btn btn-reg">Зарегистрироваться</button>
      </Link>

    </form>
  );
};

export default HospitalRegister;
