import React from "react";

class Keyboard extends React.Component {

  handleKeyPress = (event) => {
    var keyCode = event.which || event.keyCode;

    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)
        || keyCode === 106 || keyCode === 109 || keyCode === 111 || keyCode === 107) {
     this.props.addToDisplay(event.key);
    }

    if (keyCode === 13){
      this.props.calculate()
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <button type="button" onClick={() => this.props.addToDisplay(7)}>7</button>
              </td>
              <td>
                <button type="button" onClick={() => this.props.addToDisplay(8)}>8</button>
              </td>
              <td>
                <button type="button" onClick={() => this.props.addToDisplay(9)}>9</button>
              </td>
              <td>
                <button type="button" onClick={() => this.props.addToDisplay("*")}>*</button>
              </td>
            </tr>

            <tr>
              <td>
                <button type="button" onClick={() => this.props.addToDisplay(4)}>4</button>
              </td>
              <td>
                <button type="button" onClick={() => this.props.addToDisplay(5)}>5</button>
              </td>
              <td>
                <button type="button" onClick={() => this.props.addToDisplay(6)}>6</button>
              </td>
              <td>
                <button type="button" onClick={() => this.props.addToDisplay("/")}>/</button>
              </td>
            </tr>

            <tr>
              <td>
                <button type="button" onClick={() => this.props.addToDisplay(1)}>1</button>
              </td>
              <td>
                <button type="button" onClick={() => this.props.addToDisplay(2)}>2</button>
              </td>
              <td>
                <button type="button" onClick={() => this.props.addToDisplay(3)}>3</button>
              </td>
              <td>
                <button type="button" onClick={() => this.props.addToDisplay("-")}>-</button>
              </td>
            </tr>

            <tr>
              <td>
                <button type="button" onClick={() => this.props.addToDisplay(0)}>0</button>
              </td>
              <td colspan="2">
                <button type="button" onClick={() => this.props.clear()}>C</button>
              </td>
              <td>
                <button type="button" onClick={() => this.props.addToDisplay("+")}>+</button>
              </td>
            </tr>

            <tr>
              <td colSpan="4">
                <button type="button" onClick={() => this.props.calculate()}>=</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Keyboard;
