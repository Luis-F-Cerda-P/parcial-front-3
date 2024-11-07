import React, { useState } from "react";
import Card from "./Card";
import '../App.css';

const Form = () => {
  const [mascota, setMascota] = useState({
    especie: "",
    nombre: "",
  });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);
  console.log(mascota);

  const handleSubmit = (event) => {
    event.preventDefault();
    const caracteresEnBlancoAlComienzoDeUnString = /^\s/;
    if (
      mascota.especie.trim().length >= 3 &&
      !caracteresEnBlancoAlComienzoDeUnString.test(mascota.especie) &&
      mascota.nombre.length >= 6
    ) {
      setError(false);
      setMostrar(true);
    } else {
        setError(true);
        setMostrar(false);
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label>Especie de la mascota:</label>
          <input
            type="text"
            placeholder="Ejemplo: Antílope"
            value={mascota.especie}
            onChange={(event) =>
                setMascota({ ...mascota, especie: event.target.value })
            }
            />
          <label>Nombre de la mascota: </label>
          <input
            type="text"
            placeholder="Ejemplo: Penélope"
            value={mascota.nombre}
            onChange={(event) =>
              setMascota({ ...mascota, nombre: event.target.value })
            }
          />
          <button>Encariñarse con la mascota<br />(porque le pusiste nombre)</button>
          {error && (
            <>
              <h4 style={{ color: "orange" }}>
                Por favor ingrese la información correctamente: 
              </h4>
            <ul style={{ color: "red" }}>
              <li>La especie debe tener tres (3) o más caracteres de largo</li>
              <li>La especie no puede contener espacios en blanco al comienzo</li>
              <li>El nombre de la mascota debe contener al menos seis (6) caracteres</li>
            </ul>
            </>
          )}
        </form>
        {mostrar && <Card mascota={mascota} />}
    </div>
  );
};

export default Form;