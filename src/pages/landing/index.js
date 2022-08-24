import React from 'react';
import { useState, useEffect } from 'react';
import {db } from 'core/firebase';
import {collection, getDocs} from 'firebase/firestore';

import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import YourCart from 'Pages/YourCart';

import cooking from 'assets/image/cuate.png';
// import pizza1 from 'assets/image/pizza1.png';
// import pizza2 from 'assets/image/pizza2.png';
// import pizza3 from 'assets/image/pizza3.png';
// import pizza4 from 'assets/image/pizza4.png';
// import pizza5 from 'assets/image/pizza5.png';
// import pizza6 from 'assets/image/pizza6.png';
// import pizza7 from 'assets/image/pizza7.png';
// import pizza8 from 'assets/image/pizza8.png';
import star from 'assets/image/star.png';
import add from 'assets/image/add-to-cart.png';

import './style.scss';

function Landing() {
  const [show, setShow] = useState(false);
  const [foodData, setFoodData] = useState([]);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, 'food-item'));
    querySnapshot.forEach(doc => {
      // console.log('doc:', doc.data());
      setFoodData(foodData => [...foodData, doc.data()]);
    });
  };

  useEffect(() => {  
    getData();
  },[]);

  return (
    <div className='Landing grid'>
      <Header setShow={setShow} />
      <div className='content-landing'>
        <div className='banner-landing'>
          <div className='left-frame '>
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
        <div className='body-content'>
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
            <table>
              <tbody>
                <tr className='grid__column--10'>
                  {foodData.map((item, i) => {
                    // console.log('item nè, ', item, 'name nè', item.foodName);
                    return (
                      <div className='grid__column-10-2' key={i}>
                        <td>
                          <div className='food-item'>
                            <img className='image-food' src={item.foodImg} alt='' />
                            <div className='food-item-infor'>
                              <div className='foodname-price'>
                                <p>{item.foodName}</p>
                                <p>{item.price}</p>
                              </div>
                              <div className='vote-time-add'>
                                <div className='vote-and-time'>
                                  <p className='vote'>
                                    <img className='vote-star' src={star} alt='star' />
                                    {item.star}
                                  </p>
                                  <p>{item.time}</p>
                                </div>
                                <button className='add-to-cart'>
                                  <img src={add} alt='' />
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                      </div>
                    );
                  })}
                  {/* <td className=' grid__column-10-2'>
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
                  </td> */}
                </tr>
              </tbody>
              {/* <tbody>
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
              </tbody> */}
            </table>
            {show && (
              <div className='back-drop'>
                <div className='back-drop-YourCart' onClick={() => setShow(false)}></div>
                <div className='yourCart'>
                  <YourCart setShow={setShow} />
                </div>
              </div>
            )}
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
