import "./App.css";

// COMPONENT FUNCTION
const App = () => {
  const title = "personal blog";
  const score = 20;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{score === 50 ? "PASSED" : "FAILED"}</p>
        <a href={link}>GOOGLE</a>
      </div>
    </div>
  );
};

// BOOLEAN AND OBJECTS CAN NOT BE OUTPUT THROUGH JSX DYNAMICALLY

// EXPORTING COMPONENT FUNCTION
export default App;
