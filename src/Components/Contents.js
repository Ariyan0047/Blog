import { useState } from "react";

const Contents = () => {
  const [name, setName] = useState("Ariyan");

  const btnClick = () => {
    setName("Zishan");
  };

  return (
    <div className="contents">
      <h1>Blogs</h1>
      <p>{name}</p>
      <button onClick={btnClick}>click</button>
    </div>
  );
};

export default Contents;
