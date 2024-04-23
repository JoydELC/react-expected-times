import React, { useState } from "react";
import { tiempo_pronostico, PB_evento } from "../math/Function";

const Calc = ({ formData, onClear }) => {
  const { TA, d, porc, eventos } = formData;
  const TP = tiempo_pronostico(parseFloat(TA), parseFloat(porc), parseFloat(d));
  const PBS = PB_evento(TP, parseFloat(TA), parseFloat(eventos));
  const [showResults, setShowResults] = useState(true);

  const handleClear = () => {
    setShowResults(false);
    onClear();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        {showResults ? (
          <>
            <h2>Resultados</h2>
            <p>Tiempo Actual: {TA} s</p>
            <p>Distancia: {d} mts</p>
            <p>Porcentaje quiero mejorar: {porc} %</p>
            <p>Cantidad de competencias: {eventos}</p>
            <p>Tiempo Pronostico: {TP.toFixed(3)} s</p>
            <p>Tiempos a cumplir:</p>
            <ul>
              {PBS.map((pb, index) => (
                <li key={index}>Competencia # {index + 1}: {pb.toFixed(3)} s </li>
              ))}
            </ul>
            <button onClick={handleClear}>Limpiar</button>
          </>
        ) : (
          <p>No hay resultados para mostrar.</p>
        )}
      </div>
    </div>
  );
};

export default Calc;