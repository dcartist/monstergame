import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
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
            
            warriors.push(<div className="flex flex-col items-center p-3 justify-center shadow-lg m-4"><img src={process.env.PUBLIC_URL + `/monsters/${i}.png`} className="w-32"/> 
            <p><Link to="/weapons"><button className="border br-black p-2 bg-black text-white" onClick={() =>this.props.setUserWarrior(i)}>Monster {i}</button></Link></p>
            </div>)
          }
          return warriors
    }

    render() {

        return (
        <div>
            <h1 className="text-4xl font-light text-center"> SELECT YOUR MONSTER WARROR</h1>
            <div className="grid grid-cols-5">
           {this.warriorsCreate()}
           </div>

         </div>
        )
    }
}
