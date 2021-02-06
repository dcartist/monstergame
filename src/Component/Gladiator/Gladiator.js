import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import "../AnimationCheat/Animation.css"
export default class Gladiator extends Component {
    constructor(props){
        super(props)
        this.state={
            number:10
        }
    }
    
    warriorsCreate = () => {
        let warriors = []
        for (let i = 0; i < 10; i++) {
            
            warriors.push( <Link to="/weapons"><div className="flex flex-col items-center p-3 justify-center shadow-lg m-4 border bigEntrance">
                <img src={process.env.PUBLIC_URL + `/monsters/${i}.png`} alt={`Monster ${i}`} className="w-48"/> 
            <p>
                <Link to="/weapons">
                    <button className="border br-black p-2 bg-black text-white" onClick={() =>this.props.selectFighter(i)}>
                    Monster {i}
                    </button></Link>
            </p>
            </div></Link>)
          }
          return warriors
    }

    render() {

        return (
        <div>
            
            <h1 className="text-4xl font-light text-center"> SELECT YOUR MONSTER WARROR</h1>
            <div className="flex flex-wrap">
           {this.warriorsCreate()}
           </div>

         </div>
        )
    }
}
