import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div className="display">
        {this.props.display}
      </div>
    )
  }
}

export default Display;
