import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css';

function LoginScreen() {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
      navigate('/browse');
    };

  return (
    <div className="loginScreen">
        <div className='login-background'> 
            <img
                className='logo-netflix'
                src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                alt='Netlfix Logo' />
            <button className='login-button'> Sign In</button>
            <div className= "login-gradient" />
        </div>
        <div className='login-body'>
            <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at Anytime</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="login-input">
                    <form>
                        <input placeholder= "Email Address" /> 
                        <button className="login-getStarted" onClick={handleGetStartedClick}>GET STARTED</button> 
                    </form>
                </div>
            </>
        </div>
    </div>
  );
}

export default LoginScreen;
