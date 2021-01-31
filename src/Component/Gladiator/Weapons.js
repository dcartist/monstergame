import React, { Component } from 'react';

function Weapons(props){
    return(
        <div>
            <p><button onClick={() =>props.setUserWeapon(2)}>2</button></p>
            <p><button onClick={() =>props.setUserWeapon(3)}>3</button></p>
            <p><button onClick={() =>props.setUserWeapon(1)}>1</button></p>
        
        </div>
    )
}

export default Weapons;