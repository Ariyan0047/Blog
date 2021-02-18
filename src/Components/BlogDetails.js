import React from "react";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs: blog, isPending, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  return (
    <div className="contents">
      {isPending && <h1>loading...........</h1>}
      {error && <h1>{error}</h1>}
      {blog && (
        <div>
          <h2>written by : {blog.name}</h2>
          <p>blog : {blog.blog}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
