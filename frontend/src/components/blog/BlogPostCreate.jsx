import React, { useContext, useState } from 'react';
import BlogPostForm from './BlogPostForm';
import '../../styles/Forms.css';
import UserContext from '../../context/UserContext';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from '../user/Login';

function BlogPostCreate() {
  const [blogPost, setBlogPost] = useState({
    title: '',
    author: '',
    post: '',
    created_date: new Date(),
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const rawResponse = await fetch('/api/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogPost),
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
    <UserContext.Consumer>
      {(context) => {
        if (context.userData.user) {
          return (
            <div className="blog-post-create">
              <h1>New blog post</h1>
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

export default BlogPostCreate;
