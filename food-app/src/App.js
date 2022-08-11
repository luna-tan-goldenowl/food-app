import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';
import Login from './authen/login';
import Signup from './authen/signup';
import Profile from './profile/profile';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
