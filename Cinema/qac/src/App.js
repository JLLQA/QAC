import HomePage from "./Components/Homepage/HomePage"
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Homepage from "./Components/Homepage/HomePage"
import Listings from "./Components/Listings/Listings"
import OpeningTimes from  "./Components/OpeningTimes/OpeningTimes"
import GettingTherex from "./Components/GettingThere/GettingTherex";
 

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
          <Route exact path="/openings">
            <OpeningTimes />
          </Route>
          <Route exact path="/gettingthere">
            <GettingTherex/>
          </Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;