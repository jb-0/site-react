import React from "react";

function BlogPostForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          onChange={props.handleUpdates}
          type="text"
          id="title"
          name="title"
          placeholder="Blog title.."
          className="text-input"
          value={props.blogPost.title}
        ></input>
        <br />
        <br />

        <label htmlFor="post">
          <span>Blog Post</span>
        </label>
        <br />
        <textarea
          onChange={props.handleUpdates}
          id="post"
          name="post"
          placeholder="Write something.."
          className="text-input"
          value={props.blogPost.post}
        ></textarea>
        <br />
        <br />

        <input type="submit" value="Submit" className="submit-button"></input>
      </form>
    </div>
  );
}

export default BlogPostForm;
