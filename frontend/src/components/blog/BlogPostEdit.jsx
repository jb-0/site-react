import React, { useState, useEffect, useContext } from 'react';
import BlogPostForm from './BlogPostForm';
import '../../styles/Forms.css';
import {UserContext} from '../../context/UserContext';

function BlogPostEdit(props) {
  const { userData, setUserData } = useContext(UserContext);
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
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const url = `http://localhost:4000/api/blog/edit/${props.match.params.id}`;

    const rawResponse = await fetch(url, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': userData.token,
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
