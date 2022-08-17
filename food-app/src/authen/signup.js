import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
  logInWithEmailAndPassword,
  signInWithFacebook
} from '../firebase';
import './login.scss';
import facebookLogo from '../assets/Facebook_logo.png';
import googleLogo from '../assets/Google_logo.png';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const signup = async e => {
    e.preventDefault();
    if (!name) alert('Please enter name');
    try {
      await registerWithEmailAndPassword(name, email, password, phonenumber);
      logInWithEmailAndPassword(email, password);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/landing');
  }, [user, loading]);

  return (
    <div className="container grid">
      <div className="header">
        <p className="logo-name">TBayEAT</p>
      </div>
      <div className="content">
        <p className="title">Sign up</p>
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
          <input
            className="input"
            type="text"
            name="phone-number"
            id="phone-number"
            placeholder="Phone Number"
            onChange={e => setPhonenumber(e.target.value)}
          />
          <br />
          <button className="button button-signup" type="submit" onClick={signup}>
            Sign up
          </button>
        </form>
        <p className="title-or">Or</p>
        <div>
          <button className="button-social" onClick={signInWithGoogle}>
            <img className="social-logo" src={googleLogo} alt="Logo google" />
          </button>
          <button className="button-social" onClick={signInWithFacebook}>
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
