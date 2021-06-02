import React, { Component } from 'react';
import { NavItems } from './NavItems';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Listing from '../Listings/Listings'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <>
                <nav className="navbar-items">
                    <a className="navbar-title" href="#home">QACinemas</a>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        <Router>
                            <Switch>
                                {NavItems.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a className={item.cName} href={item.url}>
                                                {item.title}
                                            </a>
                                            <Route exact path={`/${item.url}`}>
                                                {`<${item.url}/>`}
                                            </Route>
                                        </li>
                                    )
                                })}
                            </Switch>
                        </Router>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Navbar;