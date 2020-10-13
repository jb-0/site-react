import React, { useState, useContext } from 'react';
import {UserContext} from '../../context/UserContext';

function Login() {
  const [formText, setFormText] = useState({
    email: '',
    password: '',
  });

  const { userData, setUserData } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    const rawResponse = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        frontend: 'react-frontend',
      },
      body: JSON.stringify(formText)
    });

    const loginRes = await rawResponse.json();
    setUserData({
      token: loginRes.token,
      user: loginRes.user
    });
    localStorage.setItem('auth-token', loginRes.token);
  }

  function handleUpdates(event) {
    const target = event.target.name;
    const value = event.target.value;

    setFormText((previousValues) => {
      return { ...previousValues, [target]: value };
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          onChange={handleUpdates}
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
          className="text-input"
          value={formText.email}
        ></input>
        <br />
        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input
          onChange={handleUpdates}
          type="password"
          id="password"
          name="password"
          placeholder="Your password.."
          className="text-input"
          value={formText.password}
        ></input>
        <br />
        <br />

        <input type="submit" value="Submit" className="submit-button"></input>
      </form>
    </div>
  );
}

export default Login;
