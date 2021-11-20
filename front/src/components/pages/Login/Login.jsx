import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
// import { signIn } from "../../redux/ac/userAC";
import { Link, useParams } from 'react-router-dom'
import styles from './styleLogin.module.css';

const Login = () => {
  const initialValues = {
    email: "",
    pass: "",
  };

  const [values, setValues] = useState(initialValues);
  const {role} = useParams();

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  async function submitLogin(e) {
    e.preventDefault();
    // dispatch(signIn(values, navigate));

    setValues(initialValues);
  }

  return (
    <>
      <form className={styles.loginContainer} onSubmit={submitLogin}>
        <h1 className={styles.loginTitle}>Sign In</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={values.email}
            onChange={handleInputChange}
            name="userName"
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

        <div className={styles.footerSignIn}>
          <Link to={`/${role}/signup`}>
            <p className={styles.footerSignInText}>
              Create account
            </p>
          </Link>

          <Link to={`/${role}`}>
            <button type="submit" className="btn btn-reg">
              Next
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
