import logo from './logo.svg';
import './App.css';
import Home from "./Component/Home/Home"
import Gladiators from "./Component/Gladiator/Gladiator"
import Weapons from "./Component/Gladiator/Weapons"
import React, { useState } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

function App() {
  const [UserweaponSelect, setUserWeapon] = useState(0);
  const [fightNumber, setFightNumber] = useState(0);
  const [UserWarrior, setUserWarrior] = useState();
  const [Results, setResults] = useState("NO FIGHT YET");
  
  function Fight(){
    let RandomWeapon = Math.floor(Math.random() * 3)+1;
    setFightNumber(RandomWeapon)
    switch(UserweaponSelect){
      case RandomWeapon:
        setResults("Equal")
        break;
      case 3:
        if (RandomWeapon == 1){
            setResults(`${UserWarrior} lost!`)
          } else {
            setResults(`${UserWarrior} won!`)
          }
        break;
      case 1:
        if (RandomWeapon == 3){
            setResults(`${UserWarrior} Wins!`)
          } else {
            setResults(`${UserWarrior} lost!`)
          }
        break;
      default:
        if (RandomWeapon == 3){
          setResults(`${UserWarrior} lost!`)
        } else {
          setResults(`${UserWarrior} win!`)
        }
    }
    // if (RandomWeapon == UserweaponSelect){
    //   setResults("Equal")
    // }  else if (RandomWeapon < UserweaponSelect){
    //   setResults(`${UserWarrior} wins!`)
    // } 
    // else {
    //   setResults(`${UserWarrior} lost!`)
    // }
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
   {fightNumber}
    


    <Route path="/" exact component={Home} />
      </div>
  );
}

export default App;
