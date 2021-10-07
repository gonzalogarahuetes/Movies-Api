import React, { Component } from "react";

import styled from "styled-components";

const DivTitles = styled.div`
  position: relative;
  bottom: 3rem;
  text-align: center;
`;

const BigTitle = styled.h1`
  font-size: 4rem;
`;

const Subtilte = styled.h2`
  font-size: 2rem;
`;

export default class Title extends Component {
  render() {
    return (
      <>
        <DivTitles>
          <BigTitle>Strange Combinations</BigTitle>
          <Subtilte>Mix your preferences and enjoy!</Subtilte>
        </DivTitles>
      </>
    );
  }
}
