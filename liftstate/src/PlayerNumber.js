import React, { Component } from 'react';
import './App.css';

class PlayerNumber extends Component{
    constructor(props){
        super(props);
        this.state={wins: 0};
    }
    //prints and logs number of clicks for both players as well as increasing the number from 0
    buttonClicked=(e)=>{

        this.setState({wins: this.state.wins+1});
        console.log(this.state.wins);
        this.props.justClick(e)
    };


    render(){
        //Renders and returns players, clicks, and buttons
        return(

            <div>
                <h2>Player {this.props.thisPlayer} </h2>
                <h2>Button Clicks: {this.state.wins}</h2>
                <button onClick={this.buttonClicked}>Press Me</button>
            </div>
        );
    }
}

export default PlayerNumber;