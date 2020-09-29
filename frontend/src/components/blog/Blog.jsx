import React, { useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([])
  const url = "http://localhost:4000/blog";

  async function fetchData() {
    const rawResponse = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    //TODO err handling response
    setBlogPosts(await rawResponse.json());
  }  

  useEffect(() => {
      fetchData();
  });

  return (
    <div className="blog">
      <Navbar />
      <h1>Blog Posts</h1>
      {blogPosts.map((blogPost) => {
        return (
          <div className="blogPost">
            <h1>{blogPost.title}</h1>
            <p>{blogPost.post}</p>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}



export default Blog;
