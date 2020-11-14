import React, { useContext, useState, useLayoutEffect } from 'react';
import '../../styles/Navbar.css';
import {UserContext} from '../../context/UserContext';
import { ViewContext } from '../../context/ViewContext';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
  const { userData, setUserData } = useContext(UserContext);
  const [burgerItemsVisible, setBurgerItemsVisible] = useState(false);
  const size = useContext(ViewContext);

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

  const navbarItems = (
    <div className="navbarItems">
      <a href="/">About</a>
      <a href="/#portfolio">Portfolio</a>
      <a href="/#contact">Contact</a>
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
