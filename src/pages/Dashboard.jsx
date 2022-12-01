import React, { useContext, useEffect } from 'react';
import SearchCompany from '../components/SearchCompany/SearchCompany';
import AuthContext from '../components/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return <SearchCompany />;
};

export default Dashboard;
