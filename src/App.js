import Error from "./Components/Error";
import NavBar from "./Components/NavBar";
import Create from "./Components/Create";
import Contents from "./Components/Contents";
import BlogDetails from "./Components/BlogDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENT FUNCTION
const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Contents />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

// BOOLEAN AND OBJECTS CAN NOT BE OUTPUT THROUGH JSX DYNAMICALLY

// EXPORTING COMPONENT FUNCTION
export default App;
