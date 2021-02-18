import React from "react";

const Create = () => {
  return (
    <div className="contents">
      <h1>create new blog</h1>
      <form action="">
        <div className="title">
          <label htmlFor="title">blog title:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="ENTER BLOG TITLE"
            required
          />
        </div>
        <div className="blog">
          <label htmlFor="title">blog:</label>
          <input
            type="text"
            name="blog"
            id="blog"
            placeholder="ENTER BLOG"
            required
          />
        </div>
        <div className="submit">
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
    </div>
  );
};

export default Create;
