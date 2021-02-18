import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const createBlog = { title, blog, name };
    console.log(createBlog);
  };

  return (
    <div className="contents">
      <h1>create new blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <label htmlFor="title">blog title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            required
            placeholder="ENTER BLOG TITLE"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="blog">
          <label htmlFor="title">blog:</label>
          <textarea
            name="blog"
            id="blog"
            required
            value={blog}
            placeholder="ENTER AUTHOR NAME"
            onChange={(event) => setBlog(event.target.value)}
          ></textarea>
        </div>
        <div className="name">
          <label htmlFor="name">author name:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            placeholder="ENTER BLOG"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default Create;
