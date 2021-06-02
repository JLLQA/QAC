import HomePage from "./Components/Homepage/HomePage"
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Homepage from "./Components/Homepage/HomePage"
import ListingPage from "./Components/Listings/ListingPage"


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
        </Switch>
      </Router>
    </>
  );
}

export default App;