import React, { Component } from 'react';
import '../css/App.css';
import Calculator from './Calculator'

class App extends Component {
  state = {
    display: ""
  };

  calculate = () => {
    const previousState = { ...this.state };
    const display = previousState.display;
    let result = "";

    try {
      result = String(eval(display));
    } catch (e){
      alert('Are you kidding with me?');
      result = "";
    }

    this.setState({
      display: result
    });
  }

  addToDisplay = (input) => {
    const previousState = { ...this.state };
    const display = previousState.display;

    // Handling zeros
    if (input === "0" && (
        display.charAt(display.length-1) === "" || display.charAt(display.length-1) === "+" ||
        display.charAt(display.length-1) === "-" || display.charAt(display.length-1) === "/" ||
        display.charAt(display.length-1) === "*")){
          return;
    }

    this.setState({
      display: display.concat(input)
    });
  }

  clear = () => {
    this.setState({
      display: ""
    });
  }

  render() {
    return (
        <Calculator addToDisplay={this.addToDisplay}
                    clear={this.clear}
                    calculate={this.calculate}
                    display={this.state.display}/>
    );
  }
}

export default App;
