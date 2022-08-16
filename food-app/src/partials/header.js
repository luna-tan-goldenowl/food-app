import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style/base.scss';
import search from '../assets/search.png';
import bag from '../assets/bag.png';

function Profile() {
  return (
    <div className="container grid">
      <div className="header">
        <div>
          <p className="logo-name">TBayEAT</p>
        </div>
        <div className="navigate-page">
          <Link to="/" className="link-to-page">
            Home
          </Link>
          <Link to="/" className="link-to-page">
            About
          </Link>
          <Link to="/" className="link-to-page">
            Menu
          </Link>
          <Link to="/" className="link-to-page">
            Contact
          </Link>
          <Link to="/profile" className="link-to-page">
            Profile
          </Link>
          <Link to="/" className="link-to-page">
            Logout
          </Link>
        </div>
        <div className="search-and-bag">
          <img className="search" src={search} alt="search icon" />
          <img className="bag-cart" src={bag} alt="bag icon" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
