// CalcProno.jsx
import React from "react";
import { tiempo_pronostico, PB_evento, comparar } from "../math/Function";
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
  const { TA, MA, d, porc, eventos, nombre, fecha } = formData;
  const TaInSeconds = parseTimeToSeconds(TA);
  const MaInSeconds = MA ? parseTimeToSeconds(MA) : 0;
  const TP = tiempo_pronostico(TaInSeconds, parseFloat(porc), parseFloat(d));
  const PBS = PB_evento(TP, TaInSeconds, parseFloat(eventos));
  const ava = PBS.length;
  const resumen = MaInSeconds !== 0 ? comparar(TaInSeconds, MaInSeconds, parseFloat(d)) : null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Resultados</h2>
        <div className="name-fecha">{nombre && <p>Nombre: {nombre}</p>}
          {fecha && <p>Fecha: {fecha}</p>}
        </div>
        <p>Tiempo Actual: {TA}</p>
        <p>Distancia: {d} mts</p>
        {porc && <p>Porcentaje quiero mejorar: {porc} %</p>}
        { eventos && <p>Cantidad de competencias: {eventos}</p>}
        { ava !== 0  ?(<>
          <p>Tiempo Pronostico: {formatTime(PBS.slice(-1)[0] * 1000)}</p>
        <p>Tiempos a cumplir:</p>
        <ul>
          {PBS.map((pb, index) => (
            <li key={index}>
              Competencia # {index + 1}: {formatTime(pb * 1000)}
            </li>
          ))}
        </ul> </>): ('')
        }
        {resumen && (
          <>
            <p className="title-resumen">Resumen:</p>
            <p className="resumen">Marca A: {MA}</p>
            <p className="resumen">Velocidad: {resumen.vel.toFixed(3)} m/seg</p>
            <p className="resumen">Diferencia en segundos: {resumen.dif_s.toFixed(3)}</p>
            <p className="resumen">Diferencia en metros: {resumen.dif_m.toFixed(3)}</p>
          </>
        )}
        <button onClick={onClear}>Limpiar</button>
      </div>
    </div>
  );
};