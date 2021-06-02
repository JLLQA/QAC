import { BrowserRouter as Router,Route,Switch } from "react-router-dom"
import Homepage from "../Homepage/HomePage"
import Listings from "../Listings/Listings"

const Navbar4 = () => {
    return(
        <>
        <h1>hello</h1>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route exact path ="/listings">
                    <Listings/>
                </Route>
                
            </Switch>
        </Router>
        </>
    )
}

export default Navbar4;