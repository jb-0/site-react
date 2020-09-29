import React, { useState } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

function BlogPostCreate() {
  const [blogPost, updateBlogPost] = useState({
    title: "",
    author: "",
    post: "",
    created_date: "",
  });

  return (
    <div className="blog-post-create">
      <Navbar />
      <h1>Create a blog post</h1>
      <Footer />
    </div>
  );
}

export default BlogPostCreate;
