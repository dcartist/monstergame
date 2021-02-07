import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [intro, setIntro] = useState(<div className="h-20"></div>)
    useEffect(() => {
        console.log('I hope this works');
        setTimeout(() => {
           setIntro(<div className="h-20"><Link to="/monster"><button>Enter the Arena</button></Link></div>)
        }, 1400)
        
      }, []);

    return (
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl font-thin fadeIn">Monsters Arena</h1>
        <p>{intro}</p>
        <div className="flex flex-wrap MonsterIntro">  
<img src={process.env.PUBLIC_URL + `/monsters/1.svg`} alt="Monsters" className="hatch"/> 
<img src={process.env.PUBLIC_URL + `/monsters/2.svg`} alt="Monsters" className="hatch"/> 
<img src={process.env.PUBLIC_URL + `/monsters/4.svg`} alt="Monsters" className="hatch"/> 
<img src={process.env.PUBLIC_URL + `/monsters/3.svg`} alt="Monsters" className="hatch"/> 
</div>
<div className="flex flex-wrap MonsterIntroMobile">  
<img src={process.env.PUBLIC_URL + `/monsters/1.svg`} alt="Monsters" className="hatch MonsterImage"/> 
</div>
            
        </div>
    )
}

export default Home
