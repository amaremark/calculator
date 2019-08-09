import React, { Component } from 'react';
import './App.css';
import Output from './components/Output';
import KeyPad from './components/keyPad';

class App extends Component {
  state={
    result:''
  }
  buttonPressed = buttonName =>{
    if(buttonName === '='){
      this.calculate()
    } else if(buttonName === "Clear"){
      this.reset();
    }else if(buttonName === "A"){
     this.change();
    }
    else if(buttonName === "CE"){
      this.backspace()
    }else 
    this.setState({
      result:this.state.result + buttonName
    });
  };
 
  backspace = () =>{
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };
  reset = function (){
    this.setState({
      result: ""
    });
  }; 
  change = () => {
  this.setState({
  result: document.body.style.backgroundColor = "#33ccff"
  })
}  
calculate = () =>{
    try{
      this.setState({
        result: (eval(this.state.result) || "") + ""
    
   
   });
  } catch (e) {
   this.setState({
     result: "error"
   });
   }
  
  }

  render() {
    return (
     
      <div className="App">
       <h1> የሒሳብ ማስያ </h1>
      <div className="calc-body">
       <Output result={this.state.result} />
       <KeyPad buttonPressed={this.buttonPressed} />
       </div>
      </div>
    );
  }
}

export default App;
