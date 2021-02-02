import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
function Weapons(props){
    
    return(
        <div className="flex flex-row w-full h-96 items-center">
            <div className="flex flex-col items-center p-3 justify-center shadow-lg m-4 border"><img src={process.env.PUBLIC_URL + `/weapons/2.png`} alt={`Paper`} className="w-1/2"/> 
            <p><Link to="/fight"><button className="border br-black p-2 bg-black text-white" onClick={() =>props.setUserWeapon(2)}>Paper</button></Link></p>
            </div>
            <div className="flex flex-col items-center p-3 justify-center shadow-lg m-4 border"><img src={process.env.PUBLIC_URL + `/weapons/3.png`} alt={`Scissors`} className="w-1/2"/> 
            <p><Link to="/fight"><button className="border br-black p-2 bg-black text-white" onClick={() =>props.setUserWeapon(3)}>Scissors</button></Link></p>
            </div>
            <div className="flex flex-col items-center p-3 justify-center shadow-lg m-4 border"><img src={process.env.PUBLIC_URL + `/weapons/1.png`} alt={`Rock`} className="w-1/2"/> 
            <p><Link to="/fight"><button className="border br-black p-2 bg-black text-white" onClick={() =>props.setUserWeapon(1)}>Rock</button></Link></p>
            </div>
            
        
        </div>
    )
}

export default Weapons;