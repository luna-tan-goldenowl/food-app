import React from 'react';
import 'assets/scss/base.scss';
import './profile.scss';
import coverImage from 'assets/image/coverImage.png';
import avatar from 'assets/image/avatar.png';
import burger from 'assets/image/burger.jpeg';
import Header from 'pages/partials/header';
import Footer from 'pages/partials/footer';

function History() {
  return (
    <div className='container'>
      <Header />
      <div className='image-profile'>
        <img className='cover-image' src={coverImage} alt='cover image' />
        <img className='avatar-image' src={avatar} alt='avatar' />
        <div className='tab'>
          <button className='tab-profile'>Profile</button>
          <button className='tab-history active'>Odder History</button>
        </div>
      </div>
      <div className='content-order'>
        <p className='title-personal'>Order History</p>
        <table className='table grid__column-7-12'>
          <tr className='order'>
            <div className='order-infor'>
              <h4>Order #997</h4>
              <p className='order-date'>23 Feb 2021, 08:28 PM</p>
            </div>
            <div>
              <td className='grid__column-7-24'>
                <div className='order-item'>
                  <div>
                    <img className='menu-image' src={burger} alt='' />
                  </div>
                  <div className='item-infor'>
                    <h4 className='food-name'>Big Mac</h4>
                    <p className='ingredient'>beef patties, Iceberg lettuce, American cheese, pickles,...</p>
                    <div className='unit-price'>
                      <p className='price'>$6.99</p>
                      <p>Qty: 2</p>
                    </div>
                  </div>
                </div>
              </td>
              <td className='grid__column-7-24'>
                <div className='order-item'>
                  <div>
                    <img className='menu-image' src={burger} alt='' />
                  </div>
                  <div className='item-infor'>
                    <h4 className='food-name'>Big Mac</h4>
                    <p className='ingredient'>beef patties, Iceberg lettuce, American cheese, pickles,...</p>
                    <div className='unit-price'>
                      <p className='price'>$6.99</p>
                      <p>Qty: 2</p>
                    </div>
                  </div>
                </div>
              </td>
            </div>
            <div className='order-footer'>
              <div className='line'></div>
              <div className='total-prices'>
                <p>Total: $25.34</p>
                <button className='btn btn-paid'>Paid</button>
              </div>
            </div>
          </tr>
          <tr className='order'>
            <div className='order-infor'>
              <h4>Order #997</h4>
              <p className='order-date'>23 Feb 2021, 08:28 PM</p>
            </div>
            <div>
              <td className='grid__column-7-24'>
                <div className='order-item'>
                  <div>
                    <img className='menu-image' src={burger} alt='' />
                  </div>
                  <div className='item-infor'>
                    <h4 className='food-name'>Big Mac</h4>
                    <p className='ingredient'>beef patties, Iceberg lettuce, American cheese, pickles,...</p>
                    <div className='unit-price'>
                      <p className='price'>$6.99</p>
                      <p>Qty: 2</p>
                    </div>
                  </div>
                </div>
              </td>
              <td className='grid__column-7-24'>
                <div className='order-item'>
                  <div>
                    <img className='menu-image' src={burger} alt='' />
                  </div>
                  <div className='item-infor'>
                    <h4 className='food-name'>Big Mac</h4>
                    <p className='ingredient'>beef patties, Iceberg lettuce, American cheese, pickles,...</p>
                    <div className='unit-price'>
                      <p className='price'>$6.99</p>
                      <p>Qty: 2</p>
                    </div>
                  </div>
                </div>
              </td>
            </div>
            <div className='order-footer'>
              <div className='line'></div>
              <div className='total-prices'>
                <p>Total: $25.34</p>
                <button className='btn btn-paid'>In Process</button>
              </div>
            </div>
          </tr>
          <tr className='order'>
            <div className='order-infor'>
              <h4>Order #997</h4>
              <p className='order-date'>23 Feb 2021, 08:28 PM</p>
            </div>
            <div>
              <td className='grid__column-7-24'>
                <div className='order-item'>
                  <div>
                    <img className='menu-image' src={burger} alt='' />
                  </div>
                  <div className='item-infor'>
                    <h4 className='food-name'>Big Mac</h4>
                    <p className='ingredient'>beef patties, Iceberg lettuce, American cheese, pickles,...</p>
                    <div className='unit-price'>
                      <p className='price'>$6.99</p>
                      <p>Qty: 2</p>
                    </div>
                  </div>
                </div>
              </td>
              <td className='grid__column-7-24'>
                <div className='order-item'>
                  <div>
                    <img className='menu-image' src={burger} alt='' />
                  </div>
                  <div className='item-infor'>
                    <h4 className='food-name'>Big Mac</h4>
                    <p className='ingredient'>beef patties, Iceberg lettuce, American cheese, pickles,...</p>
                    <div className='unit-price'>
                      <p className='price'>$6.99</p>
                      <p>Qty: 2</p>
                    </div>
                  </div>
                </div>
              </td>
            </div>
            <div className='order-footer'>
              <div className='line'></div>
              <div className='total-prices'>
                <p>Total: $25.34</p>
                <button className='btn btn-cancel'>Cancelled</button>
              </div>
            </div>
          </tr>
        </table>
        <div className='grid'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default History;
