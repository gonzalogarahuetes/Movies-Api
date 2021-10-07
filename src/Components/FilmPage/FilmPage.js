import React, { Component } from "react";

import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";
import NavBarExtended from "../NavBarExtended/NavBarExtended";

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
  }

  div {
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 25rem;
    background-color: black;
    box-shadow: 0px 0px 30px white;
    border-radius: 0.3rem;
  }
`;

const FilmTitle = styled.h1`
  color: white;
  align-self: center;
  padding-left: 1.5rem;
`;

const Text = styled.p`
  color: white;
  padding: 0 1.5rem;
`;

export default class FilmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      hasLoaded: false,
      hasError: false,
      errorMessage: "",
    };
    this.openMenu = this.openMenu.bind(this);
  }

  componentDidMount() {
    this.loadMovie();
  }

  async loadMovie() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const URL = `http://www.omdbapi.com/?i=${id}&apikey=cf4b0a7a`;

    const rawPetition = await fetch(URL);
    const petition = await rawPetition.json();

    try {
      this.setState({
        movieInfo: petition,
        hasLoaded: true,
      });
    } catch (error) {
      this.setState({
        hasLoaded: false,
        hasError: true,
        errorMessage: error,
      });
    }
  }

  openMenu() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }
  render() {
    const { isOpen, movieInfo, hasLoaded, hasError } = this.state;
    return (
      <>
        <Background isOpen={isOpen} />
        <Navbar isOpen={isOpen} openMenu={this.openMenu}></Navbar>
        <NavBarExtended isOpen={isOpen} />
        {hasLoaded && !hasError && (
          <MainDivFlex>
            <img alt={movieInfo.Title} src={movieInfo.Poster} />
            <div>
              <FilmTitle>{movieInfo.Title}</FilmTitle>
              <Text>
                <strong>Plot:</strong>
                {movieInfo.Plot}
              </Text>
              <Text>
                <strong>Year:</strong>
                {movieInfo.Year}
              </Text>
              <Text>
                <strong>Rated:</strong>
                {movieInfo.Rated}
              </Text>
              <Text>
                <strong>Released:</strong>
                {movieInfo.Released}
              </Text>
              <Text>
                <strong>Runtime:</strong>
                {movieInfo.Runtime}
              </Text>
              <Text>
                <strong>Genre:</strong>
                {movieInfo.Genre}
              </Text>
              <Text>
                <strong>Director:</strong>
                {movieInfo.Director}
              </Text>
            </div>
          </MainDivFlex>
        )}
      </>
    );
  }
}
