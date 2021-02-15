import NavBar from "./Components/NavBar";
import Contents from "./Components/Contents";

// COMPONENT FUNCTION
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Contents />
    </div>
  );
};

// BOOLEAN AND OBJECTS CAN NOT BE OUTPUT THROUGH JSX DYNAMICALLY

// EXPORTING COMPONENT FUNCTION
export default App;
