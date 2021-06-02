import HomePage from "./Components/Homepage/HomePage"
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Homepage from "./Components/Homepage/HomePage"
import Listings from "./Components/Listings/Listings"


const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/listings">
            <Listings />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;