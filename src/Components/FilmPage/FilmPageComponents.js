import styled from "styled-components";

const MainDivFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 10rem;
  color: white;

  img {
    height: 80vh;
    border-radius: 0.3rem;
    box-shadow: 0px 0px 30px white;

    &:hover {
      box-shadow: 0px 0px 30px #fb0303;
    }
  }
  }
`;

const FilmInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 25rem;
  background-color: black;
  box-shadow: 0px 0px 30px white;
  border-radius: 0.3rem;

  &:hover {
    box-shadow: 0px 0px 30px #fb0303;

    h1 {
      color: #fb0303;
    }
`;

const FilmTitle = styled.h1`
  color: white;
  align-self: center;
`;

const Text = styled.p`
  color: white;
  padding: 0 1.5rem;
`;

const Button = styled.button`
  cursor: pointer;
  color: white;
  width: 30%;
  padding: 0.5rem;
  background-color: black;
  border: 1px solid white;
  border-radius: 0.3rem;
  box-shadow: 0px 0px 30px white;

  &:hover {
    background-color: #fb0303;
  }
`;

const DivButtons = styled.div`
  margin-top: 1.2rem;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export { MainDivFlex, FilmTitle, Text, Button, DivButtons, FilmInfo };
