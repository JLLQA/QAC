import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Homepage from "./Components/Homepage/HomePage"
import ListingPage from "./Components/Listings/ListingPage"
import ListingDetails from "./Components/Listings/ListingDetails/ListingDetails"
import Places from "./Components/Places/Places";
import GettingThere from "./Components/GettingThere/GettingThere";
import Discussion from "./Components/Discussion/Discussion";
import ExtraDetails from "./Components/Discussion/DiscussionComponents/ExtraDetails";
import Contact from "./Components/Contact/Contact";
import Bookings from './Components/Bookings/Bookings';
import Screens from './Components/Bookings/BookingDetails/Screens'
import Payment from './Components/Bookings/Payment';
import Classification from './Components/Classification/Classification';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />S
          </Route>
          <Route exact path="/openings">
            <OpeningTimes />
          </Route>
          <Route exact path="/listings">
            <ListingPage />
          </Route>
          <Route exact path="/moviedetails/:id">
            <ListingDetails/>
          </Route>
          <Route exact path="/bookings">
            <Bookings />
          </Route>
          <Route exact path="/screens">
            <Screens />
          </Route>
          <Route exact path="/payment">
            <Payment />
          </Route>
          <Route exact path="/gettingthere">
            <GettingThere/>
          </Route>
          <Route exact path="/places">
            <Places />
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
          <Route exact path="/classification">
            <Classification/>
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;