import React, { useEffect, useState } from "react";
import "../../styles/Blog.css";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  async function fetchData() {
    const rawResponse = await fetch('/api/blog', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    setBlogPosts(await rawResponse.json());
  }

  useEffect(() => {
    fetchData();
  }, []);

  function generatePostPreview(blogPost) {
    const blogPostWithoutHtmlTags = blogPost.replace(/<.*>/, '');
    const previewText = `${blogPostWithoutHtmlTags.slice(0, 100).trim()}...`

    return previewText
  }

  return (
    <div className="blog">
      <h1>Blog Posts</h1>
      {blogPosts.map((blogPost) => {
        return (
          <div className="blog-post">
            <h2>{blogPost.title}</h2>
            <p>{generatePostPreview(blogPost.post)}</p>
            <form action={"/blog/" + blogPost._id}>
              <button className="submit-button">Read</button>
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default Blog;
