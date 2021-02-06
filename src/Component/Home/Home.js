import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [intro, setIntro] = useState(<div></div>)



    useEffect(() => {
        console.log('I hope this works');
        setTimeout(() => {
           setIntro(<div><Link to="/monsters"></Link></div>)
        }, 2400)
        
      }, []);

    return (
        <div className="flex flex-col h-96 items-center justify-center">
        <h1 className="text-7xl font-thin fadeIn">Monsters Arena</h1>
        <div className="flex w-full">  
<img src={process.env.PUBLIC_URL + `/monsters/1.svg`} alt="Monsters" className="w-3/12 hatch"/> 
<img src={process.env.PUBLIC_URL + `/monsters/2.svg`} alt="Monsters" className="w-3/12 hatch"/> 
<img src={process.env.PUBLIC_URL + `/monsters/4.svg`} alt="Monsters" className="w-3/12 hatch"/> 
<img src={process.env.PUBLIC_URL + `/monsters/3.svg`} alt="Monsters" className="w-3/12 hatch"/> </div>
            
        </div>
    )
}

export default Home
