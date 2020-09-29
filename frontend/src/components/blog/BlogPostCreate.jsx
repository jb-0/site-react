import React, { useState } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import "../../styles/Forms.css";

function BlogPostCreate() {
  const [blogPost, setBlogPost] = useState({
    title: "",
    author: "",
    post: "",
    created_date: new Date(),
  });

  function handleSubmit(event) {
    event.preventDefault();
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          onChange={handleUpdates}
          type="text"
          id="title"
          name="title"
          placeholder="Blog title.."
          className="text-input"
          value={blogPost.title}
        ></input>
        <br />
        <br />

        <label htmlFor="post">
          <span>Blog Post</span>
        </label>
        <br />
        <textarea
          onChange={handleUpdates}
          id="post"
          name="post"
          placeholder="Write something.."
          className="text-input"
          value={blogPost.post}
        ></textarea>
        <br />
        <br />

        <input type="submit" value="Submit" className="submit-button"></input>
      </form>
      <Footer />
    </div>
  );
}

export default BlogPostCreate;
