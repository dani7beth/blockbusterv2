import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./Pages/Home.js";
import NotFound from "./Pages/404";
import Stores from "./Stores/Stores";
import Store from "./Stores/Store";
import Movies from "./Movies/Movies";
import Movie from "./Movies/Movie";
import NavBar from "./Components/NavBar";
import Actors from "./Actors/Actors";
import Actor from "./Actors/Actor";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stores" component={Stores} />
        <Route exact path="/stores/:id" component={Store} />
        <Route exact path="/stores/:id/movies" component={Movies} />
        <Route exact path="/stores/:store_id/movies/:id" component={Movie} />
        <Route exact path="/movies/:id/actors" component={Actors} />
        <Route exact path="/movies/:movie_id/actors/:id" component={Actor} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
