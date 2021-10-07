import React, { Component } from "react";

import { animated } from "@react-spring/web";

import "../NavBarExtended/NavBarExtended.scss";

export default class NavbarAnimatedFlex extends Component {
  render() {
    const { horizontal, number, title } = this.props;
    return (
      <animated.div
        className="animated__flex"
        style={{
          marginLeft: "6rem",
          display: "flex",
          gap: "1rem",
          ...horizontal,
        }}
      >
        <div className="animated__number">{number}</div>
        <h2 className="animated__option">{title}</h2>
      </animated.div>
    );
  }
}
