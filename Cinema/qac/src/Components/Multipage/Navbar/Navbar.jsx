import React, { useState } from "react";
import { NavItems } from "./NavItems";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    let handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <nav className="navbar-items">
            <a className="navbar-title" href="/">QACinemas</a>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {NavItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className ={item.cName} to={item.url}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>           
        </nav>
    )

}

export default Navbar;