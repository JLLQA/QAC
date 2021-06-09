import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './Components/Multipage/Navbar/Navbar';
import Homepage from "./Components/Homepage/HomePage"
import OpeningTimes from "./Components/OpeningTimes/OpeningTimes"
import ListingPage from "./Components/Listings/ListingPage"
import ListingDetails from "./Components/Listings/ListingDetails/ListingDetails"
import RatingPage from './Components/Review/RatingPage';
import NewReleases from './Components/NewReleases/NewReleases';
import Classification from './Components/Classification/Classification';
import Bookings from './Components/Bookings/Bookings';
import Screens from './Components/Bookings/BookingDetails/Screens/Screens'
import Payment from './Components/Bookings/BookingDetails/Payment/Payment';
import Places from "./Components/Places/Places";
import GettingThere from "./Components/GettingThere/GettingThere";
import About from './Components/About/About';
import Contact from "./Components/Contact/Contact";
import Discussion from "./Components/Discussion/Discussion";
import ExtraDetails from "./Components/Discussion/DiscussionComponents/ExtraDetails";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/openings">
            <OpeningTimes />
          </Route>
          <Route exact path="/listings">
            <ListingPage />
          </Route>
          <Route exact path="/moviedetails/:id">
            <ListingDetails />
          </Route>
          <Route exact path="/movie/review/:id">
            <RatingPage />
          </Route>
          <Route exact path="/classification">
            <Classification />
          </Route>
          <Route exact path="/newreleases">
            <NewReleases />
          </Route>
          <Route exact path="/bookings">
            <Bookings />
          </Route>
          <Route exact path="/screens">
            <Screens />
          </Route>
          <Route exact path="/checkout">
            <Payment />
          </Route>
          <Route exact path="/gettingthere">
            <GettingThere />
          </Route>
          <Route exact path="/places">
            <Places />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/discussion">
            <Discussion />
          </Route>
          <Route exact path="/topics/:title">
            <ExtraDetails />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;