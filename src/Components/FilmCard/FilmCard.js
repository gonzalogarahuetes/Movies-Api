import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./FilmCard.scss";

export default class FilmCard extends Component {
  render() {
    const { title, type, poster, year, imdbId } = this.props;
    return (
      <div className="filmCard">
        <Link to={`/movie/${imdbId}`}>
          <img alt={title} src={poster} />
        </Link>
        <h2>{title}</h2>
        <p>
          <strong>{`Year: `}</strong>
          {year}
        </p>
        <p>
          <strong>{`Type: `}</strong>
          {type}
        </p>
      </div>
    );
  }
}
