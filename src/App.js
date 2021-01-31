import logo from './logo.svg';
import './App.css';
import Home from "./Component/Home/Home"
import Gladiators from "./Component/Gladiator/Gladiator"
import Weapons from "./Component/Gladiator/Weapons"
import React, { useState } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

function App() {
  const [UserweaponSelect, setUserWeapon] = useState(0);
  const [UserWarrior, setUserWarrior] = useState();
  const [Results, setResults] = useState("NO FIGHT YET");
  
  function Fight(){
    let RandomWeapon = Math.floor(Math.random() * 3);
    if (RandomWeapon == UserweaponSelect){
      setResults("Equal")
    }  else if (RandomWeapon < UserweaponSelect){
      setResults(`${UserWarrior} wins!`)
    } 
    else {
      setResults(`${UserWarrior} lost!`)
    }
  }
  return (
    <div className="full-width">
      {UserweaponSelect}
      {UserWarrior}
    <h1>Weapons</h1>
    <Weapons setUserWeapon={setUserWeapon}></Weapons>
    <h1>WARRIOR</h1>
    <Gladiators setUserWarrior={setUserWarrior}></Gladiators>
    <h1>FIGHT!</h1>
    <p>  <button onClick={Fight}> FIGHT</button> </p>
   <h1>{Results}</h1>
    


    <Route path="/" exact component={Home} />
      </div>
  );
}

export default App;
