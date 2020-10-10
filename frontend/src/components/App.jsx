import React, { useState, useEffect } from 'react';
import Home from './home/Home';
import Blog from './blog/Blog';
import BlogPostEdit from './blog/BlogPostEdit';
import BlogPostCreate from './blog/BlogPostCreate';
import BlogPost from './blog/BlogPost';
import Login from './user/Login';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import PageNotFound from './common/PageNotFound';
import UserContext from '../context/UserContext';
import {ViewProvider} from '../context/ViewContext'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
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
    <div className="app">
      <Router>
        <ViewProvider>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/:id" component={BlogPost} />
            <Route path="/blog-edit/:id" component={BlogPostEdit} />
            <Route path="/blog-create" component={BlogPostCreate} />
            <Route path="/login" component={Login} />
            <Route path="*" component={PageNotFound} status={404} />
          </Switch>
          <Footer />
        </UserContext.Provider>
        </ViewProvider>
      </Router>
    </div>
  );
}

export default App;
