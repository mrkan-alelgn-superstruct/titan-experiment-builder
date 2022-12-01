import React from 'react';
import { Link } from 'react-router-dom';
import './HomeNavBar.css';

const HomeNavBar = () => {
  return (
    <div className='home-navbar-container'>
      <Link to='/'>
        <img className='home-navbar-logo' src='/images/logo.svg' alt='logo' />
      </Link>
    </div>
  );
};

export default HomeNavBar;
