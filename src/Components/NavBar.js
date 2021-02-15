const NavBar = () => {
  return (
    <nav className="navbar mainContainer">
      <div className="title">
        <h1>personal blog</h1>
      </div>
      <div className="link">
        <a href="/">home</a>
        <a href="/create">blogs</a>
      </div>
    </nav>
  );
};

export default NavBar;
