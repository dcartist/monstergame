import React, { Component } from 'react'

export default class Gladiator extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
        <div>
            <p><button onClick={() =>this.props.setUserWarrior("Jack")}>Jack</button></p>
            <p><button onClick={() =>this.props.setUserWarrior("Bob Ross")}>Bob</button></p>
            <p><button onClick={() =>this.props.setUserWarrior("Gunter")}>Gunter</button></p>
         </div>
        )
    }
}
