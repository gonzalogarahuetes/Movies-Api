import React from "react";

import { useSpring, useChain, animated, useSpringRef } from "@react-spring/web";

import "./NavBarExtended.scss";
import NavbarAnimatedFlex from "../NavbarAnimatedFlex/NavbarAnimatedFlex";

export default function NavBarExtended(props) {
  const { isOpen } = props;

  const springApi = useSpringRef();
  const vertical = useSpring({
    ref: springApi,
    height: isOpen ? "91.5vh" : "0vh",
    from: {
      height: "0vh",
    },
  });

  const transApi = useSpringRef();
  const horizontal = useSpring({
    ref: transApi,
    from: { x: -100, opacity: 0, display: "flex" },
    to: {
      x: isOpen ? 0 : -100,
      opacity: isOpen ? 1 : 0,
      display: isOpen ? "flex" : "none",
    },
  });

  useChain(isOpen ? [springApi, transApi] : [transApi, springApi], [
    0,
    isOpen ? 0.7 : 0.2,
  ]);

  return (
    <animated.div
      style={{
        backgroundColor: "rgba(94, 1, 1, 0.6)",
        ...vertical,
      }}
    >
      <NavbarAnimatedFlex
        horizontal={horizontal}
        number="01"
        title="Watch our movies"
      />
      <NavbarAnimatedFlex
        horizontal={horizontal}
        number="02"
        title="Meet out directors"
      />
      <NavbarAnimatedFlex
        horizontal={horizontal}
        number="03"
        title="Enjoy our locations"
      />
      <NavbarAnimatedFlex
        horizontal={horizontal}
        number="04"
        title="Know about us"
      />
    </animated.div>
  );
}
