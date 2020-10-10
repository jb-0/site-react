import React, { useContext, useState, useLayoutEffect } from 'react';
import '../../styles/Navbar.css';
import UserContext from '../../context/UserContext';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
  const { userData, setUserData } = useContext(UserContext);
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [burgerItemsVisible, setBurgerItemsVisible] = useState(false);

  function handleLogout() {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem('auth-token', '');
  }

  function handleBurgerClick() {
    setBurgerItemsVisible(!burgerItemsVisible);
  };

  useLayoutEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const navbarItems = (
    <div className="navbarItems">
      <a href="/">About</a>
      <a href="/#portfolio">Portfolio</a>
      <a href="/#contact">Contact</a>
      <a href="/blog">Blog</a>
    </div>
  );

  return (
    <div className="navbar">
      {size.width > 440 ? (
        <div>{navbarItems}</div>
      ) : (
        <div className="burger-nav">
          <MenuIcon onClick={handleBurgerClick} htmlColor="black" fontSize="large" />
          {burgerItemsVisible ? navbarItems : null}
        </div>
      )}
      {userData.user ? <button onClick={handleLogout}>Log out</button> : null}
    </div>
  );
}

export default Navbar;
