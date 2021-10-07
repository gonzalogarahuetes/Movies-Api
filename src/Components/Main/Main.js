import React, { Component } from "react";

import styled from "styled-components";

import Navbar from "../Navbar/Navbar";
import Background from "../Background/Background";
import SideTitle from "../SideTitle/SideTitle";
import "../Navbar/Navbar.scss";
import NavbarExtended from "../NavBarExtended/NavBarExtended";
import SearchForm from "../SearchForm/SearchForm";
import FilmCard from "../FilmCard/FilmCard";

const FlexDiv = styled.div`
  margin: 4rem auto 0;
  display: flex;
  justify-content: center;
  gap: 4rem;
  input {
    background-color: white;
    width: 20rem;
    height: 3rem;
    border-radius: 0.4rem;
    border: 2px solid #ab009a;
    box-shadow: 0px 0px 30px white;
    align-self: center;
    padding-left: 2rem;
    font-size: 0.9rem;
  }
  button {
    background-color: #ab009a;
  }
`;

const GridDiv = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      searching: false,
    };
    this.openMenu = this.openMenu.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
  }

  openMenu() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  componentDidUpdate() {
    const { searching, isOpen } = this.state;
    if (searching && !isOpen) this.scrollToBottom();
  }

  async searchMovie(imput) {
    const noSpaces = [...imput].map((char) => {
      if (char === " ") char = "_";
      return char;
    });

    const URL = `http://www.omdbapi.com/?s=${noSpaces.join(
      ""
    )}&apikey=cf4b0a7a`;

    const rawPetition = await fetch(URL);
    const petition = await rawPetition.json();

    if (petition.Response === "True") {
      this.setState({ searching: true, petition: petition.Search });
    } else {
      alert(petition.Error);
    }
  }

  scrollToBottom = () => {
    this.searchedFilms.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    const { isOpen, searching, petition } = this.state;

    const renderSearch = () => {
      if (isOpen) {
        return null;
      } else {
        return (
          <FlexDiv>
            <SideTitle side="left" title="Searching" keyword="Start" />
            <SearchForm searchMovie={this.searchMovie} />
            <SideTitle side="right" title="your preferences" keyword="Find" />
          </FlexDiv>
        );
      }
    };

    const searchResults = () => {
      if (searching && !isOpen) {
        return (
          <GridDiv
            ref={(el) => {
              this.searchedFilms = el;
            }}
          >
            {petition.map((movie) => (
              <FilmCard
                title={movie.Title}
                type={movie.Type}
                poster={movie.Poster}
                year={movie.Year}
                imdbId={movie.imdbID}
                key={movie.imdbID}
              />
            ))}
          </GridDiv>
        );
      }
    };
    return (
      <>
        <Background isOpen={isOpen} />
        <Navbar isOpen={isOpen} openMenu={this.openMenu}></Navbar>
        <NavbarExtended isOpen={isOpen} />
        {renderSearch()}
        {searchResults()}
      </>
    );
  }
}
