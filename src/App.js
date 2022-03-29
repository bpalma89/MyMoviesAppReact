import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import MovieDetail from "./pages/MovieDetail";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
