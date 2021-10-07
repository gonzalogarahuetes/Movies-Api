import React, { Component } from "react";

import "./Background.scss";

export default class Background extends Component {
  render() {
    const { isOpen } = this.props;
    return (
      <div
        className={isOpen ? "main_background open" : "main_background"}
      ></div>
    );
  }
}
