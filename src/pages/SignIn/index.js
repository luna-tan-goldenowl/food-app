import React from 'react';
import { auth, logInWithEmailAndPassword, signInWithGoogle, signInWithFacebook } from 'core/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import facebookLogo from 'assets/image/Facebook_logo.png';
import googleLogo from 'assets/image/Google_logo.png';

import './style.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [user, loading, error] = useAuthState(auth);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/landing');
    console.log(user);
  }, [user, loading]);

  const onSubmit = e => {
    e.preventDefault();
    logInWithEmailAndPassword(email, password);
  };

  return (
    <div className='SignIn grid'>
      <div className='header'>
        <p className='logo-name'>TBayEAT</p>
      </div>
      <div className='content'>
        <p className='title'>Sign in</p>
        <p className='small-title'>Sign in and start your food adventure!</p>
        <form action=''>
          <input
            className='input-login'
            type='text'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email'
          />
          <br />
          <input
            className='input-login'
            type='password'
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
          />
          <div className='verify-user'>
            <div className='remember-user'>
              <input className='input-checkbox' type='checkbox' name='remember ' id='remember' />
              <p className='remember-title'>Remember me</p>
            </div>
            <p className='remember-title'>Forgot password?</p>
          </div>
          <button className='button' type='submit' onClick={onSubmit}>
            Log in
          </button>
        </form>
        <p className='title-or'>Or</p>
        <div>
          <button className='button-social' onClick={signInWithGoogle}>
            <img className='social-logo' src={googleLogo} alt='Logo facebook' />
          </button>
          <button className='button-social' onClick={signInWithFacebook}>
            <img className='social-logo' src={facebookLogo} alt='Logo facebook' />
          </button>
        </div>
        <div className='link-to'>
          Don&apos;t have an account?{' '}
          <Link to='/signup' className='link-to-link'>
            Sign up
          </Link>{' '}
          now.
        </div>
      </div>
    </div>
  );
}

export default Login;
