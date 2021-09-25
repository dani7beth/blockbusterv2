import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./Pages/Home.js";
import NotFound from "./Pages/404";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
