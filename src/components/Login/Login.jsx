import React from 'react';
import PlatformLogin from '../PlatformLogin/PlatformLogin';
import { signInWithGoogle, signInWithMicrosoft } from '../../utils/firebase';
import './Login.css';

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login'>
        <h2>Sign in to get started.</h2>
        <div className='platform-login-components-container'>
          <PlatformLogin
            description='sign in with google'
            alt='Google logo'
            src='/images/google-logo.svg'
            onClick={signInWithGoogle}
          />
          <PlatformLogin
            description='sign in with microsoft'
            alt='Microsoft logo'
            src='/images/microsoft-logo.svg'
            onClick={signInWithMicrosoft}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
