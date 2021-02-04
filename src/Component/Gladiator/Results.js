import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
function Results (props) {
    
    return (
        <div>
            Results:
            <h1> USER {props.Winner} </h1>
           
            {props.Results}
            <p>{props.UserWarrior}</p>
            <p> {props.UserweaponSelect}</p>
            <p> Score: {props.Score}</p>
            <div className="flex flex-row"><div><img src={process.env.PUBLIC_URL + `/weapons/${props.CompWeapon}.png`} alt={`weapon`} className="h-48"/> </div>
             <div><img src={process.env.PUBLIC_URL + `/monsters/${props.CompWarrior}.png`} alt={`Paper`} className="h-48"/> </div></div>
            <Link to="/weapons"><button className="border br-black p-2 bg-black text-white" onClick={props.selectRandomWarrior}> Next Opponent</button></Link>
            <p>  <Link to="/gladiator"><button onClick={props.reset} className="p-3 border-black border">  Fight Again! </button></Link></p>
           
            
        </div>
    );
    
}

export default Results;