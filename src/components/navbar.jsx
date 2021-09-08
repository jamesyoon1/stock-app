import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-warning">
          <div>
            <span className="navbar-brand mb-0 h1">
              &nbsp; Stonks Only Go Up
            </span>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
