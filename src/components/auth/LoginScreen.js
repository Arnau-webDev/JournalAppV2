import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

const LoginScreen = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui);

  const [formValues, setFormValues] = useState({
    email: "testUserNoRegister@gmail.com",
    password: "testUser12345"
  });

  const { email, password } = formValues;

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password.toString()));
  };

  const handleGoogleSignIn = () => {
    dispatch(startGoogleLogin());
  }

  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <h3 className='auth__title'>Login</h3>

      <form onSubmit={handleLogin}>
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

        <button className='btn btn-primary btn-block' type="submit" disabled={loading}>Login</button>

        <div className='auth__social-media'>
          <p>Login with social media</p>
          <div className="google-btn" onClick={handleGoogleSignIn}>
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

    </div>
  )
}

export default LoginScreen;