import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import validator from 'validator';

const RegisterScreen = () => {

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
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

      return false;
    } else if (!validator.isEmail(email)) {
      console.log("Email not valid");

      return false;
    } else if (password !== password2) {
      console.log("Passwords don't match");

      return false;
    }


    return true;
  }


  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form onSubmit={handleRegister}>

        <div className='auth__alert-error'>
          Hola payo
        </div>

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