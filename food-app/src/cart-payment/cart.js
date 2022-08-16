import React from 'react';
import '../style/base.scss';
import './style.scss';
import cooking from '../assets/cuate.png';
import item1 from '../assets/item1.png';
// import item2 from '../assets/item2.png';
// import item3 from '../assets/item3.png';
// import star from '../assets/star.png';
// import add from '../assets/add-to-cart.png';
import search from '../assets/search.png';
import bag from '../assets/bag.png';
import { Link } from 'react-router-dom';

function Cart() {
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
              </tbody>
              <tbody>
                <tr className="grid__column-10 item-food">
                  <td className="grid__column-10-5">
                    <div className="cart-item">
                      <img src={item1} alt="image item 1" />
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
