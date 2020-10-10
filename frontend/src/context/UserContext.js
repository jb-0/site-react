import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({
  token: undefined,
  user: undefined,
});

export const UserProvider = (props) => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  async function checkLoggedIn() {
    let token = localStorage.getItem('auth-token');
    if (token === null) {
      localStorage.setItem('auth-token', '');
      token = '';
    }

    const rawResponse = await fetch('/api/users/isTokenValid', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
    });

    const tokenRes = await rawResponse.json();

    if (tokenRes === true) {
      const rawResponse = await fetch('/api/users/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      });

      const userRes = await rawResponse.json();
      setUserData({
        token,
        user: userRes,
      });
    } else {
      setUserData({
        token: undefined,
        user: undefined,
      });
      localStorage.setItem('auth-token', '');
    }
  }

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </UserContext.Provider>
  );
};
