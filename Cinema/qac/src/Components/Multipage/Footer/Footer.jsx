import React, { useState } from "react";
import { FooterItems } from "./FooterItems";
import { Link } from "react-router-dom";

const Footer = () => {
    const [clicked, setClicked] = useState(false);

    let handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div id="footer">
            <nav className="navbar-items">
                <h6>copyright QACinemas 2021</h6>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {FooterItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )

}

export default Footer;