import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './authen/login';
import Signup from './authen/signup';
import Profile from './profile/profile';
import Landing from './landing/index';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
