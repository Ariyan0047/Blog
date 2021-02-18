import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Contents = () => {
  const { blogs, error, isPending } = useFetch("http://localhost:8000/blogs");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className="contents">
      <h1>Blogs</h1>
      {isPending && <h1>loading...........</h1>}
      {error && <h1>{error}</h1>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="all blogs" /*handleDelete={handleDelete}*/
        />
      )}
    </div>
  );
};

export default Contents;
