import React, { Component } from "react";

class StockCount extends Component {
  render() {
    return (
      <button type="button" className={this.getButtonClasses()}>
        You own{" "}
        <span className="badge bg-dark bg-lg">{this.props.stockCount}</span>
        {" " + this.checkPlural()}
      </button>
    );
  }

  checkPlural() {
    if (this.props.stockCount <= 1) return "stock";
    return "stocks";
  }

  getButtonClasses() {
    let classes = "btn ";
    if (this.props.stockCount <= 0) {
      classes += " btn-secondary";
    } else classes += " btn-success";

    return classes;
  }
}

export default StockCount;
