import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [show, handleShow] = useState(false); 

  const transitionNavBar = () => {
    if (window.scrollY > 100){ 
        handleShow(true);
    } else { 
        handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={show ? 'navbar nav-black' : 'navbar nav-gradient'}>
        <div className='nav-contents'> 
            <img
                className='logo-netflix'
                src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                alt='Netlfix Logo' />
            <div className='nav-pages'>
              <p className='nav-page'>Home</p>
              <p className='nav-page'>TV Shows</p>
              <p className='nav-page'>Movies</p>
              <p className='nav-page'>New & Popular</p>
              <p className='nav-page'>My List</p>
              <p className='nav-page'>Browse by Languages</p>
            </div>
            <img
                className='logo-avatar'
                src="https://avatars.githubusercontent.com/u/6759280?v=4"
                alt='Avatar' />
        </div>
    </div> 
  );
}

export default Navbar;