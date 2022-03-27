import React, { Component } from "react";

class Cash extends Component {
  render() {
    return (
      <button type="button" className="btn btn-outline-success m-2">
        Cash
        <span className="badge rounded-pill bg-warning m-1">
          {" $" + this.props.cash}
        </span>
      </button>
    );
  }
}

export default Cash;
