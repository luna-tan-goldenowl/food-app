import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from 'Pages/SignIn/index';
import Signup from 'Pages/SignUp/index';
import Profile from 'Pages/Profile/index';
import Landing from 'Pages/Landing/index';
import Cart from 'Pages/CartPayment/index';
import History from 'Pages/History/index';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/landing' element={<Landing />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/history' element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
