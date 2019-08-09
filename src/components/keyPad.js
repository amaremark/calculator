import React, { Component } from 'react'

 class KeyPad extends Component {

    buttonPressed = (e) => {
        this.props.buttonPressed(e.target.name);
    };
  render() {
    return (
     <div className="buttons">
        <button name="("  onClick={this.buttonPressed}>
          (
        </button>
        
        <button name="Clear"  onClick={this.buttonPressed}>
        አፅዳ
        </button>
       
        <button name="CE"  onClick={this.buttonPressed}>
        መልስ
      
        </button>
        <button name=")"  onClick={this.buttonPressed}>
           )
        </button>
       
        <button name="1"  onClick={this.buttonPressed}>
         አንድ
           
        </button>
       
        <button name="2" onClick={this.buttonPressed}>
        ሁለት
        </button>
        <button name="3" onClick={this.buttonPressed}>
        ሦስት
        </button>
         <button name="+" onClick={this.buttonPressed}>
           +
        </button>
     
        <button name="4" onClick={this.buttonPressed}>
        አራት
        </button>
       
        <button name="5" onClick={this.buttonPressed}>
        አምስት
        </button>
      
        <button name="6" onClick={this.buttonPressed}>
        ስድስት
        </button>
        
        <button name="-" onClick={this.buttonPressed}>
           -
        </button>
        
        <button name="7"onClick={this.buttonPressed}>
        ሰባት
        </button>

        <button name="8"onClick={this.buttonPressed}>
        ስምንት
        </button>
        <button name="9"onClick={this.buttonPressed}>
        ዘጠኝ
        </button>
        <button name="="onClick={this.buttonPressed}>
           =
        </button>

        <button name="0"  onClick={this.buttonPressed}>
        ዜሮ
           
        </button>
        <button name="*"onClick={this.buttonPressed}>
           *
        </button>
        <button name="/" onClick={this.buttonPressed}>
           /
        </button>
        <button name="."onClick={this.buttonPressed}>
           .
        </button>
        <button name="A"onClick={this.buttonPressed}>
           color
        </button>
     </div>
    );
  }
}
export default KeyPad;