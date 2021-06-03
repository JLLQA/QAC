import {Link} from "react-router-dom";
const Nav = () => {
    return (

        <>
            <Link to="/">Home</Link>
            <Link to="/ListingPage">Listings</Link>
            <Link to="/Openings">Openings</Link>
            
        </>
    )

}

export default Nav;