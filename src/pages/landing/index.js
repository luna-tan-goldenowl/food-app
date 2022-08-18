import 'assets/scss/base.scss';
import './style.scss';
import cooking from 'assets/image/cuate.png';
import pizza1 from 'assets/image/pizza1.png';
import pizza2 from 'assets/image/pizza2.png';
import pizza3 from 'assets/image/pizza3.png';
import pizza4 from 'assets/image/pizza4.png';
import pizza5 from 'assets/image/pizza5.png';
import pizza6 from 'assets/image/pizza6.png';
import pizza7 from 'assets/image/pizza7.png';
import pizza8 from 'assets/image/pizza8.png';
import star from 'assets/image/star.png';
import add from 'assets/image/add-to-cart.png';
import Header from 'pages/partials/header';
import Footer from 'pages/partials/footer';
import React from 'react';

function Landing() {
  return (
    <div className='container-landing grid'>
      <Header />
      <div className='content-landing'>
        <div className='banner-landing'>
          <div className='grid__column-6-12 left-frame '>
            <h1 className='slogan'>
              Authentic local
              <br />
              <p>food in Tbay</p>
            </h1>
            <div className='introduce'>
              TBayEAT is a courier service in which authentic home cook
              <br />
              <p>food is delived to a customer</p>
            </div>
            <div className='search'>
              <input className='search-input' type='text' placeholder='Search food your love' />
              <button className='search-button' type='submit'>
                Search
              </button>
            </div>
          </div>
          <div className='grid__column-6-12'>
            <img className='image-cooking' src={cooking} alt='' />
          </div>
        </div>
        <div className='body-content grid__column-10'>
          <div>
            <p className='title-trending'>Trending today</p>
          </div>
          <div className='tab-navi'>
            <button className='tabs tab-profile active'>All</button>
            <button className='tabs tab-offers'>Offers</button>
            <button className='tabs tab-free'>Free delivery</button>
            <button className='tabs tab-new'>New</button>
            <button className='tabs tab-coming'>Coming</button>
          </div>
          <select name='' id='' className='filters'>
            <option value=''>Filters</option>
            <option value=''></option>
          </select>
          <div className='food-menu'>
            <table className='grid__column-10'>
              <tbody>
                <tr className=''>
                  <td className=' grid__column-10-2'>
                    <div className='food-item'>
                      <img className='image-food' src={pizza1} alt='' />
                      <div className='food-item-infor'>
                        <div className='foodname-price'>
                          <p>Home made pizza</p>
                          <p>$19</p>
                        </div>
                        <div className='vote-time-add'>
                          <div className='vote-and-time'>
                            <p className='vote'>
                              <img className='vote-star' src={star} alt={name} />
                              4.7
                            </p>
                            <p>50-79 min</p>
                          </div>
                          <button className='add-to-cart'>
                            <img src={add} alt='' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=' grid__column-10-2'>
                    <div className='food-item'>
                      <img className='image-food' src={pizza2} alt='' />
                      <div className='food-item-infor'>
                        <div className='foodname-price'>
                          <p>Home made pizza</p>
                          <p>$19</p>
                        </div>
                        <div className='vote-time-add'>
                          <div className='vote-and-time'>
                            <p className='vote'>
                              <img className='vote-star' src={star} alt='' />
                              4.7
                            </p>
                            <p>50-79 min</p>
                          </div>
                          <button className='add-to-cart'>
                            <img src={add} alt='' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=' grid__column-10-2'>
                    <div className='food-item'>
                      <img className='image-food' src={pizza3} alt='' />
                      <div className='food-item-infor'>
                        <div className='foodname-price'>
                          <p>Home made pizza</p>
                          <p>$19</p>
                        </div>
                        <div className='vote-time-add'>
                          <div className='vote-and-time'>
                            <p className='vote'>
                              <img className='vote-star' src={star} alt='' />
                              4.7
                            </p>
                            <p>50-79 min</p>
                          </div>
                          <button className='add-to-cart'>
                            <img src={add} alt='' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=' grid__column-10-2'>
                    <div className='food-item'>
                      <img className='image-food' src={pizza4} alt='' />
                      <div className='food-item-infor'>
                        <div className='foodname-price'>
                          <p>Home made pizza</p>
                          <p>$19</p>
                        </div>
                        <div className='vote-time-add'>
                          <div className='vote-and-time'>
                            <p className='vote'>
                              <img className='vote-star' src={star} alt='' />
                              4.7
                            </p>
                            <p>50-79 min</p>
                          </div>
                          <button className='add-to-cart'>
                            <img src={add} alt='' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className=' grid__column-10-2'>
                    <div className='food-item'>
                      <img className='image-food' src={pizza5} alt='' />
                      <div className='food-item-infor'>
                        <div className='foodname-price'>
                          <p>Home made pizza</p>
                          <p>$19</p>
                        </div>
                        <div className='vote-time-add'>
                          <div className='vote-and-time'>
                            <p className='vote'>
                              <img className='vote-star' src={star} alt='' />
                              4.7
                            </p>
                            <p>50-79 min</p>
                          </div>
                          <button className='add-to-cart'>
                            <img src={add} alt='' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=' grid__column-10-2'>
                    <div className='food-item'>
                      <img className='image-food' src={pizza6} alt='' />
                      <div className='food-item-infor'>
                        <div className='foodname-price'>
                          <p>Home made pizza</p>
                          <p>$19</p>
                        </div>
                        <div className='vote-time-add'>
                          <div className='vote-and-time'>
                            <p className='vote'>
                              <img className='vote-star' src={star} alt='' />
                              4.7
                            </p>
                            <p>50-79 min</p>
                          </div>
                          <button className='add-to-cart'>
                            <img src={add} alt='' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=' grid__column-10-2'>
                    <div className='food-item'>
                      <img className='image-food' src={pizza7} alt='' />
                      <div className='food-item-infor'>
                        <div className='foodname-price'>
                          <p>Home made pizza</p>
                          <p>$19</p>
                        </div>
                        <div className='vote-time-add'>
                          <div className='vote-and-time'>
                            <p className='vote'>
                              <img className='vote-star' src={star} alt='' />
                              4.7
                            </p>
                            <p>50-79 min</p>
                          </div>
                          <button className='add-to-cart'>
                            <img src={add} alt='' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=' grid__column-10-2'>
                    <div className='food-item'>
                      <img className='image-food' src={pizza8} alt='' />
                      <div className='food-item-infor'>
                        <div className='foodname-price'>
                          <p>Home made pizza</p>
                          <p>$19</p>
                        </div>
                        <div className='vote-time-add'>
                          <div className='vote-and-time'>
                            <p className='vote'>
                              <img className='vote-star' src={star} alt='' />
                              4.7
                            </p>
                            <p>50-79 min</p>
                          </div>
                          <button className='add-to-cart'>
                            <img src={add} alt='' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button className='load-more'>+ Load more...</button>
        <div className='grid'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Landing;
