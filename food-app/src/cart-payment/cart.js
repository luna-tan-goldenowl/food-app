import React from 'react';
import '../style/base.scss';
import './style.scss';
import cooking from '../assets/cuate.png';
import item1 from '../assets/item1.png';
import item2 from '../assets/item2.png';
import item3 from '../assets/item3.png';
import Iresha from '../assets/avt_Iresha.png';
import Gauri from '../assets/avt_Gauri.png';
import Header from '../partials/header';
import Footer from '../partials/footer';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div className="cart-container grid">
      <Header />
      <div className="content-wrap">
        <div className="banner-head">
          <div className="grid__column-6-12 left-grid ">
            <h1 className="slogan">
              Authentic local
              <br />
              <p>food in Tbay</p>
            </h1>
            <div className="introduce">
              TBayEAT is a courier service in which authentic home cook
              <br />
              <p>food is delived to a customer</p>
            </div>
            <div className="search">
              <input className="search-input" type="text" placeholder="Search food your love" />
              <button className="search-button" type="submit">
                Search
              </button>
            </div>
          </div>
          <div className="grid__column-6-12">
            <img className="image-cooking" src={cooking} alt="" />
          </div>
        </div>
        <div className="body-content grid__column-10">
          <div className="title-items">
            <p className="">Home / </p>
            <p className=""> Trending / </p>
            <p className="black"> Famous Tandoor</p>
          </div>
          <div className="cart-itemlist">
            <table className="grid__column">
              <tbody>
                <tr className="grid__column-10">
                  <th className="grid__column-10-5">PRODUCT</th>
                  <th className="grid__column-10-5-3">PRICE</th>
                  <th className="grid__column-10-5-3">QTY</th>
                  <th className="grid__column-10-5-3">UNIT PRICE</th>
                </tr>
                <div className="line-wrap"></div>
              </tbody>
              <tbody>
                <tr className="grid__column-10 item-food">
                  <td className="grid__column-10-5">
                    <div className="cart-item">
                      <img className="image-food-item" src={item1} alt="image item 1" />
                      <div className="itemInfor">
                        <div className="item-info">
                          <h4 className="item-name">Home made pizza 12</h4>
                          <p className="item-ingredient">beef patties, Iceberg lettuce, American cheese, pickles,...</p>
                        </div>
                        <div className="user-add">
                          <p className="add-by">Add by you</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="grid__column-10-5-3">$20</td>
                  <td className="grid__column-10-5-3">
                    <div className="quantity">
                      <button className="qty-minus">-</button>
                      <p className="qty-number">2</p>
                      <button className="qty-plus">+</button>
                    </div>
                    <a href="" className="remove-item">
                      Remove Item
                    </a>
                  </td>
                  <td className="grid__column-10-5-3">$10</td>
                </tr>
                <div className="line-wrap"></div>
              </tbody>
              <tbody>
                <tr className="grid__column-10 item-food">
                  <td className="grid__column-10-5">
                    <div className="cart-item">
                      <img className="image-food-item" src={item2} alt="image item 1" />
                      <div className="itemInfor">
                        <div className="item-info">
                          <h4 className="item-name">Home made pizza 12</h4>
                          <p className="item-ingredient">beef patties, Iceberg lettuce, American cheese, pickles,...</p>
                        </div>
                        <div className="user-add">
                          <p className="add-by">Add by Iresha</p>
                          <img src={Iresha} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="grid__column-10-5-3">$25.98</td>
                  <td className="grid__column-10-5-3">
                    <div className="quantity">
                      <button className="qty-minus">-</button>
                      <p className="qty-number">2</p>
                      <button className="qty-plus">+</button>
                    </div>
                  </td>
                  <td className="grid__column-10-5-3">$12.99</td>
                </tr>
                <div className="line-wrap"></div>
              </tbody>
              <tbody>
                <tr className="grid__column-10 item-food">
                  <td className="grid__column-10-5">
                    <div className="cart-item">
                      <img className="image-food-item" src={item3} alt="image item 1" />
                      <div className="itemInfor">
                        <div className="item-info">
                          <h4 className="item-name">Home made pizza 12</h4>
                          <p className="item-ingredient">beef patties, Iceberg lettuce, American cheese, pickles,...</p>
                        </div>
                        <div className="user-add">
                          <p className="add-by">Add by Gauri</p>
                          <img src={Gauri} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="grid__column-10-5-3">$14.99</td>
                  <td className="grid__column-10-5-3">
                    <div className="quantity">
                      <button className="qty-minus">-</button>
                      <p className="qty-number">1</p>
                      <button className="qty-plus">+</button>
                    </div>
                  </td>
                  <td className="grid__column-10-5-3">$14.99</td>
                </tr>
                <div className="line-wrap"></div>
              </tbody>
            </table>
          </div>
          <div className="pay-total">
            <div className="voucher grid__column-4">
              <input className="voucher-input" type="text" placeholder="Voucher code" />
              <button className="voucher-button" type="submit">
                Redeem
              </button>
            </div>
            <div className="total-price grid__column-4">
              <div className="pay-info">
                <div className="text">Subtotal</div>
                <div className="text">$98</div>
              </div>
              <div className="pay-info">
                <div className="text">Shipping fee</div>
                <div className="text">$20</div>
              </div>
              <div className="pay-info">
                <div className="text">Coupon</div>
                <div className="text">No</div>
              </div>
              <div className="line-wrap-foot"></div>
              <div className="pay-info">
                <div className="text-total">TOTAL</div>
                <div className="text-total">$118</div>
              </div>
              <button className="button-payYour">Pay Your Portion: $20</button>
              <button className="button-payAll ">Pay All: $118</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
