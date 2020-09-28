import React from "react";
import Home from "./home/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
      <Route path="/" exact component={Home} />
      {/* <Route path="/blog" exact component={Blog} />
      <Route path="/blog/edit/:id" component={BlogPostEdit} />
      <Route path="/blog/create" component={CreateBlogPost} /> */}
      </Router>
    </div>
  );
}

export default App;
