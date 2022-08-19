import React from 'react';

import back from 'assets/image/back.png';
import time from 'assets/image/times.png';
import step2 from 'assets/image/step2.png';
import CreditCard from 'assets/image/CreditCard.png';

import './style.scss';

function payment2() {
  return (
    <div className='popup'>
      <div className='payment1 '>
        <div className='icon'>
          <img className='button-icon' src={back} alt='icon back' />
          <img className='button-icon' src={time} alt='icon exit' />
        </div>
        <div className='title-head'>
          <h2>Make Payment</h2>
          <img className='step' src={step2} alt='icon exit' />
        </div>
        <div className='grid payment-infor'>
          <div className='grid__column-6-12 credit-card'>
            <img className='card' src={CreditCard} alt='Credit card' />
          </div>
          <div className='grid__column-6-12 card-info'>
            <input className='input' type='text' placeholder='Card Number' />
            <br />
            <div className='input-line'>
              <input className='input input-half' type='text' placeholder='Expiry' />
              <input className='input input-half' type='text' placeholder='CVV' />
            </div>
            <br />
            <input className='input' type='text' placeholder='Holder Number' />
            <div className='save-card'>
              <input className='input-checkbox' type='checkbox' />
              <p className='saveCard-title'>Save this credit card</p>
            </div>
          </div>
        </div>
        <button className='btn-payment '>Confirm</button>
      </div>
    </div>
  );
}

export default payment2;
