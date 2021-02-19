import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  const [name, setName] = useState("");
  const [isPending, setPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const createBlog = { title, blog, name };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(createBlog),
    }).then(() => {
      history.push("/");
      setPending(false);
    });

    setTitle("");
    setBlog("");
    setName("");
    setPending(true);
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
            placeholder="ENTER BLOG"
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
            placeholder="ENTER AUTHOR NAME"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        {!isPending && <input type="submit" value="SUBMIT" />}
        {isPending && <input type="submit" value="SUBMITING....." disabled />}
      </form>
    </div>
  );
};

export default Create;
