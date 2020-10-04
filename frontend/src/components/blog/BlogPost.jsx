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
    console.log(blogPost);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="blog">
      <div className="blog-post">
        <h1>{blogPost.title}</h1>
        <p>
          Written by {blogPost.author} on {blogPost.created_date}
        </p>
        <br />
        <p>{blogPost.post}</p>
      </div>
    </div>
  );
}

export default BlogPost;
