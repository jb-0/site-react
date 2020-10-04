import React, { useContext } from "react";
import "../../styles/Navbar.css";
import UserContext from '../../context/UserContext';


function Navbar() {
  const { userData, setUserData } = useContext(UserContext);

  function handleLogout(){
    setUserData({
      token: undefined,
      user: undefined
    });
    localStorage.setItem('auth-token', '');
  }

  return (
    <div className="navbar">
      <a href="/#about">About</a>
      <a href="/#portfolio">Portfolio</a>
      <a href="/#contact">Contact</a>
      <a href="/blog">Blog</a>
      {
        userData.user ? <button onClick={handleLogout}>Log out</button> : null
      }
    </div>
  );
}

export default Navbar;
