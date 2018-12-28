import React from "react";
import Keyboard from './Keyboard';
import Display from './Display';

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <Display display={this.props.display} />
        <br />
        <Keyboard addToDisplay={this.props.addToDisplay}
                  clear={this.props.clear}
                  calculate={this.props.calculate} />
      </div>
    )
  }
}

export default Calculator;
