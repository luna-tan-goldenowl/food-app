import React from 'react';

import back from 'assets/image/back.png';
import time from 'assets/image/times.png';
import step3 from 'assets/image/step3.png';
import success from 'assets/image/Success.png';

import './style.scss';

function payment3() {
  return (
    <div className='popup'>
      <div className='payment1 '>
        <div className='icon'>
          <img className='button-icon' src={back} alt='icon back' />
          <img className='button-icon' src={time} alt='icon exit' />
        </div>
        <div className='title-head'>
          <h2>Make Payment</h2>
          <img className='step' src={step3} alt='icon exit' />
        </div>
        <div className='grid payment-success'>
          <img className='success' src={success} alt='icon success' />
          <p className='title-success'>Success</p>
        </div>
        <button className='btn-payment '>Complete</button>
      </div>
    </div>
  );
}

export default payment3;
