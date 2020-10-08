import React, { useEffect, useState } from 'react';
import '../../styles/Blog.css';
import { Redirect } from 'react-router'

function BlogPost(props) {
  const [blogPost, setBlogPost] = useState([]);
  const [pageNotFound, setPageNotFound] = useState(false);

  async function fetchData() {
    const rawResponse = await fetch(`/api/blog/${props.match.params.id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (rawResponse.status === 200) {
      const blogPostRes = await rawResponse.json();
      setBlogPost(blogPostRes);
    } else if (rawResponse.status === 404) {
      setPageNotFound(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (pageNotFound) {
    return (<Redirect to="/404" />)
  };

  return (
    <div className="blog">
      {blogPost.title ? (
        <div className="blog-post">
          <h1>{blogPost.title}</h1>
          <p>
            Written by {blogPost.author} on{' '}
            {blogPost.created_date.substr(0, 10)}
          </p>
          <br />
          <div dangerouslySetInnerHTML={{ __html: blogPost.post }} />
        </div>
      ) : null}
    </div>
  );
}

export default BlogPost;
