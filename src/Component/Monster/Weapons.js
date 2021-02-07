import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

function Weapons(props) {

    return (
        <div> 
        <h1 className="text-4xl font-light text-center"> SELECT YOUR WEAPON</h1>
        <div className="MonsterWeapon">
            <Link to="/fight" onClick={() => props.setUserWeapon(2)}>
            <div className="flex flex-col items-center p-3 justify-center shadow-lg m-4 border bigEntrance MonsterWeaponBox">
                <img src={process.env.PUBLIC_URL + `/weapons/2.png`} alt={`Paper`} className="monsterWeaponImage" />
                <p><Link to="/fight">
                    <button className="border br-black p-2 bg-black text-white" onClick={() => props.setUserWeapon(2)}>Paper</button>
                    </Link></p>
            </div></Link>
            <Link to="/fight" onClick={() => props.setUserWeapon(3)}>
            <div className="flex flex-col items-center p-3 justify-center shadow-lg m-4 border bigEntrance MonsterWeaponBox">
                <img src={process.env.PUBLIC_URL + `/weapons/3.png`} alt={`Scissors`} className="monsterWeaponImage" />
                <p><Link to="/fight">
                    <button className="border br-black p-2 bg-black text-white" onClick={() => props.setUserWeapon(3)}>Scissors</button>
                    </Link></p>
            </div>
            </Link>
            <Link to="/fight" onClick={() => props.setUserWeapon(1)} >
            <div className="flex flex-col items-center p-3 justify-center shadow-lg m-4 border bigEntrance MonsterWeaponBox">
                <img src={process.env.PUBLIC_URL + `/weapons/1.png`} alt={`Rock`} className="monsterWeaponImage" />
                <p>
                    <Link to="/fight">
                    <button className="border br-black p-2 bg-black text-white" onClick={() => props.setUserWeapon(1)}>Rock</button>
                    </Link></p>
            </div>
            </Link>

            </div>
        </div>
    )
}

export default Weapons;