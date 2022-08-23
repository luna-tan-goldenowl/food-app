import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from 'core/App';
import reportWebVitals from './reportWebVitals';
//import Login from './authen/login';
// import Footer from './pages/partials/footer';
// import OrderHistory from 'Pages/History/index';
//import Profile from 'Pages/Profile/index';
//import Landing from './Pages/Landing/index';
// import Cart from 'Pages/CartPayment/index';
//import Payment from './Pages/CartPayment/payment2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
