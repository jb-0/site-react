import React, { useState } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import BlogPostForm from "./BlogPostForm";
import "../../styles/Forms.css";

function BlogPostCreate() {
  const [blogPost, setBlogPost] = useState({
    title: "",
    author: "",
    post: "",
    created_date: new Date(),
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const rawResponse = await fetch('/api/create', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(blogPost)
  });
  //TODO handling response
  const content = await rawResponse.json();
  }

  function handleUpdates(event) {
    const target = event.target.name;
    const value = event.target.value;

    setBlogPost((previousValues) => {
      return { ...previousValues, [target]: value };
    });
  }

  return (
    <div className="blog-post-create">
      <Navbar />
      <h1>New blog post</h1>
      <BlogPostForm handleUpdates={handleUpdates} handleSubmit={handleSubmit} blogPost={blogPost}/>
      <Footer />
    </div>
  );
}

export default BlogPostCreate;
