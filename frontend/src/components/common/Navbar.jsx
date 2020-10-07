import React, { useContext, useState, useLayoutEffect } from 'react';
import '../../styles/Navbar.css';
import UserContext from '../../context/UserContext';

function Navbar() {
  const { userData, setUserData } = useContext(UserContext);
  const [size, setSize] = useState({width: 0, height: 0});

  function handleLogout() {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem('auth-token', '');
  }

  useLayoutEffect(() => {
    function updateSize() {
      setSize({width: window.innerWidth, height: window.innerHeight});
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="navbar">
      {size.width > 440 ? (
        <div>
          <a href="/#about">About</a>
          <a href="/#portfolio">Portfolio</a>
          <a href="/#contact">Contact</a>
          <a href="/blog">Blog</a>
        </div>
      ) : (
        false
      )}
      {userData.user ? <button onClick={handleLogout}>Log out</button> : null}
    </div>
  );
}

export default Navbar;
