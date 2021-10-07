import React, { Component } from "react";

import "./SideTitle.scss";

export default class SideTitle extends Component {
  render() {
    const { title, keyword, side } = this.props;
    return (
      <h1 className={side === "left" ? "sidetitle__left" : "sidetitle__right"}>
        <span>{keyword}</span>
        {` ${title}`}
      </h1>
    );
  }
}
