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

export const Tablavel = () => {
  const [tiempo, setTiempo] = useState('');
  const [distancia, setDistancia] = useState(400);
  const [resultados, setResultados] = useState({ r1: [], r2: [], vo2: [] });
  const [errorMsg, setErrorMsg] = useState('');

  const handleCalcular = () => {
    if (timeRegex.test(tiempo)) {
      const TiempoInMilliseconds = parseTimeToMilliseconds(tiempo);
      const resultado = tablaTiempos(TiempoInMilliseconds / 1000, distancia);
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
            <th>Nombre :</th>
            <th><input type="text"
              name="nombre"
              placeholder="Nombre"
            /></th>
            <th>Fecha:</th>
            <th colSpan="3"><input type="date"
              name="fecha" /></th>
          </tr>
          <tr>
            <th>Distancia:</th>
            <th><select id="distancia"
              name="distancia"
              value={distancia}
              onChange={(e) => setDistancia(parseInt(e.target.value))}>
              <option value={400}>400</option>
              <option value={800}>800</option>
              <option value={1500}>1500</option>
            </select></th>
            <th>Tiempo:</th>
            <th colSpan="6">
              <input
                type="text"
                pattern="\d{2}:\d{2}:\d{2}"
                title="Ingrese el tiempo en el formato 00:00:00"
                placeholder="Tiempo"
                value={tiempo}
                onChange={(e) => setTiempo(e.target.value)}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="6">RI</th>
          </tr>
          <tr className="row__distancia">
            <td>50</td>
            <td>75</td>
            <td>100</td>
            <td>150</td>
            <td>200</td>
            <td>250</td>
          </tr>
          <tr>
            <td>{resultados.r1[0] ? formatTime(resultados.r1[0] * 1000) : ''}</td>
            <td>{resultados.r1[1] ? formatTime(resultados.r1[1] * 1000) : ''}</td>
            <td>{resultados.r1[2] ? formatTime(resultados.r1[2] * 1000) : ''}</td>
            <td>{resultados.r1[3] ? formatTime(resultados.r1[3] * 1000) : ''}</td>
            <td>{resultados.r1[4] ? formatTime(resultados.r1[4] * 1000) : ''}</td>
            <td>{resultados.r1[5] ? formatTime(resultados.r1[5] * 1000) : ''}</td>
          </tr>
          <tr className="row__distancia">
            <td>300</td>
            <td>350</td>
            <td>400</td>
            <td>800</td>
            <td>1000</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>{resultados.r1[6] ? formatTime(resultados.r1[6] * 1000) : ''}</td>
            <td>{resultados.r1[7] ? formatTime(resultados.r1[7] * 1000) : ''}</td>
            <td>{resultados.r1[8] ? formatTime(resultados.r1[8] * 1000) : ''}</td>
            <td>{resultados.r1[9] ? formatTime(resultados.r1[9] * 1000) : ''}</td>
            <td>{resultados.r1[10] ? formatTime(resultados.r1[10] * 1000) : ''}</td>
            <td>{resultados.r1[11] ? formatTime(resultados.r1[11] * 1000) : ''}</td>
          </tr>
          <tr>
            <th colSpan="6">RII</th>
          </tr>
          <tr className="row__distancia">
            <td>50</td>
            <td>75</td>
            <td>100</td>
            <td>150</td>
            <td>200</td>
            <td>250</td>
          </tr>
          <tr>
            <td>{resultados.r2[0] ? formatTime(resultados.r2[0] * 1000) : ''}</td>
            <td>{resultados.r2[1] ? formatTime(resultados.r2[1] * 1000) : ''}</td>
            <td>{resultados.r2[2] ? formatTime(resultados.r2[2] * 1000) : ''}</td>
            <td>{resultados.r2[3] ? formatTime(resultados.r2[3] * 1000) : ''}</td>
            <td>{resultados.r2[4] ? formatTime(resultados.r2[4] * 1000) : ''}</td>
            <td>{resultados.r2[5] ? formatTime(resultados.r2[5] * 1000) : ''}</td>

          </tr>
          <tr className="row__distancia">
            <td>300</td>
            <td>350</td>
            <td>400</td>
            <td>800</td>
            <td>1000</td>
            <td>1500</td>

          </tr>
          <tr>
            <td>{resultados.r2[6] ? formatTime(resultados.r2[6] * 1000) : ''}</td>
            <td>{resultados.r2[7] ? formatTime(resultados.r2[7] * 1000) : ''}</td>
            <td>{resultados.r2[8] ? formatTime(resultados.r2[8] * 1000) : ''}</td>
            <td>{resultados.r2[9] ? formatTime(resultados.r2[9] * 1000) : ''}</td>
            <td>{resultados.r2[10] ? formatTime(resultados.r2[10] * 1000) : ''}</td>
            <td>{resultados.r2[11] ? formatTime(resultados.r2[11] * 1000) : ''}</td>
          </tr>
          <tr>
            <th colSpan="6">VO2</th>
          </tr>
          <tr className="row__distancia">
            <td>50</td>
            <td>75</td>
            <td>100</td>
            <td>150</td>
            <td>200</td>
            <td>250</td>
          </tr>
          <tr>
            <td>{resultados.vo2[0] ? formatTime(resultados.vo2[0] * 1000) : ''}</td>
            <td>{resultados.vo2[1] ? formatTime(resultados.vo2[1] * 1000) : ''}</td>
            <td>{resultados.vo2[2] ? formatTime(resultados.vo2[2] * 1000) : ''}</td>
            <td>{resultados.vo2[3] ? formatTime(resultados.vo2[3] * 1000) : ''}</td>
            <td>{resultados.vo2[4] ? formatTime(resultados.vo2[4] * 1000) : ''}</td>
            <td>{resultados.vo2[5] ? formatTime(resultados.vo2[5] * 1000) : ''}</td>

          </tr>
          <tr className="row__distancia">
            <td>300</td>
            <td>350</td>
            <td>400</td>
            <td>800</td>
            <td>1000</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>{resultados.vo2[6] ? formatTime(resultados.vo2[6] * 1000) : ''}</td>
            <td>{resultados.vo2[7] ? formatTime(resultados.vo2[7] * 1000) : ''}</td>
            <td>{resultados.vo2[8] ? formatTime(resultados.vo2[8] * 1000) : ''}</td>
            <td>{resultados.vo2[9] ? formatTime(resultados.vo2[9] * 1000) : ''}</td>
            <td>{resultados.vo2[10] ? formatTime(resultados.vo2[10] * 1000) : ''}</td>
            <td>{resultados.vo2[11] ? formatTime(resultados.vo2[11] * 1000) : ''}</td>
          </tr>
        </tbody>
      </table>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      <button onClick={handleCalcular}>Calcular</button>
      <button onClick={handleLimpiar}>Limpiar</button>
    </div>
  );
}
