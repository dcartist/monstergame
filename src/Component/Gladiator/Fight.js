import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

function Fight(props) {
  
  return(
    <div>
      <div className="flex flex-row justify-center items-center">
     
      {/* <div className="slideLeft"><img src={process.env.PUBLIC_URL + `/weapons/${props.UserweaponSelect}.png`} alt={`Paper`} className="w-9/12"/> </div> */}
      <div className="slideLeft"><img src={process.env.PUBLIC_URL + `/monsters/${props.UserWarrior}.png`} alt={`Paper`} className="w-9/12"/> </div>
      <div><h1 className="text-7xl p-14">VS.</h1></div>
      {/* <div className="slideRight"><img src={process.env.PUBLIC_URL + `/weapons/${props.CompWeapon}.png`} alt={`weapon`} className="w-9/12"/> </div> */}
      <div className="slideRight"><img src={process.env.PUBLIC_URL + `/monsters/${props.CompWarrior}.png`} alt={`Paper`} className="w-9/12"/> </div>
      </div>
       <p>  <Link to="/results"><button onClick={props.fight} className="p-3 border-black border"> FIGHT</button></Link> </p> 
      
    </div>
  )
   
  }

  export default Fight;