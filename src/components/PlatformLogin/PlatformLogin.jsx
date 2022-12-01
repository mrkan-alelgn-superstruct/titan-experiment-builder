import React from 'react';
import './PlatformLogin.css';

const PlatformLogin = ({ description, src, alt, onClick }) => {
  return (
    <div className='platform-login-container' onClick={onClick}>
      <img className='platform-login-logo' src={src} alt={alt} />
      <p className='platform-login-text'>{description}</p>
    </div>
  );
};

export default PlatformLogin;
