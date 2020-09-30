import React, { useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

function BlogPost(props) {
  const [blogPost, setBlogPost] = useState([]);
  const url = `http://localhost:4000/blog/${props.match.params.id}`;

  async function fetchData() {
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

  return (
    <div className="blog">
      <Navbar />
      <h1>{blogPost.title}</h1>
      <p>
        Written by {blogPost.author} on {blogPost.created_date}
      </p>
      <br />
      <p>{blogPost.post}</p>
      <Footer />
    </div>
  );
}

export default BlogPost;
