import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import validator from 'validator';
import { startRegisterWithEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { uiReducer } from '../../reducers/uiReducer';

const RegisterScreen = () => {

  const dispatch = useDispatch(uiReducer);
  const { msgError } = useSelector(state => state.ui);

  const [formValues, setFormValues] = useState({
    name: "journal2User",
    email: "journal2@gmail.com",
    password: "123456",
    password2: "123456"
  });

  const { name, email, password, password2 } = formValues;

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPassword(name, email, password));
    }
  };

  const isFormValid = () => {

    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      Swal.fire("Error", "Name is required", "error");

      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email not valid"));
      Swal.fire("Error", "Email not valid", "error");

      return false;
    }
    else if (password.trim().length === 0) {
      dispatch(setError("Password is required"));
      Swal.fire("Error", "Password is required", "error");

      return false;
    }
    else if (password.trim().length < 6) {
      dispatch(setError("Password should be at least 6 characters"));
      Swal.fire("Error", "Password should be at least 6 characters", "error");

      return false;
    }
    else if (password !== password2) {
      dispatch(setError("Passwords don't match"));
      Swal.fire("Error", "Passwords don't match", "error");

      return false;
    }

    dispatch(removeError());
    return true;
  }

  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <h3 className='auth__title'>Register</h3>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          name="name"
          placeholder='Name'
          className='auth__input'
          autoComplete='off'
          onChange={handleInputChange}
          value={name}

        />

        <input
          type="text"
          name="email"
          placeholder='Email'
          className='auth__input'
          autoComplete='off'
          onChange={handleInputChange}
          value={email}

        />

        <input
          type="password"
          name="password"
          placeholder='Password'
          className='auth__input'
          onChange={handleInputChange}
          value={password}

        />

        <input
          type="password"
          name="password2"
          placeholder='Confirm'
          className='auth__input'
          onChange={handleInputChange}
          value={password2}

        />

        <button className='btn btn-primary btn-block mb-5' type="submit">Register</button>

        <Link className='link' to="/auth/login">Already Registered?</Link>

      </form>

    </div>
  )
}

export default RegisterScreen