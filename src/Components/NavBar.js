import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar mainContainer">
      <div className="title">
        <h1>personal blog</h1>
      </div>
      <div className="link">
        <Link to="/">home</Link>
        <Link to="/create">blogs</Link>
      </div>
    </nav>
  );
};

export default NavBar;
