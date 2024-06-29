import { useState } from "react";
import React from "react";

const parseTimeToSeconds = (timeStr) => {
  const [minutes, seconds, milliseconds] = timeStr
    .split(":")
    .map((v, i) => (i === 0 ? parseInt(v) : parseFloat(v)));
  return minutes * 60 + seconds + milliseconds / 100;
};

const formatTime = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const ms = Math.floor((milliseconds % 1000) / 10);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${ms.toString().padStart(2, "0")}`;
};

const isValidTimeFormat = (time) => {
  const regex = /^([0-5]\d):([0-5]\d):([0-9][0-9]|[0-8][0-9]|99)$/;
  return regex.test(time);
};

export const TablaLibre = () => {
  const [tiempo, setTiempo] = useState('');
  const [tiempo0, setTiempo0] = useState('');
  const [tiempo1, setTiempo1] = useState('');
  const [tiempo2, setTiempo2] = useState('');
  const [tiempo3, setTiempo3] = useState('');
  const [tiempo4, setTiempo4] = useState('');
  const [tiempo5, setTiempo5] = useState('');
  const [tiempo6, setTiempo6] = useState('');

  const calculateTime = (multiplier,t) => {
    if (isValidTimeFormat(t)) {
      return formatTime(parseTimeToSeconds(t) * multiplier * 1000);
    }
    return '';
  };

  return (
    <div className="table2-container">
      <table className="table2">
        <tbody>
          <tr>
            <th className="table2-style">LIBRE</th>
            <th className="table2-meta">META</th>
            <th className="table2-red" colSpan="3">RI</th>
            <th className="table2-red" colSpan="2">RII</th>
            <th className="table2-red" colSpan="2">MVO2</th>
            <th className="table2-red" colSpan="2">RL</th>
            <th className="table2-red" colSpan="2">V</th>
          </tr>
          <tr>
            <td className="table2-cyan">25 Libre</td>
            <td className="table2-goal">
              <input
                type="text"
                pattern="^([0-5]\d):([0-5]\d):([0-9][0-9]|[0-8][0-9]|99)$"
                title="Ingrese el tiempo en el formato 00:00:00"
                placeholder="Tiempo"
                value={tiempo}
                onChange={(e) => setTiempo(e.target.value)}
                className="table-input"
              />
            </td>
            <td className="table2-purple">{calculateTime(1.3,tiempo)}</td>
            <td className="table2-purple">{calculateTime(1.35,tiempo,tiempo0)}</td>
            <td className="table2-purple">{calculateTime(1.4,tiempo)}</td>
            <td className="table2-green">{calculateTime(1.25,tiempo)}</td>
            <td className="table2-green">{calculateTime(1.3,tiempo)}</td>
            <td className="table2-pink">{calculateTime(1.15,tiempo)}</td>
            <td className="table2-pink">{calculateTime(1.2,tiempo)}</td>
            <td className="table2-orange">{calculateTime(1.08,tiempo)}</td>
            <td className="table2-orange">{calculateTime(1.12,tiempo)}</td>
            <td className="table2-orange">{calculateTime(1.02,tiempo)}</td>
            <td className="table2-orange">{calculateTime(1.04,tiempo)}</td>
          </tr>
          <tr>
            <td className="table2-cyan">50 Libre</td>
            <td className="table2-goal">
              <input
                type="text"
                pattern="^([0-5]\d):([0-5]\d):([0-9][0-9]|[0-8][0-9]|99)$"
                title="Ingrese el tiempo en el formato 00:00:00"
                placeholder="Tiempo"
                value={tiempo0}
                onChange={(e) => setTiempo0(e.target.value)}
                className="table-input"
              />
            </td>
            <td className="table2-purple">{calculateTime(1.15,tiempo0)}</td>
            <td className="table2-purple">{calculateTime(1.17,tiempo0)}</td>
            <td className="table2-purple">{calculateTime(1.19,tiempo0)}</td>
            <td className="table2-green">{calculateTime(1.10,tiempo0)}</td>
            <td className="table2-green">{calculateTime(1.12,tiempo0)}</td>
            <td className="table2-pink">{calculateTime(1.06,tiempo0)}</td>
            <td className="table2-pink">{calculateTime(1.08,tiempo0)}</td>
            <td className="table2-orange">{calculateTime(1.04,tiempo0)}</td>
            <td className="table2-orange">{calculateTime(1.05,tiempo0)}</td>
            <td className="table2-blank" colSpan="2"></td>
          </tr>
          <tr>
            <td className="table2-cyan">100 Libre</td>
            <td className="table2-goal">
              <input
                type="text"
                pattern="^([0-5]\d):([0-5]\d):([0-9][0-9]|[0-8][0-9]|99)$"
                title="Ingrese el tiempo en el formato 00:00:00"
                placeholder="Tiempo"
                value={tiempo1}
                onChange={(e) => setTiempo1(e.target.value)}
                className="table-input"
              />
            </td>
            <td className="table2-purple">{calculateTime(1.15,tiempo1)}</td>
            <td className="table2-purple">{calculateTime(1.17,tiempo1)}</td>
            <td className="table2-purple">{calculateTime(1.19,tiempo1)}</td>
            <td className="table2-green">{calculateTime(1.10,tiempo1)}</td>
            <td className="table2-green">{calculateTime(1.12,tiempo1)}</td>
            <td className="table2-pink">{calculateTime(1.06,tiempo1)}</td>
            <td className="table2-pink">{calculateTime(1.08,tiempo1)}</td>
            <td className="table2-orange">{calculateTime(1.04,tiempo1)}</td>
            <td className="table2-orange">{calculateTime(1.05,tiempo1)}</td>
            <td className="table2-blank" colSpan="2"></td>
          </tr>
          <tr>
            <td className="table2-cyan">200 Libre</td>
            <td className="table2-goal">
              <input
                type="text"
                pattern="^([0-5]\d):([0-5]\d):([0-9][0-9]|[0-8][0-9]|99)$"
                title="Ingrese el tiempo en el formato 00:00:00"
                placeholder="Tiempo"
                value={tiempo2}
                onChange={(e) => setTiempo2(e.target.value)}
                className="table-input"
              />
            </td>
            <td className="table2-purple">{calculateTime(1.15,tiempo2)}</td>
            <td className="table2-purple">{calculateTime(1.17,tiempo2)}</td>
            <td className="table2-purple">{calculateTime(1.19,tiempo2)}</td>
            <td className="table2-green">{calculateTime(1.10,tiempo2)}</td>
            <td className="table2-green">{calculateTime(1.12,tiempo2)}</td>
            <td className="table2-pink">{calculateTime(1.06,tiempo2)}</td>
            <td className="table2-pink">{calculateTime(1.08,tiempo2)}</td>
            <td className="table2-orange">{calculateTime(1.04,tiempo2)}</td>
            <td className="table2-orange">{calculateTime(1.05,tiempo2)}</td>
            <td className="table2-blank" colSpan="2"></td>
          </tr>
          <tr>
            <td className="table2-cyan">400 Libre</td>
            <td className="table2-goal">
              <input
                type="text"
                pattern="^([0-5]\d):([0-5]\d):([0-9][0-9]|[0-8][0-9]|99)$"
                title="Ingrese el tiempo en el formato 00:00:00"
                placeholder="Tiempo"
                value={tiempo3}
                onChange={(e) => setTiempo3(e.target.value)}
                className="table-input"
              />
            </td>
            <td className="table2-purple">{calculateTime(1.15,tiempo3)}</td>
            <td className="table2-purple">{calculateTime(1.17,tiempo3)}</td>
            <td className="table2-purple">{calculateTime(1.19,tiempo3)}</td>
            <td className="table2-green">{calculateTime(1.10,tiempo3)}</td>
            <td className="table2-green">{calculateTime(1.12,tiempo3)}</td>
            <td className="table2-pink">{calculateTime(1.06,tiempo3)}</td>
            <td className="table2-pink">{calculateTime(1.08,tiempo3)}</td>
            <td className="table2-blank" colSpan="4"></td>
          </tr>
          <tr>
            <td className="table2-cyan">800 Libre</td>
            <td className="table2-goal">
              <input
                type="text"
                pattern="^([0-5]\d):([0-5]\d):([0-9][0-9]|[0-8][0-9]|99)$"
                title="Ingrese el tiempo en el formato 00:00:00"
                placeholder="Tiempo"
                value={tiempo4}
                onChange={(e) => setTiempo4(e.target.value)}
                className="table-input"
              />
            </td>
            <td className="table2-purple">{calculateTime(1.15,tiempo4)}</td>
            <td className="table2-purple">{calculateTime(1.17,tiempo4)}</td>
            <td className="table2-purple">{calculateTime(1.19,tiempo4)}</td>
            <td className="table2-green">{calculateTime(1.10,tiempo4)}</td>
            <td className="table2-green">{calculateTime(1.12,tiempo4)}</td>
            <td className="table2-pink">{calculateTime(1.06,tiempo4)}</td>
            <td className="table2-pink">{calculateTime(1.08,tiempo4)}</td>
            <td className="table2-blank" colSpan="4"></td>
          </tr>
          <tr>
            <td className="table2-cyan">1000 Libre</td>
            <td className="table2-goal">
              <input
                type="text"
                pattern="^([0-5]\d):([0-5]\d):([0-9][0-9]|[0-8][0-9]|99)$"
                title="Ingrese el tiempo en el formato 00:00:00"
                placeholder="Tiempo"
                value={tiempo5}
                onChange={(e) => setTiempo5(e.target.value)}
                className="table-input"
              />
            </td>
            <td className="table2-purple">{calculateTime(1.15, tiempo5)}</td>
            <td className="table2-purple">{calculateTime(1.17, tiempo5)}</td>
            <td className="table2-purple">{calculateTime(1.19, tiempo5)}</td>
            <td className="table2-green">{calculateTime(1.10, tiempo5)}</td>
            <td className="table2-green">{calculateTime(1.12, tiempo5)}</td>
            <td className="table2-pink">{calculateTime(1.06, tiempo5)}</td>
            <td className="table2-pink">{calculateTime(1.08, tiempo5)}</td>
            <td className="table2-blank" colSpan="4"></td>
          </tr>
          <tr>
            <td className="table2-cyan">1500 Libre</td>
            <td className="table2-goal">
              <input
                type="text"
                pattern="^([0-5]\d):([0-5]\d):([0-9][0-9]|[0-8][0-9]|99)$"
                title="Ingrese el tiempo en el formato 00:00:00"
                placeholder="Tiempo"
                value={tiempo6}
                onChange={(e) => setTiempo6(e.target.value)}
                className="table-input"
              />
            </td>
            <td className="table2-purple">{calculateTime(1.15,tiempo6)}</td>
            <td className="table2-purple">{calculateTime(1.17,tiempo6)}</td>
            <td className="table2-purple">{calculateTime(1.19,tiempo6)}</td>
            <td className="table2-green">{calculateTime(1.10,tiempo6)}</td>
            <td className="table2-green">{calculateTime(1.12,tiempo6)}</td>
            <td className="table2-pink">{calculateTime(1.06,tiempo6)}</td>
            <td className="table2-pink">{calculateTime(1.08,tiempo6)}</td>
            <td className="table2-blank" colSpan="4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TablaLibre;