import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/monster">Monster</Link></li>
                    <li><Link to="/info">Info</Link></li>
                    {/* <li></li> */}
                </ul>



                {/* <Link to="/weapons">Weapons</Link>
                <Link to="/fight">Fight</Link> */}

            </div>
        );
    }
}

export default Navigation;