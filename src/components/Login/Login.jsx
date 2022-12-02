import React from 'react';
import PlatformLogin from '../PlatformLogin/PlatformLogin';
import { signInWithGoogle, signInWithMicrosoft } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
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
        <div className='login-footer-container'>
          <p
            className='login-footer-text login-footer-button'
            onClick={() => {
              navigate('/terms-of-use');
            }}
          >
            Terms of use
          </p>
          <p className='login-footer-text'>|</p>
          <p className='login-footer-text login-footer-button'>
            Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
