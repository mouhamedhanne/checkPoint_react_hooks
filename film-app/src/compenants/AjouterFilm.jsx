import React, { useState } from "react";
import "../styles/addFilm.css";

const AjouterFilm = ({ onAddFilm }) => {
  const [nouveauFilm, setNouveauFilm] = useState({
    titre: "",
    description: "",
    posterURL: "",
    note: "",
  });

  const [formulaireOpen, setFormulaireOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNouveauFilm({ ...nouveauFilm, [name]: value });
  };

  const handleSubmit = () => {
    // Ajoutez le nouveau film à la liste en appelant la fonction onAddFilm
    onAddFilm(nouveauFilm);

    // Réinitialisez le formulaire
    setNouveauFilm({
      titre: "",
      description: "",
      posterURL: "",
      note: "",
    });

    setFormulaireOpen(false);
  };

  const formulaireToggle = () => {
    setFormulaireOpen(!formulaireOpen);
  };

  return (
    <div className="add_film">
      {formulaireOpen ? (
        <form>
          <div>
            <input
              type="text"
              name="titre"
              placeholder="Titre du film"
              value={nouveauFilm.titre}
              onChange={handleChange}
            />
          </div>
          <div className="label_block">
            <input
              type="text"
              name="description"
              placeholder="Description du film"
              value={nouveauFilm.description}
              onChange={handleChange}
            />
          </div>
          <div className="label_block">
            <input
              type="text"
              name="posterURL"
              placeholder="URL de l'image"
              value={nouveauFilm.posterURL}
              onChange={handleChange}
            />
          </div>
          <div className="label_block">
            <input
              type="number"
              name="note"
              placeholder="Note du film"
              value={nouveauFilm.note}
              onChange={handleChange}
            />
          </div>
          <button className="btn_submit" onClick={handleSubmit}>
            Soumettre
          </button>
          <button className="btn_close_form" onClick={formulaireToggle}>
            Fermer
          </button>
        </form>
      ) : (
        <button className="btn_open_form" onClick={formulaireToggle}>
          Ajouter un Film
        </button>
      )}
    </div>
  );
};

export default AjouterFilm;
