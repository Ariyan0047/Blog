import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Contents = () => {
  // REACT HOOK
  const [blogs, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8080/blogs")
        .then((resource) => resource.json())
        .then((data) => setBlogs(data), setPending(false));
    }, 4000);
  }, []);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="contents">
      <h1>Blogs</h1>
      {isPending && <h1>loading...........</h1>}
      {blogs && (
        <BlogList blogs={blogs} title="all blogs" handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Contents;
