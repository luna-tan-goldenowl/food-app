import React from 'react'

import back from 'assets/image/back.png'
import time from 'assets/image/times.png'
import step1 from 'assets/image/step1.png'
import credit from 'assets/image/credit.png'
import paypal from 'assets/image/Paypal.png'
import bank from 'assets/image/bank.png'

import './style.scss';

function payment1() {
  return (
    <div className='popup'>
      <div className='payment1 '>
        <div className='icon'>
          <img className='button-icon' src={back} alt='icon back' />
          <img className='button-icon' src={time} alt='icon exit' />
        </div>
        <div className='title-head'>
          <h2>Make Payment</h2>
          <img className='step' src={step1} alt='icon exit' />
        </div>
        <div className='grid payment-infor'>
          <div className='grid__column-6-12'>
            <input className='input' type='text' placeholder='First Name' />
            <br />
            <input className='input' type='text' placeholder='Email Address' />
            <div className='select-method'>
              <h3>Select Method Of Payment</h3>
              <div className='method-payment method-checked'>
                <div className='method'>
                  <img className='credit' src={credit} alt='credit' />
                  <p>Credit Card Or Debit</p>
                </div>
                <input className='input-checkbox' type='checkbox' name='method' checked />
              </div>
              <div className='method-payment'>
                <div className='method'>
                  <img className='paypal' src={paypal} alt='paypal' />
                  <p>Paypal</p>
                </div>
                <input className='input-checkbox' type='checkbox' name='method' />
              </div>
              <div className='method-payment'>
                <div className='method'>
                  <img className='bank' src={bank} alt='bank' />
                  <p>Bank Transfer</p>
                </div>
                <input className='input-checkbox' type='checkbox' name='method' />
              </div>
            </div>
          </div>
          <div className='grid__column-6-12'>
            <input className='input' type='text' placeholder='Last Name' />
            <br />
            <input className='input input-address' type='text' placeholder='Address for Delivery' />
            <br />
            <input className='input' type='text' placeholder='Mobile Phone' />
          </div>
        </div>
        <button className='btn-payment '>Go to Payment</button>
      </div>
    </div>
  );
}

export default payment1
