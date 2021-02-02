import './App.css';
import Home from "./Component/Home/Home"
import Gladiators from "./Component/Gladiator/Gladiator"
import About from "./Component/About/About"
import Fight from "./Component/Gladiator/Fight"
import Rules from "./Component/Rules/Rules"
import Error404 from "./Error404"
import Weapons from "./Component/Gladiator/Weapons"
import Navigation from "./Component/Navigation/Navigation"
import React, { useState, useEffect } from 'react';
import { Route, Switch} from 'react-router-dom';

function App() {
  const [UserweaponSelect, setUserWeapon] = useState(0);
  const [CompWeapon, setCompWeapon] = useState(0);
  const [CompWarrior, setCompWarrior] = useState(0);
  const [Score, setScore] = useState(0);
  const [UserWarrior, setUserWarrior] = useState();
  const [Results, setResults] = useState("NO FIGHT YET");

  useEffect(() => {
   
  });

  function selectFighter(fighter){
    setUserWarrior(fighter)
    let RandomWarrior = Math.floor(Math.random() * 9);
    setCompWarrior(RandomWarrior)
    let RandomWeapon = Math.floor(Math.random() * 3)+1;
    setCompWeapon(RandomWeapon)
  }

  function fight(){
    switch(UserweaponSelect){
      case CompWeapon:
        setResults("Equal")
        break;
      case 3:
        if (CompWeapon === 1){
            setResults(`${UserWarrior} lost!`)
          } else {
            setResults(`${UserWarrior} won!`)
            setScore(Score + 1)
          }
        break;
      case 1:
        if (CompWeapon === 3){
            setResults(`${UserWarrior} Wins!`)
            setScore(Score + 1)
          } else {
            setResults(`${UserWarrior} lost!`)
          }
        break;
      default:
        if (CompWeapon === 3){
          setResults(`${UserWarrior} lost!`)
        } else {
          setResults(`${UserWarrior} win!`)
          setScore(Score + 1)
        }
    }
  }
  return (
    <div className="full-width">
          <Navigation />
   
    {/* Score: 
    <div className="flex items-center justify-center rounded-full bg-black text-white shadow-xl w-14 h-14">{Score}</div>
    <p>  <button onClick={Fight} className="p-3 border-black border"> FIGHT</button> </p>  */}
  
<Switch>

        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/rules"><Rules /></Route>
        <Route exact path="/gladiator"> <Gladiators selectFighter={selectFighter}></Gladiators></Route>
        <Route exact path="/fight"> <Fight fight={fight} Results={Results} CompWarrior={CompWarrior} CompWeapon={CompWeapon} UserWarrior={UserWarrior} UserweaponSelect={UserweaponSelect}></Fight></Route>
        <Route exact path="/weapons"> <Weapons setUserWeapon={setUserWeapon}></Weapons></Route>
        <Route component={Error404}></Route>
          </Switch>
      </div>
  );
}

export default App;
