// CalcMProno.jsx
import React from "react";
import { comparar } from "../math/Function";
import "../tiempoP.css";

const parseTimeToSeconds = (timeStr) => {
  const [minutes, seconds, milliseconds] = timeStr
    .split(":")
    .map((v, i) => (i === 0 ? parseInt(v) : parseFloat(v)));
  return minutes * 60 + seconds + milliseconds / 100;
};

export const CalcMProno = ({ formData, onClear }) => {
  const {nombre, fecha, TA, MA, d } = formData;
  const TaInSeconds = parseTimeToSeconds(TA);
  const MaInSeconds = MA ? parseTimeToSeconds(MA) : 0;
  const resumen = MaInSeconds !== 0 ? comparar(TaInSeconds, MaInSeconds, parseFloat(d)) : null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Resumen:</h2>
        <div className="name-fecha">{nombre && <p><strong>Nombre: {nombre}</strong></p>}
          {fecha && <p><strong>Fecha: {fecha}</strong></p>}
        </div>
        <p><strong>Tiempo Actual: {TA}</strong></p>
        <p><strong>Distancia: {d} mts</strong></p>
        <p className="resumen">Marca A: {MA}</p>
        <p className="resumen">Velocidad: {resumen.vel.toFixed(4)} m/seg</p>
        <p className="resumen">Diferencia en segundos: {resumen.dif_s.toFixed(4)} segundos</p>
        <p className="resumen">Diferencia en metros: {resumen.dif_m.toFixed(4)} mts</p>

        <button onClick={onClear}>Limpiar</button>
      </div>
    </div>
  );
};