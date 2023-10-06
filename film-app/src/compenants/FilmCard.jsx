import React from "react";

const FilmCard = ({ film }) => {
  return (
    <div>
      <div
        style={{
          border: "1px solid orange",
          borderRadius: "15px",
          padding: "3rem",
          textAlign: "center",
          color: "#fff",
        }}
        className="film-card"
      >
        <img src={film.posterURL} alt={film.titre} />
        <h2 style={{}}>{film.titre}</h2>
        <p>{film.description}</p>
        <p style={{ color: "orange" }}>Note : {film.note} ✨</p>
      </div>
    </div>
  );
};

export default FilmCard;
