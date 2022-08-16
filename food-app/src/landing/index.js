import '../style/base.scss';
import './landing.scss';
import cooking from '../assets/cuate.png';
import pizza1 from '../assets/pizza-image/pizza1.png';
import pizza2 from '../assets/pizza-image/pizza2.png';
import pizza3 from '../assets/pizza-image/pizza3.png';
import pizza4 from '../assets/pizza-image/pizza4.png';
import pizza5 from '../assets/pizza-image/pizza5.png';
import pizza6 from '../assets/pizza-image/pizza6.png';
import pizza7 from '../assets/pizza-image/pizza7.png';
import pizza8 from '../assets/pizza-image/pizza8.png';
import star from '../assets/star.png';
import add from '../assets/add-to-cart.png';
import search from '../assets/search.png';
import bag from '../assets/bag.png';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db, logout } from '../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';

function Landing() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
    fetchUserName();
  }, [user, loading]);
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
          <Link to="/" className="link-to-page" onClick={logout}>
            Logout
          </Link>
        </div>
        <div className="search-and-bag">
          <img className="search" src={search} alt="search icon" />
          <img className="bag-cart" src={bag} alt="bag icon" />
        </div>
      </div>
      <div className="content-landing">
        <div className="banner">
          <div className="grid__column-6-12 left-frame ">
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
          <div>
            <p className="title-trending">Trending today</p>
          </div>
          <div className="tab-navi">
            <button className="tabs tab-profile active">All</button>
            <button className="tabs tab-offers">Offers</button>
            <button className="tabs tab-free">Free delivery</button>
            <button className="tabs tab-new">New</button>
            <button className="tabs tab-coming">Coming</button>
          </div>
          <select name="" id="" className="filters">
            <option value="">Filters</option>
            <option value=""></option>
          </select>
          <div className="food-menu">
            <table className="grid__column-10">
              <tbody>
                <tr className="">
                  <td className=" grid__column-10-2">
                    <div className="food-item">
                      <img className="image-food" src={pizza1} alt="" />
                      <div className="food-item-infor">
                        <div className="foodname-price">
                          <p>Home made pizza</p>
                          <p>$19</p>
                        </div>
                        <div className="vote-time-add">
                          <div className="vote-and-time">
                            <p className="vote">
                              <img className="vote-star" src={star} alt={name} />
                              4.7
                            </p>
                            <p>50-79 min</p>
                          </div>
                          <button className="add-to-cart">
                            <img src={add} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=" grid__column-10-2">
                    <div className="food-item">
                      <img className="image-food" src={pizza2} alt="" />
                      <div className="food-item-infor">
                        <div className="foodname-price">
                          <p>Home made pizza</p>
                          <p>$19</p>
                        </div>
                        <div className="vote-time-add">
                          <div className="vote-and-time">
                            <p className="vote">
                              <img className="vote-star" src={star} alt="" />
                              4.7
                            </p>
                            <p>50-79 min</p>
                          </div>
                          <button className="add-to-cart">
                            <img src={add} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=" grid__column-10-2">
                    <div className="food-item">
                      <img className="image-food" src={pizza3} alt="" />
                      <div className="food-item-infor">
                        <div className="foodname-price">
                          <p>Home made pizza</p>
                          <p>$19</p>
                        </div>
                        <div className="vote-time-add">
                          <div className="vote-and-time">
                            <p className="vote">
                              <img className="vote-star" src={star} alt="" />
                              4.7
                            </p>
                            <p>50-79 min</p>
                          </div>
                          <button className="add-to-cart">
                            <img src={add} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=" grid__column-10-2">
                    <div className="food-item">
                      <img className="image-food" src={pizza4} alt="" />
                      <div className="food-item-infor">
                        <div className="foodname-price">
                          <p>Home made pizza</p>
                          <p>$19</p>
                        </div>
                        <div className="vote-time-add">
                          <div className="vote-and-time">
                            <p className="vote">
                              <img className="vote-star" src={star} alt="" />
                              4.7
                            </p>
                            <p>50-79 min</p>
                          </div>
                          <button className="add-to-cart">
                            <img src={add} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className=" grid__column-10-2">
                    <div className="food-item">
                      <img className="image-food" src={pizza5} alt="" />
                      <div className="food-item-infor">
                        <div className="foodname-price">
                          <p>Home made pizza</p>
                          <p>$19</p>
                        </div>
                        <div className="vote-time-add">
                          <div className="vote-and-time">
                            <p className="vote">
                              <img className="vote-star" src={star} alt="" />
                              4.7
                            </p>
                            <p>50-79 min</p>
                          </div>
                          <button className="add-to-cart">
                            <img src={add} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=" grid__column-10-2">
                    <div className="food-item">
                      <img className="image-food" src={pizza6} alt="" />
                      <div className="food-item-infor">
                        <div className="foodname-price">
                          <p>Home made pizza</p>
                          <p>$19</p>
                        </div>
                        <div className="vote-time-add">
                          <div className="vote-and-time">
                            <p className="vote">
                              <img className="vote-star" src={star} alt="" />
                              4.7
                            </p>
                            <p>50-79 min</p>
                          </div>
                          <button className="add-to-cart">
                            <img src={add} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=" grid__column-10-2">
                    <div className="food-item">
                      <img className="image-food" src={pizza7} alt="" />
                      <div className="food-item-infor">
                        <div className="foodname-price">
                          <p>Home made pizza</p>
                          <p>$19</p>
                        </div>
                        <div className="vote-time-add">
                          <div className="vote-and-time">
                            <p className="vote">
                              <img className="vote-star" src={star} alt="" />
                              4.7
                            </p>
                            <p>50-79 min</p>
                          </div>
                          <button className="add-to-cart">
                            <img src={add} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=" grid__column-10-2">
                    <div className="food-item">
                      <img className="image-food" src={pizza8} alt="" />
                      <div className="food-item-infor">
                        <div className="foodname-price">
                          <p>Home made pizza</p>
                          <p>$19</p>
                        </div>
                        <div className="vote-time-add">
                          <div className="vote-and-time">
                            <p className="vote">
                              <img className="vote-star" src={star} alt="" />
                              4.7
                            </p>
                            <p>50-79 min</p>
                          </div>
                          <button className="add-to-cart">
                            <img src={add} alt="" />
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
        <button className="load-more">+ Load more...</button>
      </div>
    </div>
  );
}

export default Landing;
