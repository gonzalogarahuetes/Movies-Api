import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./Logo.scss";

export default class Logo extends Component {
  render() {
    return (
      <Link to="/">
        <svg
          id="Logo"
          width="120"
          height="100"
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 1">
            <rect width="120" height="100" fill="transparent" />
            <g id="Rotating">
              <path
                id="Star1"
                d="M60 8L70.3276 37.0213H103.749L76.7105 54.9574L87.0381 83.9787L60 66.0426L32.9619 83.9787L43.2895 54.9574L16.2514 37.0213H49.6724L60 8Z"
                fill="#FB0303"
              />
              <circle id="Ellipse 1" cx="37.5" cy="77.5" r="1.5" fill="black" />
              <circle id="Ellipse 5" cx="95.5" cy="39.5" r="1.5" fill="black" />
              <circle id="Ellipse 2" cx="24.5" cy="39.5" r="1.5" fill="black" />
              <circle id="White_Point" cx="60" cy="15" r="2" fill="white" />
              <circle
                id="Ellipse 4"
                cx="82.0606"
                cy="77.0606"
                r="1.5"
                transform="rotate(-148.742 82.0606 77.0606)"
                fill="black"
              />
            </g>
            <ellipse
              id="Dark-Circle"
              cx="60"
              cy="50.5"
              rx="26"
              ry="27.5"
              fill="black"
            />
          </g>
        </svg>
      </Link>
    );
  }
}
