import React from 'react';
import './profile.scss';
import Header from 'pages/partials/header';
import Footer from 'pages/partials/footer';
import coverImage from 'assets/image/coverImage.png';
import avatar from 'assets/image/avatar.png';

function Profile() {
  return (
    <div className='container grid'>
      {/* <div className="header">
        <p className="logo-name">TBayEAT</p>
      </div> */}
      <Header />
      <div className='image-profile'>
        <img className='cover-image' src={coverImage} alt='cover image' />
        <img className='avatar-image' src={avatar} alt='avatar' />
        <div className='tab'>
          <button className='tab-profile active'>Profile</button>
          <button className='tab-history'>Odder History</button>
        </div>
      </div>
      <div className='content'>
        <p className='title-personal'>Personal Information</p>
        <form action=''>
          <input className='input' type='text' name='user' id='user' placeholder='User name' />
          <br />
          <input className='input' type='text' name='email' id='email' placeholder='Email' />
          <br />
          <input className='input' type='number' name='phone-number' id='phone-number' placeholder='Phone Number' />
          <br />
          <input className='input' type='' name='birthday' id='birthday' placeholder='Date Of Birth' />
          <br />
          <button className='button button-signup' type='submit'>
            Edit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
