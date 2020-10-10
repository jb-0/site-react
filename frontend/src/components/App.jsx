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
import {UserProvider} from '../context/UserContext';
import {ViewProvider} from '../context/ViewContext'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="app">
      <Router>
        <ViewProvider>
        <UserProvider>
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
        </UserProvider>
        </ViewProvider>
      </Router>
    </div>
  );
}

export default App;
