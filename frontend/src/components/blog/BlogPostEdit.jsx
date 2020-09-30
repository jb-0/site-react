import React, { useState, useEffect } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import BlogPostForm from "./BlogPostForm";
import "../../styles/Forms.css";

function BlogPostEdit(props) {
  const [blogPost, setBlogPost] = useState({
    title: "",
    post: "",
  });

  async function fetchData() {
    const url = `http://localhost:4000/blog/${props.match.params.id}`;
    const rawResponse = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    //TODO err handling response
    setBlogPost(await rawResponse.json());
    console.log(blogPost);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const url = `http://localhost:4000/blog/edit/${props.match.params.id}`;
    console.log(url);

    const rawResponse = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(blogPost)
  });
  //TODO err handling response
  const content = rawResponse;
  }

  function handleUpdates(event) {
    const target = event.target.name;
    const value = event.target.value;

    setBlogPost((previousValues) => {
      return { ...previousValues, [target]: value };
    });
  }

  return (
    <div className="blog-post-edit">
      <Navbar />
      <h1>Edit blog post</h1>
      <BlogPostForm handleUpdates={handleUpdates} handleSubmit={handleSubmit} blogPost={blogPost}/>
      <Footer />
    </div>
  );
}

export default BlogPostEdit;
