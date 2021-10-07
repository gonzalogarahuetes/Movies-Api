import React, { Component } from "react";

import "../Navbar/Navbar.scss";

export default class NavbarMenu extends Component {
  constructor(props) {
    super(props);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
  }

  handleOpenMenu() {
    const { openMenu } = this.props;
    openMenu();
  }

  render() {
    const { isOpen } = this.props;
    return (
      <div className="navbar__menu" onClick={this.handleOpenMenu}>
        <svg
          className={isOpen ? "navbar__svg open" : "navbar__svg"}
          width="120"
          height="100"
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Stripes Menu">
            <g id="Stripes">
              <ellipse
                id="ellipse1"
                className={isOpen ? "navbar__ellipse open" : "navbar__ellipse"}
                cx="61"
                cy="21"
                rx="52"
                ry="6"
              />
              <ellipse
                id="ellipse2"
                className={isOpen ? "navbar__ellipse open" : "navbar__ellipse"}
                cx="61"
                cy="47"
                rx="52"
                ry="6"
              />
              <ellipse
                id="ellipse3"
                className={isOpen ? "navbar__ellipse open" : "navbar__ellipse"}
                cx="61"
                cy="74"
                rx="52"
                ry="6"
              />
            </g>
          </g>
        </svg>
        <span className={isOpen ? "navbar__span open" : "navbar__span"}>
          Menu
        </span>
      </div>
    );
  }
}
