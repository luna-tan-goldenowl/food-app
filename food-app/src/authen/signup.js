import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../firebase';
import '../style/login.scss';
import facebookLogo from '../assets/Facebook_logo.png';
import googleLogo from '../assets/Google_logo.png';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const signup = () => {
    if (!name) alert('Please enter name');
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/profile');
  }, [user, loading]);

  return (
    <div className="container grid">
      <div className="header">
        <p className="logo-name">TBayEAT</p>
      </div>
      <div className="content">
        <p className="title">Sign in</p>
        <p className="small-title">Sign up and hop on the food journey!</p>
        <form action="">
          <input
            className="input"
            type="text"
            name="user"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="User name"
          />
          <br />
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
          <br />
          <input
            className="input"
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm Password"
          />
          <br />
          <input
            className="input"
            type="text"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
          <br />
          <input className="input" type="text" name="phone-number" id="phone-number" placeholder="Phone Number" />
          <br />
          <button className="button button-signup" type="submit" onClick={signup}>
            Sign up
          </button>
        </form>
        <p className="title-or">Or</p>
        <div>
          <button className="button-social" onClick={signInWithGoogle}>
            <img className="social-logo" src={googleLogo} alt="Logo facebook" />
          </button>
          <button className="button-social">
            <img className="social-logo" src={facebookLogo} alt="Logo facebook" />
          </button>
        </div>
        <div className="link-to">
          Already have an account?{' '}
          <Link to="/" className="link-to-link">
            Login
          </Link>{' '}
          now.
        </div>
      </div>
    </div>
  );
}

export default Signup;
