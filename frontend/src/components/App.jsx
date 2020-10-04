import React from 'react';
import Home from './home/Home';
import Blog from './blog/Blog';
import BlogPostEdit from './blog/BlogPostEdit';
import BlogPostCreate from './blog/BlogPostCreate';
import BlogPost from './blog/BlogPost';
import Login from './user/Login';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:id" component={BlogPost} />
        <Route path="/blog-edit/:id" component={BlogPostEdit} />
        <Route path="/blog-create" component={BlogPostCreate} />
        <Route path="/login" component={Login} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
