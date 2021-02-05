import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function Results (props) {
    const [showResults, setshowResults] = useState(<Fade  big top cascade><div><h2 className="fadeIn expandOpen text-5xl p-3">Rock</h2><h2 className="fadeIn expandOpen text-5xl p-3">Paper</h2><h2 className="fadeIn expandOpen text-5xl p-3">Scissors</h2><h2 className="fadeIn expandOpen text-5xl p-3">Shoot!</h2></div></Fade>)

    useEffect(() => {
        console.log('I hope this works');
        setTimeout(() => {
            setshowResults(    <div className="flex flex-row justify-center items-center flex-col">
            <h1 className="text-7xl text-red-700 font-black animate expandOpen "> You {props.Winner} </h1>
           <p>{props.Fighttimes}</p>
            
            <p> Score: {props.Score}</p>
            <div className="flex flex-row"><div><img src={process.env.PUBLIC_URL + `/weapons/${props.CompWeapon}.png`} alt={`weapon`} className="h-48"/> </div>
             <div><img src={process.env.PUBLIC_URL + `/monsters/${props.CompWarrior}.png`} alt={`Paper`} className="h-48"/> </div></div>
            {/* <Link to="/weapons"><button className="border br-black p-2 bg-black text-white" onClick={props.selectRandomWarrior}> Next Opponent</button></Link> */}
            <p>  <Link to="/gladiator"><button onClick={props.reset} className="p-3 border-black border">  Fight Again! </button></Link></p>
        </div>);
        }, 2200)
        
      }, []);
    return (
        <div className="flex flex-row justify-center items-center flex-col">
           {showResults}
        </div>
    );
    
}

export default Results;