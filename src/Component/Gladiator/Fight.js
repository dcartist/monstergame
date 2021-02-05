import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

function Fight(props) {
  
  return(
    <div>
      <div className="flex flex-row justify-center items-center">
     
      
      <div className="slideLeft"><img src={process.env.PUBLIC_URL + `/monsters/${props.UserWarrior}.png`} alt={`Monster`} className="w-auto"/> </div>
      <div className="text-center w-7/12"><h1 className="text-7xl p-14">VS.</h1> <p>  <Link to="/results"><button onClick={props.fight} className="p-3 border-black border w-40 text-2xl shadow-xl"> FIGHT</button></Link> </p> </div>
     
      <div className="slideRight"><img src={process.env.PUBLIC_URL + `/monsters/${props.CompWarrior}.png`} alt={`Monster`} className="w-auto"/> </div>
      </div>
      
      
    </div>
  )
   
  }

  export default Fight;