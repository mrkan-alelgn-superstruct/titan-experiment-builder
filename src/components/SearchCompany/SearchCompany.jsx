import React, { useContext } from 'react';
import { logout } from '../../utils/firebase';
import AuthContext from '../AuthContext/AuthContext';
import './SearchCompany.css';

const SearchCompany = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='search-company-container'>
      <p>Discover your space truth, {user?.displayName?.split(' ')[0]}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default SearchCompany;
