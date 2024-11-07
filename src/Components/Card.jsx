import React from "react";
import '../App.css';

const Card = ({ mascota }) => {
  // console.log(props)
  return (
    <div className="card">
      <h3>Le has puesto "{mascota.nombre}" por nombre a tu {mascota.especie} mascota ❤</h3>
    </div>
  );
};

export default Card;