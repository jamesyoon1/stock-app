import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import StockCount from "./stockcount";

class Button extends Component {
  render() {
    return (
      <div>
        <Container>

          <Row className="justify-content-center">
            <Col className="col-4"><button
              onClick={() => this.props.onSell()}
              className={this.getButtonClasses("sell")}
            >
              SELL
            </button>
              <StockCount stockCount={this.props.stockCount} />
              <button
                onClick={() => this.props.onBuy()}
                className={this.getButtonClasses("buy")}
              >
                BUY
              </button></Col>
          </Row>
        </Container>

        <Container >
          <Row className="justify-content-center">
          <Col className="col-3">
           <button
              onClick={() => this.props.onStart()}
              className={this.getButtonClasses("start")}
            >
              Start Game
            </button>
                 <button
              onClick={() => this.props.onPause()}
              className={this.getButtonClasses("pause")}
            >
              Pause
            </button>
            </Col>
          </Row>

        </Container>

      </div>
    );
  }

  getButtonClasses(option) {
    let classes = "";
    if (option == "sell") {
      classes = "btn btn-danger btn-lg";
      if (this.props.stockCount <= 0) classes += " disabled";
    } else if (option == "buy") {
      classes = "btn btn-primary btn-lg";
      if (this.props.stockPrice > this.props.cash) classes += " disabled";
    } else if (option == "pause") {
      classes = "btn btn-warning btn-md";
    } else {
      classes = "btn btn-success btn-md m-2";
    }

    return classes;
  }
}

export default Button;
