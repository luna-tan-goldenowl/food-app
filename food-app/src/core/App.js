import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'App.css';
import Login from 'pages/auth/login';
import Signup from 'pages/auth/signup';
import Profile from 'pages/profile/profile';
import Landing from 'pages/landing/index';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/landing' element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
