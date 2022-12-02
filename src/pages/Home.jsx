import React, { useContext, useEffect } from 'react';
import HomeNavBar from '../components/HomeNavBar/HomeNavBar';
import AuthContext from '../components/AuthContext/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import Login from '../components/Login/Login';
import TermsOfUse from '../components/TermsOfUse/TermsOfUse';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';

const Home = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user, navigate]);
  return (
    <>
      {!user && !loading && (
        <>
          <HomeNavBar />
          {pathname === '/terms-of-use' ? (
            <TermsOfUse />
          ) : pathname === '/privacy-policy' ? (
            <PrivacyPolicy />
          ) : (
            <Login />
          )}
        </>
      )}
    </>
  );
};

export default Home;
