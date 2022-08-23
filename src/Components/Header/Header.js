import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db, logout } from 'core/firebase';
import { query, collection, getDocs, where} from 'firebase/firestore';

import search from 'assets/image/search.png';
import bag from 'assets/image/bag.png';

import './style.scss';

function Header({ setShow }) {

  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      console.log(name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
    console.log('user nè', user);
    fetchUserName();
  }, [user, loading]);

  return (
    <div className='header'>
      <div>
        <p className='logo-name'>TBayEAT</p>
      </div>
      <div className='navigate-page'>
        <Link to='/landing' className='link-to-page'>
          Home
        </Link>
        <Link to='/' className='link-to-page'>
          About
        </Link>
        <Link to='/' className='link-to-page'>
          Menu
        </Link>
        <Link to='/' className='link-to-page'>
          Contact
        </Link>
        <Link to='/profile' className='link-to-page'>
          Profile
        </Link>
        <Link to='/' className='link-to-page' onClick={logout}>
          Logout
        </Link>
      </div>
      <div className='search-and-bag'>
        <img className='search' src={search} alt='search icon' />
        <img className='bag-cart' src={bag} alt='bag icon' onClick={() => setShow(true)} />
      </div>
    </div>
  );
}

export default Header;
