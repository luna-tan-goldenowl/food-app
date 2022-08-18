import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import App from 'core/App';
import reportWebVitals from './reportWebVitals';
//import Login from './authen/login';
// import Footer from './pages/partials/footer';
// import OrderHistory from './pages/profile/orderHistory';
// import Profile from './pages/profile/profile';
// import Landing from './pages/landing/index';
// import Cart from './pages/cart-payment/cart';
import Payment from './pages/cart-payment/payment1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Payment />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
