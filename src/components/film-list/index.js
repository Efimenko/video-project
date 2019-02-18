import React from "react";
import { IMAGE_PATH } from "./../../consts";
import { Link } from "react-router-dom";

export default ({ films }) => {
  return (
    <ul className="list">
      {films &&
        films.map(({ id, title, poster_path }) => (
          <li className="list__item" key={id}>
            <Link to={`/film/${id}`} className="card">
              <div className="card__image-wrapper">
                <img
                  src={`${IMAGE_PATH}${poster_path}`}
                  alt={`${title} poster`}
                  className="card__image"
                />
              </div>
              <h2 className="card__title">{title}</h2>
            </Link>
          </li>
        ))}
    </ul>
  );
};
