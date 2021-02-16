import { useState } from "react";
import BlogList from "./BlogList";

const Contents = () => {
  const info = [
    { id: 1, name: "jimmy" },
    { id: 2, name: "sendo" },
    { id: 3, name: "joe" },
    { id: 4, name: "kavin" },
    { id: 5, name: "sendo" },
  ];

  // REACT HOOK
  const [blogs, setBlogs] = useState(info);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="contents">
      <h1>Blogs</h1>
      <BlogList blogs={blogs} title="all blogs" handleDelete={handleDelete} />
      {/*<BlogList blogs={blogs.filter((blog) => blog.name === "sendo")} title="sendo's blogs"/>*/}
    </div>
  );
};

export default Contents;
