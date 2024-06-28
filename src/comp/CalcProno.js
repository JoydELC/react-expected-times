// CalcProno.jsx
import React from "react";
import { tiempo_pronostico, PB_evento } from "../math/Function";
import "../tiempoP.css";

const formatTime = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const ms = Math.floor((milliseconds % 1000) / 10);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${ms.toString().padStart(2, "0")}`;
};

const parseTimeToSeconds = (timeStr) => {
  const [minutes, seconds, milliseconds] = timeStr
    .split(":")
    .map((v, i) => (i === 0 ? parseInt(v) : parseFloat(v)));
  return minutes * 60 + seconds + milliseconds / 100;
};

export const CalcProno = ({ formData, onClear }) => {
  const { nombre, fecha, TA, d, porc, eventos  } = formData;
  const TaInSeconds = parseTimeToSeconds(TA);
  const TP = tiempo_pronostico(TaInSeconds, parseFloat(porc), parseFloat(d));
  const PBS = PB_evento(TP, TaInSeconds, parseFloat(eventos));


  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Resultados</h2>
        <div className="name-fecha">{nombre && <p>Nombre: {nombre}</p>}
          {fecha && <p>Fecha: {fecha}</p>}
        </div>
        <p>Tiempo Actual: {TA}</p>
        <p>Distancia: {d} mts</p>
        <p>Porcentaje quiero mejorar: {porc} %</p>
        <p>Cantidad de competencias: {eventos}</p>
  
          <p>Tiempo Pronostico: {formatTime(PBS.slice(-1)[0] * 1000)}</p>
        <p>Tiempos a cumplir:</p>
        <ul>
          {PBS.map((pb, index) => (
            <li key={index}>
              Competencia # {index + 1}: {formatTime(pb * 1000)}
            </li>
          ))}
        </ul> 
        <button onClick={onClear}>Limpiar</button>
      </div>
    </div>
  );
};