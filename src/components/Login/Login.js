import React from 'react';
import PlatformLogin from '../PlatformLogin/PlatformLogin';
import './Login.css';

const Login = () => {
  const googleAuth = () => {
    console.log('google auth');
  };
  const microsoftAuth = () => {
    console.log('microsoft auth');
  };
  return (
    <div className='login-container'>
      <div className='login'>
        <h2>Sign in to get started.</h2>
        <div className='platform-login-components-container'>
          <PlatformLogin
            description='sign in with google'
            alt='Google logo'
            src='/images/google-logo.svg'
            onClick={googleAuth}
          />
          <PlatformLogin
            description='sign in with microsoft'
            alt='Microsoft logo'
            src='/images/microsoft-logo.svg'
            onClick={microsoftAuth}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
