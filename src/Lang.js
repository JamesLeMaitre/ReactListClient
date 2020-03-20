import React from "react";

const Lang = ({ details, onDelete }) => (
  <li>
    {details.nom}
    <button onClick={() => onDelete(details.id)}>X</button>
  </li>
);

export default Lang;
