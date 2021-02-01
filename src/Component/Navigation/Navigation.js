import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
class Navigation extends Component {
    render() {
        return (
            <div className="flex flex-column space-x-10 p-3">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/gladiator">Gladiator</Link>
                <Link to="/weapons">Weapons</Link>
                <Link to="/rules">Rules</Link>
            </div>
        );
    }
}

export default Navigation;