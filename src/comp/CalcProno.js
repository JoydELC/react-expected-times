// CalcProno.jsx
import React, { useState } from "react";
import { tiempo_pronostico, PB_evento } from "../math/Function";
import "../tiempoP.css";

const formatTime = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const ms = Math.floor((milliseconds % 1000) / 10); // Round down to the nearest 10 milliseconds
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${ms.toString().padStart(2, "0")}`;
};

const parseTimeToMilliseconds = (timeStr) => {
  const [minutes, seconds, milliseconds] = timeStr.split(":").map((v, i) => (i === 0 ? parseInt(v) : parseFloat(v)));
  return minutes * 60000 + seconds * 1000 + milliseconds;
};

export const CalcProno = ({ formData, onClear }) => {
  const { TA, d, porc, eventos, nombre, fecha } = formData;
  const TaInMilliseconds = parseTimeToMilliseconds(TA);
  const TP = tiempo_pronostico(TaInMilliseconds / 1000, parseFloat(porc), parseFloat(d));
  const PBS = PB_evento(TP, TaInMilliseconds / 1000, parseFloat(eventos));
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
            <div className="name-fecha">{nombre && <p>Nombre: {nombre}</p>}
              {fecha && <p>Fecha: {fecha}</p>}
            </div>
            <p>Tiempo Actual: {TA}</p>
            <p>Distancia: {d} mts</p>
            <p>Porcentaje quiero mejorar: {porc} %</p>
            <p>Cantidad de competencias: {eventos}</p>
            <p>Tiempo Pronostico: {formatTime(PBS.slice(-1) * 1000)}</p>
            <p>Tiempos a cumplir:</p>
            <ul>
              {PBS.map((pb, index) => (
                <li key={index}>
                  Competencia # {index + 1}: {formatTime(pb * 1000)}
                </li>
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