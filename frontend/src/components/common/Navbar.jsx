import React, { useContext, useState } from 'react';
import '../../styles/Navbar.css';
import { ViewContext } from '../../context/ViewContext';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
  const [burgerItemsVisible, setBurgerItemsVisible] = useState(false);
  const size = useContext(ViewContext);

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
          <MenuIcon onClick={handleBurgerClick} htmlColor="white" fontSize="large" />
          {burgerItemsVisible ? navbarItems : null}
        </div>
      )}
    </div>
  );
}

export default Navbar;
