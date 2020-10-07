import React, { useState, useEffect } from 'react';
import BlogPostForm from './BlogPostForm';
import '../../styles/Forms.css';
import UserContext from '../../context/UserContext';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from '../user/Login';

function BlogPostEdit(props) {
  const [blogPost, setBlogPost] = useState({
    title: '',
    post: '',
  });

  async function fetchData() {
    const rawResponse = await fetch(`/api/blog/${props.match.params.id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
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
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogPost),
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
    <UserContext.Consumer>
      {(context) => {
        if (context.userData.user) {
          return (
            <div className="blog-post-edit">
              <h1>Edit blog post</h1>
              <BlogPostForm
                handleUpdates={handleUpdates}
                handleSubmit={handleSubmit}
                blogPost={blogPost}
              />
            </div>
          );
        }
      }}
    </UserContext.Consumer>
  );
}

export default BlogPostEdit;
