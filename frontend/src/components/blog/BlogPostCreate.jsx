import React, { useContext, useEffect, useState } from 'react';
import BlogPostForm from './BlogPostForm';
import '../../styles/Forms.css';
import UserContext from '../../context/UserContext';

function BlogPostCreate() {
  const { userData, setUserData } = useContext(UserContext);
  const [blogPost, setBlogPost] = useState({
    title: '',
    author: '',
    post: '',
    created_date: new Date(),
  });

  async function handleSubmit(event) {
    event.preventDefault();

    setBlogPost((previousValues) => {
      return { ...previousValues, author: userData.user.displayName };
    });

    const rawResponse = await fetch('/api/blog/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': userData.token,
      },
      body: JSON.stringify(blogPost),
    });
    
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
