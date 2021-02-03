import React from 'react';

function Results (props) {
    
    if(props.Winner){
        console.log(props.Winner)
        return (
            <div>
                Results:
                USER WINS
                <p>{props.UserWarrior}</p>
                <p> {props.UserweaponSelect}</p>
                <p> Score: {props.score}</p>
                
                <p> <button onClick={props.fight} className="p-3 border-black border"> fight again</button></p>
                <p> <button onClick={props.reset} className="p-3 border-black border"> Clear</button></p>
               
                
            </div>
        );
    } else{
        return (
            <div>
                Results
                USER LOOSES!
                <p>{props.UserWarrior}</p>
                <p> {props.UserweaponSelect}</p>
                <p> Score: {props.score}</p>
                <p> Winner results: {props.Winner}</p>
                <p> <button onClick={props.fight} className="p-3 border-black border"> fight again</button></p>
                <p> <button onClick={props.reset} className="p-3 border-black border"> Clear</button></p>
            </div>
        );
    }
    
}

export default Results;