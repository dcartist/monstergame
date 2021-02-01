import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="flex flex-col h-96 items-center justify-center">
                <h1 className="text-7xl font-thin">Monsters Arena</h1>
                <div className="flex w-full">  <img src={process.env.PUBLIC_URL + `/monsters/1.svg`} className="w-3/12"/> 
   <img src={process.env.PUBLIC_URL + `/monsters/2.svg`} className="w-3/12"/> 
   <img src={process.env.PUBLIC_URL + `/monsters/4.svg`} className="w-3/12"/> 
   <img src={process.env.PUBLIC_URL + `/monsters/3.svg`} className="w-3/12"/> </div>
            </div>
        );
    }
}

export default Home;