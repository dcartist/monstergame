import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/monster">Play!</Link></li>
                    <li><Link to="/info">Info</Link></li>
                </ul>


            </div>
        );
    }
}

export default Navigation;