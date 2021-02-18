import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="lists">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog_preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <div className="blog_id">author id : {blog.id}</div>
            <div className="blog_name">author name : {blog.name}</div>
          </Link>
          {/*<button onClick={() => handleDelete(blog.id)}>delete</button>*/}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
