import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

function Fight(props) {
  
  return(
    <div className="p-5 flex  justify-center justify-items-center items-center">
      <div className="flex flex-row justify-center items-center">
     
      
      <div className="slideLeft flex flex-col"> 
      <div className="MonsterTitle items-center justify-center"> <p className="text-5xl p-4 text-center">YOU</p>  </div>
      <img src={process.env.PUBLIC_URL + `/monsters/${props.UserWarrior}.png`} alt={`Monster`} className="w-9/12 MonsterImage"/> 
      </div>

      <div className="text-center flex-grow"><h1 className="text-7xl p-14">VS.</h1> <p>  <Link to="/results"><button onClick={props.fight} className="p-3 border-black border w-40 text-2xl shadow-xl"> FIGHT</button></Link> </p> </div>
     

     
      <div className="slideRight flex flex-col justify-center">
      <div className="MonsterTitle items-center"> <p className="text-5xl p-4 text-center">COMPUTER</p>  </div>
      <img src={process.env.PUBLIC_URL + `/monsters/${props.CompWarrior}.png`} alt={`Monster`} className="w-9/12 MonsterImage"/> 

        </div>
      </div>
      
      
    </div>
  )
   
  }

  export default Fight;