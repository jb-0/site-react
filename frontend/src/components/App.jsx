import React, { useState, useEffect } from 'react';
import Home from './home/Home';
import Blog from './blog/Blog';
import BlogPostEdit from './blog/BlogPostEdit';
import BlogPostCreate from './blog/BlogPostCreate';
import BlogPost from './blog/BlogPost';
import Login from './user/Login';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import UserContext from '../context/UserContext';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  async function checkLoggedIn() {
    const token = localStorage.getItem('auth-token');
    if (token === null) {
      localStorage.setItem('auth-token', '');
      token = '';
    }

    const tokenRes = await fetch('/api/users/isTokenValid', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
    });

    if (await tokenRes.json())
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div className="app">
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:id" component={BlogPost} />
          <Route path="/blog-edit/:id" component={BlogPostEdit} />
          <Route path="/blog-create" component={BlogPostCreate} />
          <Route path="/login" component={Login} />
          <Footer />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
