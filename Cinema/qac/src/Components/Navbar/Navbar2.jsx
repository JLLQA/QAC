import React, { useState } from "react";
import { NavbarListItems } from "../Navbar/NavbarListItems";

const Navbar2 = () => {
    const [clicked, setClicked] = useState(false);

    handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <nav className="navbar-items">
            <a className="navbar-title" href="#home">QACinemas</a>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                <NavbarListItems/>
            </ul>
        </nav>
    )

}

export default Navbar2;