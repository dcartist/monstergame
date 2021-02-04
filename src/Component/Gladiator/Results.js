import React from 'react';
import { Link } from 'react-router-dom';

function Results (props) {
    
    return (
        <div className="flex flex-row justify-center items-center flex-col">
            Results:
            
            <h1 className="text-7xl text-red-700 font-black animate expandOpen"> You {props.Winner} </h1>
           <p>{props.Fighttimes}</p>
            
            <p> Score: {props.Score}</p>
            <div className="flex flex-row"><div><img src={process.env.PUBLIC_URL + `/weapons/${props.CompWeapon}.png`} alt={`weapon`} className="h-48"/> </div>
             <div><img src={process.env.PUBLIC_URL + `/monsters/${props.CompWarrior}.png`} alt={`Paper`} className="h-48"/> </div></div>
            {/* <Link to="/weapons"><button className="border br-black p-2 bg-black text-white" onClick={props.selectRandomWarrior}> Next Opponent</button></Link> */}
            <p>  <Link to="/gladiator"><button onClick={props.reset} className="p-3 border-black border">  Fight Again! </button></Link></p>
           
            
        </div>
    );
    
}

export default Results;