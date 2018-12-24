import React from "react";

class Keyboard extends React.Component {
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
              <td>
                <button type="button">CE</button>
              </td>
              <td>
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
