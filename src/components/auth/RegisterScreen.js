import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { uiReducer } from '../../reducers/uiReducer';

const RegisterScreen = () => {

  const dispatch = useDispatch(uiReducer);
  const { msgError } = useSelector(state => state.ui);

  const [formValues, setFormValues] = useState({
    name: "journal2User",
    email: "journal2@gmail.com",
    password: "12345",
    password2: "12345"
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
    console.log(formValues);

    if (isFormValid()) {
      console.log("correcto");
    }
  };

  const isFormValid = () => {

    if (name.trim().length === 0) {
      console.log("Name is required");
      dispatch(setError("Name is required"));

      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email not valid"));

      return false;
    }
    else if (password.trim().length === 0) {
      dispatch(setError("Password is required"));
      return false;
    }
    else if (password !== password2) {
      dispatch(setError("Passwords don't match"));

      return false;
    }

    dispatch(removeError());
    return true;
  }


  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form onSubmit={handleRegister}>

        {
          msgError !== null && (
            <div className='auth__alert-error'>
              {msgError}
            </div>
          )
        }

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

    </>
  )
}

export default RegisterScreen