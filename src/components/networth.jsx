import React, { Component } from "react";

class NetWorth extends Component {
  render() {
    return (
      <button type="button" className="btn btn-outline-success ">
        Net Worth
        <span className="badge rounded-pill bg-warning m-1">
          {" $" + this.props.netWorth}
        </span>
      </button>
    );
  }
}

export default NetWorth;
