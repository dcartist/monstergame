import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

function Fight(props) {
  return(
    <div>
       <p>  <button onClick={props.Fight} className="p-3 border-black border"> FIGHT</button> </p> 
       {props.Results}
    </div>
  )
   
  }

  export default Fight;