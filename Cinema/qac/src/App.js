import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Homepage from "./Components/Homepage/HomePage"
import ListingPage from "./Components/Listings/ListingPage"
import ListingDetails from "./Components/Listings/ListingDetails"
import OpeningTimes from  "./Components/OpeningTimes/OpeningTimes"
 

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/listings">
            <ListingPage />
          </Route>
          <Route path="/moviedetails/">
            <ListingDetails/>
          </Route>
          <Route exact path="/openings">
            <OpeningTimes />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;