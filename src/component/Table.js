import React, { useState } from "react";
import { tablaTiempos } from "../math/Function";

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
const timeRegex = /^([0-9]|[0-5][0-9]):([0-5][0-9]):([0-5][0-9])$/;

function Table() {
  const [tiempo, setTiempo] = useState('');
  const [resultados, setResultados] = useState({ r1: [], r2: [], vo2: [] });
  const [errorMsg, setErrorMsg] = useState('');

  const handleCalcular = () => {
    if (timeRegex.test(tiempo)) {
      const TiempoInMilliseconds = parseTimeToMilliseconds(tiempo);
      const resultado = tablaTiempos(TiempoInMilliseconds / 1000);
      setResultados(resultado);
      setErrorMsg('');
    } else {
      setErrorMsg('El tiempo ingresado no tiene el formato correcto (mm:ss:ms)');
    }
  };

  const handleLimpiar = () => {
    setTiempo('');
    setResultados({ r1: [], r2: [], vo2: [] });
  };

  return (
    <div className="table-container">
      <h2>VELOCIDADES DE NADO: </h2>
      <table>
        <thead>
          <tr>
            <th>Distancia:</th>
            <th>800</th>
            <th>Tiempo:</th>
            <th colSpan="6">
              <input
                type="text"
                pattern="\d{2}:\d{2}:\d{2}"
                title="Ingrese el tiempo en el formato 00:00:00"
                placeholder="Tiempo 800"
                value={tiempo}
                onChange={(e) => setTiempo(e.target.value)}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="9">RI</th>
          </tr>
          <tr>
            <td>50</td>
            <td>75</td>
            <td>100</td>
            <td>150</td>
            <td>200</td>
            <td>300</td>
            <td>400</td>
            <td>800</td>
            <td>1500</td>
          </tr>
          <tr>
          <td>{resultados.r1[0] ? formatTime(resultados.r1[0] * 1000) : ''}</td>
<td>{resultados.r1[1] ? formatTime(resultados.r1[1] * 1000) : ''}</td>
<td>{resultados.r1[2] ? formatTime(resultados.r1[2] * 1000) : ''}</td>
<td>{resultados.r1[3] ? formatTime(resultados.r1[3] * 1000) : ''}</td>
<td>{resultados.r1[4] ? formatTime(resultados.r1[4] * 1000) : ''}</td>
<td>{resultados.r1[5] ? formatTime(resultados.r1[5] * 1000) : ''}</td>
<td>{resultados.r1[6] ? formatTime(resultados.r1[6] * 1000) : ''}</td>
<td>{resultados.r1[7] ? formatTime(resultados.r1[7] * 1000) : ''}</td>
<td>{resultados.r1[8] ? formatTime(resultados.r1[8] * 1000) : ''}</td>
          </tr>
          <tr>
            <th colSpan="9">RII</th>
          </tr>
          <tr>
            <td>50</td>
            <td>75</td>
            <td>100</td>
            <td>150</td>
            <td>200</td>
            <td>300</td>
            <td>400</td>
            <td>800</td>
            <td>1500</td>
          </tr>
          <tr>
          <td>{resultados.r2[0] ? formatTime(resultados.r2[0] * 1000) : ''}</td>
<td>{resultados.r2[1] ? formatTime(resultados.r2[1] * 1000) : ''}</td>
<td>{resultados.r2[2] ? formatTime(resultados.r2[2] * 1000) : ''}</td>
<td>{resultados.r2[3] ? formatTime(resultados.r2[3] * 1000) : ''}</td>
<td>{resultados.r2[4] ? formatTime(resultados.r2[4] * 1000) : ''}</td>
<td>{resultados.r2[5] ? formatTime(resultados.r2[5] * 1000) : ''}</td>
<td>{resultados.r2[6] ? formatTime(resultados.r2[6] * 1000) : ''}</td>
<td>{resultados.r2[7] ? formatTime(resultados.r2[7] * 1000) : ''}</td>
<td>{resultados.r2[8] ? formatTime(resultados.r2[8] * 1000) : ''}</td>
          </tr>
          <tr>
            <th colSpan="9">VO2</th>
          </tr>
          <tr>
            <td>50</td>
            <td>75</td>
            <td>100</td>
            <td>150</td>
            <td>200</td>
            <td>300</td>
            <td>400</td>
            <td>800</td>
            <td>1500</td>
          </tr>
          <tr>
          <td>{resultados.vo2[0] ? formatTime(resultados.vo2[0] * 1000) : ''}</td>
<td>{resultados.vo2[1] ? formatTime(resultados.vo2[1] * 1000) : ''}</td>
<td>{resultados.vo2[2] ? formatTime(resultados.vo2[2] * 1000) : ''}</td>
<td>{resultados.vo2[3] ? formatTime(resultados.vo2[3] * 1000) : ''}</td>
<td>{resultados.vo2[4] ? formatTime(resultados.vo2[4] * 1000) : ''}</td>
<td>{resultados.vo2[5] ? formatTime(resultados.vo2[5] * 1000) : ''}</td>
<td>{resultados.vo2[6] ? formatTime(resultados.vo2[6] * 1000) : ''}</td>
<td>{resultados.vo2[7] ? formatTime(resultados.vo2[7] * 1000) : ''}</td>
<td>{resultados.vo2[8] ? formatTime(resultados.vo2[8] * 1000) : ''}</td>
          </tr>
        </tbody>
      </table>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      <button onClick={handleCalcular}>Calcular</button>
      <button onClick={handleLimpiar}>Limpiar</button>
    </div>
  );
}

export default Table;