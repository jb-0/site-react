import React, { useEffect, useState } from "react";
import "../../styles/Blog.css"

function BlogPost(props) {
  const [blogPost, setBlogPost] = useState([]);

  async function fetchData() {
    const rawResponse = await fetch(`/api/blog/${props.match.params.id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    //TODO err handling response
    setBlogPost(await rawResponse.json());
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="blog">
    {blogPost.title ? 
      <div className="blog-post">
        <h1>{blogPost.title}</h1>
        <p>
          Written by {blogPost.author} on {blogPost.created_date.substr(0, 10)}
        </p>
        <br />
        <p>{blogPost.post}</p>
      </div>
      :
      null }
    </div>
  );
}

export default BlogPost;
