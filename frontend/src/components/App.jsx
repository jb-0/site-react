import React from "react";
import Home from "./home/Home";
import Blog from "./blog/Blog"
import BlogPostEdit from "./blog/BlogPostEdit"
import BlogPostCreate from "./blog/BlogPostCreate"


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
      <Route path="/" exact component={Home} />
      <Route path="/blog" exact component={Blog} />
      {/* BLOG POST VIEW ROUTE? */}
      <Route path="/blog/edit/:id" component={BlogPostEdit} />
      <Route path="/blog/create" component={BlogPostCreate} />
      </Router>
    </div>
  );
}

export default App;
