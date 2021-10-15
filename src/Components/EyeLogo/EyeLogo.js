import React from "react";

import "./EyeLogo.scss";

export default function EyeLogo() {
  return (
    <svg
      className="eye-logo"
      width="120"
      height="100"
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Seen">
        <g id="Ellipse 9" filter="url(#filter0_d_15:19)">
          <ellipse cx="60.5" cy="51" rx="55.5" ry="31" fill="black" />
        </g>
        <ellipse
          id="Ellipse 10"
          cx="62"
          cy="51"
          rx="20"
          ry="31"
          fill="#FB0303"
        />
        <ellipse
          id="Ellipse 11"
          cx="62"
          cy="50.5"
          rx="10"
          ry="9.5"
          fill="black"
        />
        <ellipse
          id="Ellipse 12"
          cx="62.5"
          cy="47"
          rx="2.5"
          ry="3"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_15:19"
          x="1"
          y="20"
          width="119"
          height="70"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15:19"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15:19"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
