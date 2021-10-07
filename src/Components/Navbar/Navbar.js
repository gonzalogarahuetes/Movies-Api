import React, { Component } from "react";

import styled from "styled-components";

import NavbarMenu from "../NavbarMenu/NavbarMenu";
import UserName from "../UserName/UserName";
import "./Navbar.scss";

const LightTitle = styled.h1`
  align-self: center;
  width: 17rem;
  text-align: right;
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #ab009a,
    0 0 82px #ab009a, 0 0 92px #ab009a, 0 0 102px #ab009a, 0 0 151px #ab009a;
`;

export default class Navbar extends Component {
  render() {
    const { openMenu, isOpen } = this.props;
    const navbarMenu = () => {
      if (isOpen) {
        return <div>Holi</div>;
      }
    };
    return (
      <>
        <navbar
          className={isOpen ? "navbar__container open" : "navbar__container"}
        >
          <NavbarMenu isOpen={isOpen} openMenu={openMenu} />
          <LightTitle>Moviedas</LightTitle>
          <UserName isOpen={isOpen} />
          {navbarMenu}
        </navbar>
      </>
    );
  }
}
