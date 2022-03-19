import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form>
        <input
          type="text"
          name="name"
          placeholder='Name'
          className='auth__input'
          autoComplete='off'
        />

        <input
          type="text"
          name="email"
          placeholder='Email'
          className='auth__input'
          autoComplete='off'
        />

        <input
          type="password"
          name="password"
          placeholder='Password'
          className='auth__input'
        />

        <input
          type="password"
          name="password2"
          placeholder='Confirm'
          className='auth__input'
        />

        <button className='btn btn-primary btn-block mb-5' type="submit">Register</button>

        <Link className='link' to="/auth/login">Already Registered?</Link>

      </form>

    </>
  )
}

export default RegisterScreen