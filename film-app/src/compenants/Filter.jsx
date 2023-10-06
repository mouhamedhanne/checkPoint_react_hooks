import React, { useState } from "react";
import "../styles/filter.css";

const Filtrer = ({ onFilter }) => {
  const [titre, setTitre] = useState("");
  const [note, setNote] = useState("");

  const handleFilter = () => {
    onFilter({ titre, note });
  };

  return (
    <div className="filtrer">
      <input
        className="input_filter_title"
        type="text"
        placeholder="Filtrer par titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />
      <input
        className="input_filter_note"
        type="number"
        placeholder="Filtrer par note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button onClick={handleFilter}>Filtrer</button>
    </div>
  );
};

export default Filtrer;
