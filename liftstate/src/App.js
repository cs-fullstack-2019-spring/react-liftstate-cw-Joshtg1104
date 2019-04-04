import React, { Component } from 'react';
import './App.css';
import PlayerNumber from "./PlayerNumber";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            click: "click",
        };
    }
    justClick=(e)=>{
       let playr1 = this.state.thisPlayer= '1';
       let playr2 = this.state.thisPlayer= '2';
       if(playr1){
           console.log("Player 1")
       }
       if(playr2){
           console.log("Player 2")
       }
    };
  render() {
    return (
      <div className="App">
          {/*passes PlayerNumber component through itself so it will show on the webpage*/}
          <PlayerNumber thisPlayer = '1' justClick={this.justClick}/>
          <PlayerNumber thisPlayer = '2' justClick={this.justClick}/>
          <h2>The Winner is: </h2>
      </div>
    );
  }
}

export default App;