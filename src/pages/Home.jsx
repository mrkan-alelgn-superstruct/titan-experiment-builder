import React, { useContext, useEffect } from 'react';
import HomeNavBar from '../components/HomeNavBar/HomeNavBar';
import AuthContext from '../components/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login/Login';

const Home = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user, navigate]);
  return (
    <>
      {!user && !loading && (
        <>
          <HomeNavBar />
          <Login />
        </>
      )}
    </>
  );
};

export default Home;
