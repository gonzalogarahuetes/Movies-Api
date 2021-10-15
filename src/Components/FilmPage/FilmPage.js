import React, { useState, useEffect } from "react";

import Background from "../Background/Background";
import CheckLogo from "../CheckLogo/CheckLogo";
import EyeLogo from "../EyeLogo";
import Navbar from "../Navbar/Navbar";
import NavBarExtended from "../NavBarExtended/NavBarExtended";
import {
  MainDivFlex,
  FilmTitle,
  Text,
  Button,
  DivButtons,
  FilmInfo,
} from "./FilmPageComponents.js";

export default function FilmPage({ match }) {
  const [isOpen, setOpen] = useState(false);
  const [hasLoaded, setLoaded] = useState(false);
  const [hasError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [movieInfo, setMovieInfo] = useState("");
  const [wannaSee, setWannaSee] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const loadMovie = async () => {
      const {
        params: { id },
      } = match;

      const URL = `http://www.omdbapi.com/?i=${id}&apikey=cf4b0a7a`;

      try {
        const rawPetition = await fetch(URL);
        const petition = await rawPetition.json();
        setLoaded(() => true);
        setMovieInfo(() => petition);
      } catch (error) {
        setLoaded(() => true);
        setError(() => true);
        setErrorMessage(() => error);
      }
    };
    loadMovie();
  }, [match]);

  function openMenu() {
    setOpen(!isOpen);
  }

  function handleReaction(reaction) {
    const lovedFilm = {
      id: movieInfo.imdbID,
      reaction: reaction,
    };
    const local = JSON.parse(localStorage.getItem("Reactions"));

    if (local === null) {
      localStorage.setItem("Reactions", JSON.stringify([lovedFilm]));
    } else {
      localStorage.setItem("Reactions", JSON.stringify([...local, lovedFilm]));
    }

    if (lovedFilm.reaction === "checked") setChecked(true);
    if (lovedFilm.reaction === "see") setWannaSee(true);
  }

  return (
    <>
      <Background isOpen={isOpen} />
      <Navbar isOpen={isOpen} openMenu={openMenu}></Navbar>
      <NavBarExtended isOpen={isOpen} />
      {hasLoaded && !hasError && (
        <MainDivFlex>
          <img alt={movieInfo.Title} src={movieInfo.Poster} />
          {checked && <CheckLogo />}
          {wannaSee && <EyeLogo />}
          <FilmInfo>
            <FilmTitle>{movieInfo.Title}</FilmTitle>
            <Text>
              <strong>Plot:</strong>
              {` ${movieInfo.Plot}`}
            </Text>
            <Text>
              <strong>Year:</strong>
              {` ${movieInfo.Year}`}
            </Text>
            <Text>
              <strong>Rated:</strong>
              {` ${movieInfo.Rated}`}
            </Text>
            <Text>
              <strong>Released:</strong>
              {` ${movieInfo.Released}`}
            </Text>
            <Text>
              <strong>Length:</strong>
              {` ${movieInfo.Runtime}`}
            </Text>
            <Text>
              <strong>Genre:</strong>
              {` ${movieInfo.Genre}`}
            </Text>
            <Text>
              <strong>Director:</strong>
              {` ${movieInfo.Director}`}
            </Text>
            <DivButtons>
              <Button onClick={() => handleReaction("see")}>
                I want to see it
              </Button>
              <Button onClick={() => handleReaction("checked")}>
                I have seen it
              </Button>
            </DivButtons>
          </FilmInfo>
        </MainDivFlex>
      )}
    </>
  );
}
