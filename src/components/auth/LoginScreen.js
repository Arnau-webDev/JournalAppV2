import React from 'react'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
  return (
    <>
      <h3 className='auth__title'>Login</h3>

      <form>
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

        <button className='btn btn-primary btn-block' type="submit">Login</button>

        <div className='auth__social-media'>
          <p>Login with social media</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link className='link mt-5' to="/auth/register">Create New Account</Link>
      </form>

    </>
  )
}

export default LoginScreen;