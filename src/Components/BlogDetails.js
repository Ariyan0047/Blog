import React from "react";
import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { blogs: blog, isPending, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="contents">
      {isPending && <h1>loading...........</h1>}
      {error && <h1>{error}</h1>}
      {blog && (
        <div>
          <h2>written by : {blog.name}</h2>
          <p>
            <b>blog:</b> {blog.blog}
          </p>
          <input type="submit" value="DELETE" onClick={handleDelete} />
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
