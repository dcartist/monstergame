import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [intro, setIntro] = useState(<div></div>)
    useEffect(() => {
        console.log('I hope this works');
        setTimeout(() => {
           setIntro(<div className="fadeIn"><Link to="/monster" className="border br-black p-2 bg-black text-white"><button>Enter the Arena</button></Link></div>)
        }, 900)

      }, []);

    return (
        <div className="flex flex-col items-center justify-center flex-grow overflow-hidden m-0 p-0 homeSection">
        <div className="MonsterMain">
        <div><h1 className="text-7xl font-thin fadeIn">Monsters Arena</h1></div>
        <div><p className="p-5 MonsterButton">{intro}</p></div>

        </div>
        <div className="flex flex-wrap MonsterIntro">
<img src={process.env.PUBLIC_URL + `/monsters/1.svg`} alt="Monsters" className="hatch"/>
<img src={process.env.PUBLIC_URL + `/monsters/2.svg`} alt="Monsters" className="hatch"/>
<img src={process.env.PUBLIC_URL + `/monsters/4.svg`} alt="Monsters" className="hatch"/>
<img src={process.env.PUBLIC_URL + `/monsters/3.svg`} alt="Monsters" className="hatch"/>
</div>
<div className="MonsterIntroMobile">
<img src={process.env.PUBLIC_URL + `/monsters/1.svg`} alt="Monsters" className="hatch MonsterImage"/>
<h1 className="text-7xl font-thin fadeIn text-center">Monsters Arena</h1>
        <p className="p-5 MonsterButton text-center">{intro}</p>
</div>

        </div>

    )
}

export default Home
