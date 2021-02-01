import logo from './logo.svg';
import './App.css';
import Home from "./Component/Home/Home"
import Gladiators from "./Component/Gladiator/Gladiator"
import About from "./Component/About/About"
import Weapons from "./Component/Gladiator/Weapons"
import Navigation from "./Component/Navigation/Navigation"
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
          <Navigation />
   
    {/* <p>  <button onClick={Fight}> FIGHT</button> </p>  */}


        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/gladiator"> <Gladiators setUserWarrior={setUserWarrior}></Gladiators></Route>
        <Route exact path="/weapons"> <Weapons setUserWeapon={setUserWeapon}></Weapons></Route>
      </div>
  );
}

export default App;
