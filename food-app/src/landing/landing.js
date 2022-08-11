import '../style/base.scss';
import '../style/landing.scss';
import cooking from '../assets/cuate.png';
import pizza1 from '../assets/pizza-image/pizza1.png';
import star from '../assets/star.png';
import add from '../assets/add-to-cart.png';

function Landing() {
  return (
    <div className="container grid">
      <div className="header">
        <p className="logo-name">TBayEAT</p>
      </div>
      <div className="content">
        <div className="banner">
          <div className="grid__column-6-12 left-frame ">
            <h1 className="slogan">
              Authentic local
              <br />
              <p>food in Tbay</p>
            </h1>
            <p className="introduce">
              TBayEAT is a courier service in which authentic home cook
              <br />
              <p>food is delived to a customer</p>
            </p>
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
            <button className="tab tab-profile active">All</button>
            <button className="tab tab-offers">Offers</button>
            <button className="tab tab-free">Free delivery</button>
            <button className="tab tab-new">New</button>
            <button className="tab tab-coming">Coming</button>
          </div>
          <select name="" id="" className="filters">
            <option value="">Filters</option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <div className="food-menu">
            <table className="grid__column-10">
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
                    <img className="image-food" src={pizza1} alt="" />
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
                    <img className="image-food" src={pizza1} alt="" />
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
                    <img className="image-food" src={pizza1} alt="" />
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
              <tr>
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
                    <img className="image-food" src={pizza1} alt="" />
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
                    <img className="image-food" src={pizza1} alt="" />
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
                    <img className="image-food" src={pizza1} alt="" />
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
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
