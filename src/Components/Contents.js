import { useState } from "react";

const Contents = () => {
  const info = [
    { id: 1, name: "jimmy" },
    { id: 2, name: "sendo" },
    { id: 3, name: "joe" },
    { id: 4, name: "kavin" },
  ];

  // REACT HOOK
  const [blogs, setBlogs] = useState(info);

  return (
    <div className="contents">
      <h1>Blogs</h1>
      <div className="lists">
        {blogs.map((blog) => (
          <div className="blog_preview" key={blog.id}>
            <div className="blog_id">author id : {blog.id}</div>
            <div className="blog_name">author name : {blog.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contents;
