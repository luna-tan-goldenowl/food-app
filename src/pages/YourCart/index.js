import React from 'react';

import item1 from 'assets/image/item1.png';
import item2 from 'assets/image/item2.png';
import item3 from 'assets/image/item3.png';
import time from 'assets/image/times.png';
// import Iresha from 'assets/image/avt_Iresha.png';
// import Gauri from 'assets/image/avt_Gauri.png';

import './style.scss';

function YourCart({setShow}) {
  return (
    <div className='content-wrap your-cart'>
      <button className='icon-exit' onClick={() => setShow(false)}>
        <img className='button-icon' src={time} alt='icon exit' />
      </button>
      <div className='title-YourCart'>
        <h2>Your cart</h2>
      </div>
      <table className='cart-list'>
        <tbody>
          <tr className='cart-list'>
            <th className='grid-5'>PRODUCT</th>
            <th className='grid-5-3'>PRICE</th>
            <th className='grid-5-3'>QTY</th>
            <th className='grid-5-3'>UNIT PRICE</th>
          </tr>
          <div className='line-wrap'></div>
        </tbody>
        <tbody>
          <tr className='item-food cart-list'>
            <td className='grid-5'>
              <div className='cart-item'>
                <img className='image-food-item' src={item1} alt='image item 1' />
                <div className='itemInfor'>
                  <div className='item-info'>
                    <h4 className='item-name'>Home made pizza 12</h4>
                    <p className='item-ingredient'>beef patties, Iceberg lettuce, American cheese, pickles,...</p>
                  </div>
                  <div className='user-add'>
                    <p className='add-by'>Add by you</p>
                  </div>
                </div>
              </div>
            </td>
            <td className='grid-5-3'>$20</td>
            <td className='grid-5-3'>
              <div className='quantity'>
                <button className='qty-minus'>-</button>
                <p className='qty-number'>2</p>
                <button className='qty-plus'>+</button>
              </div>
              <a href='' className='remove-item'>
                Remove Item
              </a>
            </td>
            <td className='grid-5-3'>$10</td>
          </tr>
          <div className='line-wrap'></div>
        </tbody>
        <tbody>
          <tr className='grid-5 item-food'>
            <td className='grid-5'>
              <div className='cart-item'>
                <img className='image-food-item' src={item2} alt='image item 1' />
                <div className='itemInfor'>
                  <div className='item-info'>
                    <h4 className='item-name'>Home made pizza 12</h4>
                    <p className='item-ingredient'>beef patties, Iceberg lettuce, American cheese, pickles,...</p>
                  </div>
                  <div className='user-add'>
                    <p className='add-by'>Add by Iresha</p>
                    {/* <img src={Iresha} alt='' /> */}
                  </div>
                </div>
              </div>
            </td>
            <td className='grid-5-3'>$25.98</td>
            <td className='grid-5-3'>
              <div className='quantity'>
                <button className='qty-minus'>-</button>
                <p className='qty-number'>2</p>
                <button className='qty-plus'>+</button>
              </div>
            </td>
            <td className='grid-5-3'>$12.99</td>
          </tr>
          <div className='line-wrap'></div>
        </tbody>
        <tbody>
          <tr className=' item-food'>
            <td className='grid-5'>
              <div className='cart-item'>
                <img className='image-food-item' src={item3} alt='image item 1' />
                <div className='itemInfor'>
                  <div className='item-info'>
                    <h4 className='item-name'>Home made pizza 12</h4>
                    <p className='item-ingredient'>beef patties, Iceberg lettuce, American cheese, pickles,...</p>
                  </div>
                  <div className='user-add'>
                    <p className='add-by'>Add by Gauri</p>
                    {/* <img src={Gauri} alt='' /> */}
                  </div>
                </div>
              </div>
            </td>
            <td className='grid-5-3'>$14.99</td>
            <td className='grid-5-3'>
              <div className='quantity'>
                <button className='qty-minus'>-</button>
                <p className='qty-number'>1</p>
                <button className='qty-plus'>+</button>
              </div>
            </td>
            <td className='grid-5-3'>$14.99</td>
          </tr>
        </tbody>
      </table>
      <div className='total-info'>
        <div className='pay-infor'>
          <div className='texts'>Subtotal</div>
          <div className='texts'>$98</div>
        </div>
        <div className='pay-infor'>
          <div className='texts'>Shipping fee</div>
          <div className='texts'>$20</div>
        </div>
        <div className='pay-infor'>
          <div className='texts texts-total'>TOTAL</div>
          <div className='texts texts-total'>$118</div>
        </div>
        <div className='btn-pay'>
          <button className='button-pay'>Go to Payment</button>
        </div>
      </div>
    </div>
  );
}

export default YourCart;
