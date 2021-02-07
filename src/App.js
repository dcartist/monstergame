import './App.css';
import Home from "./Component/Home/Home"
import Monsters from "./Component/Monster/Monsters"
import About from "./Component/About/About"
import Fight from "./Component/Monster/Fight"
import FinalResults from "./Component/Monster/Results"
import Rules from "./Component/Rules/Rules"
import Konami from "./Component/Konami/Konami"
import Error404 from "./Error404"
import Weapons from "./Component/Monster/Weapons"
import { Route, Switch} from 'react-router-dom';
import Navigation from "./Component/Navigation/Navigation"
import React, { useState } from 'react';
import "./Component/AnimationCheat/Animation.css"

function App() {
  const [UserweaponSelect, setUserWeapon] = useState(0);
  const [UserWarrior, setUserWarrior] = useState();
  const [CompWeapon, setCompWeapon] = useState(0);
  const [CompWarrior, setCompWarrior] = useState(0);
  const [Score, setScore] = useState(0);
  const [Fighttimes, setFighttimes] = useState(0);
  const [Winner, setWinner] = useState('');
  const [Details, setDetails] = useState('');
  const [Results, setResults] = useState("NO FIGHT YET");

  function selectFighter(fighter){
    setUserWarrior(fighter)
    let RandomWarrior = Math.floor(Math.random() * 9);
    setCompWarrior(RandomWarrior)
    let RandomWeapon = Math.floor(Math.random() * 3)+1;
    setCompWeapon(RandomWeapon)
  }

  function selectRandomWarrior(){
    let RandomWarrior = Math.floor(Math.random() * 9);
    setCompWarrior(RandomWarrior)
    let RandomWeapon = Math.floor(Math.random() * 3)+1;
    setCompWeapon(RandomWeapon)
  }
function reset(){
  setWinner()
  setResults("")
  setUserWeapon(0)
  setCompWeapon(0)
  setCompWarrior(0)
  setDetails()
  setUserWarrior()
}
  function fight(){
    setFighttimes(Fighttimes + 1)
    switch(UserweaponSelect){
      case (CompWeapon):
        setResults("Equal")
        setWinner('Tied!!!')
        setDetails(<h1>It's tied, you both lost!</h1>)
        break;
      case 3: //Scissors
        if (CompWeapon === 1){
            setResults(`${UserWarrior} Lost!!!!`)
            setWinner('Lost!!!')
            setDetails(<h1>Rock beats Scissors</h1>)
          } else {
            setResults(`${UserWarrior} won!`)
            setWinner('Won!!!!')
            setDetails(<h1>Scissors beats Paper</h1>)
            setScore(Score + 1)
          }
        break;
      case 1: //Rock
        if (CompWeapon === 3){
            setResults(`${UserWarrior} Won!!!!`)
            setWinner('Won!!!!')
            setScore(Score + 1)
            setDetails(<h1>Rock beats Scissors</h1>)
          } else {
            setResults(`${UserWarrior} Lost!!!!`)
            setWinner('Lost!!!')
            setDetails(<h1>Paper beats Rock</h1>)
          }
        break;
      default: //Paper
        if (CompWeapon === 3){
          setResults(`${UserWarrior} Lost!!!!`)
          setWinner('Lost!!!')
          setDetails(<h1>Scissors beats Paper</h1>)
        } else {
          setResults(`${UserWarrior} win!`)
          setWinner('Won!!!!')
          setScore(Score + 1)
          setDetails(<h1>Paper beats Rock</h1>)
        }
    }
  }
  return (
    <div className="m-0 p-0">
          <Navigation />
<Switch>

        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/konami"><Konami /></Route>
        <Route exact path="/rules"><Rules /></Route>
        <Route exact path="/monster"> <Monsters selectFighter={selectFighter}></Monsters></Route>
        <Route exact path="/fight"> <Fight fight={fight} Results={Results} CompWarrior={CompWarrior} CompWeapon={CompWeapon} UserWarrior={UserWarrior} UserweaponSelect={UserweaponSelect}></Fight></Route>
        <Route exact path="/weapons"> <Weapons setUserWeapon={setUserWeapon}></Weapons></Route>
        <Route exact path="/results"> <FinalResults CompWarrior={CompWarrior} CompWeapon={CompWeapon} UserWarrior={UserWarrior} UserweaponSelect={UserweaponSelect} Winner={Winner} Score={Score} selectRandomWarrior={selectRandomWarrior} Fighttimes={Fighttimes} reset={reset} Details={Details}></FinalResults></Route>
        <Route component={Error404}></Route>
          </Switch>
      </div>
  );
}

export default App;
