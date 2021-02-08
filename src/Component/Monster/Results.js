import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Fade from 'react-reveal/Fade';

function Results (props) {
    const { width, height } = useWindowSize()
    const [showResults, setshowResults] = useState(<Fade big top cascade>
        <div className="flex justify-center flex-col flex-wrap">
        <h2 className="fadeIn text-5xl p-3 m-auto">Rock</h2>
        <hr style={{ color: 'red', backgroundColor: 'red', height: 4, width: 150}} className="slideDown m-auto"/>
        <h2 className="fadeIn expandOpen text-5xl p-3 m-auto">Paper</h2>
        <hr style={{ color: 'red', backgroundColor: 'red', height: 4, width: 150}} className="slideDown m-auto"/>
    <h2 className="fadeIn  text-5xl p-3 m-auto">Scissors</h2>
        <hr style={{ color: 'red', backgroundColor: 'red', height: 4, width: 150}} className="slideDown m-auto"/>
    <h2 className="fadeIn text-8xl font-black p-3 m-auto">Shoot!</h2>

    </div>
    </Fade>)
    useEffect(() => {
        console.log('I hope this works');
        setTimeout(() => {
            setshowResults(<div className="flex flex-row justify-center items-center flex-col">

                {props.Winner === "Won!!!!"? <Confetti width={width} height={height}/> : <div></div>}
            <h1 className="text-6xl text-red-500 font-black animate expandOpen ResultsHeader"> You {props.Winner} </h1>
            <p>{props.Details}</p>
            <p className="text-lg">Score: {props.Score} || Fights: {props.Fighttimes}</p>
            <p>  <Link to="/monster"><button onClick={props.reset} className="p-3 border-black border bg-black text-white FightAgain">  Fight Again! </button></Link></p>

           <div className="ResultsList">
           <div className="shadow-lg m-2">

      <div className="MonsterTitleResults items-center justify-center"> <p className="p-1 text-center">YOU</p>  </div>
            <div className="ResultsCardLeft">
            <img src={process.env.PUBLIC_URL + `/monsters/${props.UserWarrior}.png`} alt={`Monster`} className="ResultsMonster"/>
            <img src={process.env.PUBLIC_URL + `/weapons/${props.UserweaponSelect}.png`} alt={`Weapon`} className="ResultsWeapon"/>
                </div>
            </div>

           <div className="shadow-lg m-2">

      <div className="MonsterTitleResults items-center justify-center"> <p className="p-1 text-center">Computer</p>  </div>
            <div className="ResultsCardRight">
            <img src={process.env.PUBLIC_URL + `/weapons/${props.CompWeapon}.png`} alt={`Weapon`} className="ResultsWeapon"/>
            <img src={process.env.PUBLIC_URL + `/monsters/${props.CompWarrior}.png`} alt={`Monster`} className="ResultsMonster"/>

            </div>
            </div>
           </div>

        </div>);
        }, 2400)

      }, []);
    return (
        <div className="flex flex-row justify-center items-center flex-col">
           {showResults}
        </div>
    );

}

export default Results;