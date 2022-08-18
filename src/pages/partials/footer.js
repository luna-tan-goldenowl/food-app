import React from 'react';
import { Link } from 'react-router-dom';
import 'assets/scss/base.scss';
import facebook from 'assets/image/facebook.png';
import instagram from 'assets/image/instagram.png';

function Footer() {
  return (
    // <div className="container-footer">
    <div className='wrap-footer'>
      <div className='footer'>
        <div>
          <p className='logo-name'>TBayEAT</p>
        </div>
        <div className='navigate-page'>
          <Link to='/' className='link-to-page'>
            Home
          </Link>
          <Link to='/' className='link-to-page'>
            About
          </Link>
          <Link to='/' className='link-to-page'>
            Menu
          </Link>
          <Link to='/' className='link-to-page'>
            Contact
          </Link>
          <Link to='/' className='link-to-page'>
            Profile
          </Link>
          <Link to='/' className='link-to-page'>
            Logout
          </Link>
        </div>
        <div className='social'>
          <img className='facebook' src={facebook} alt='facebook icon' />
          <img className='instagram' src={instagram} alt='instagram icon' />
        </div>
      </div>
      <div className='line-footer'>
        <div className='foot-line'></div>
        <p className='copyright'>Copyright @2022 TBayEAT</p>
      </div>
    </div>
    // </div>
  );
}

export default Footer;
