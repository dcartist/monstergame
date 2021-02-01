import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
function Weapons(props){
    return(
        <div>
            <p><Link to="/fight"><button onClick={() =>props.setUserWeapon(2)}>2</button></Link></p>
            <p><Link to="/fight"><button onClick={() =>props.setUserWeapon(3)}>3</button></Link></p>
            <p><Link to="/fight"><button onClick={() =>props.setUserWeapon(1)}>1</button></Link></p>
        
        </div>
    )
}

export default Weapons;