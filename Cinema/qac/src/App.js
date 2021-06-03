import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Homepage from "./Components/Homepage/HomePage"
import ListingPage from "./Components/Listings/ListingPage"
import ListingDetails from "./Components/Listings/ListingDetails/ListingDetails"
import OpeningTimes from  "./Components/OpeningTimes/OpeningTimes"
import Places from "./Components/Places/Places";
import GettingThere from "./Components/GettingThere/GettingThere";
import Discussion from "./Components/Discussion/Discussion";
import ExtraDetails from "./Components/Discussion/DiscussionComponents/ExtraDetails";
import Contact from "./Components/Contact/Contact";

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
          <Route path="/moviedetails/:id">
            <ListingDetails/>
          </Route>
          <Route exact path="/openings">
            <OpeningTimes />
          </Route>
          <Route exact path="/places">
            <Places />
          </Route>
          <Route exact path="/gettingthere">
            <GettingThere/>
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/discussion">
            <Discussion/>
          </Route>
          <Route exact path="/discussion/movie/:id">
            <ExtraDetails/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;