import React, { useState } from "react";
import { NavItems } from "./NavItems";

const Navbar2 = () => {
    const [clicked, setClicked] = useState(false);

    let handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <nav className="navbar-items">
            <a className="navbar-title" href="#home">QACinemas</a>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {NavItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>           
        </nav>
    )

}

export default Navbar2;