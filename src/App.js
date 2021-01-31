import logo from './logo.svg';
import './App.css';
import Home from "./Component/Home/Home"
import Gladiators from "./Component/Gladiator/Gladiator"
import Weapons from "./Component/Gladiator/Weapons"
import React, { useState } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

function App() {
  const [UserweaponSelect, setUserWeapon] = useState(0);

  return (
    <div className="full-width">
      {UserweaponSelect}
      <Weapons setUserWeapon={setUserWeapon}></Weapons>

    <Route path="/" exact component={Home} />
    <Route path="/gladiator" exact component={Gladiators} />
      </div>
  );
}

export default App;
