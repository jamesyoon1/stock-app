import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-success">
          <div>
            <span className="navbar-brand m-4 h1">
              Stock Simulator
            </span>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
