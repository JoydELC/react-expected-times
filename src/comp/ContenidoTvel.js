import React, { useState } from "react";
import "../tablaestilo.css"
import { TablaLibre, TablaPechoMariposa, tablaCombinado } from "../math/Function";

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
const timeRegex = /^([0-5]?\d):([0-5]?\d):(([0-5]?\d)|([0-9][0-9]))$/;


export const ContenidoTvel = () => {
//Resultados :
  const [tiempo, setTiempo] = useState('');
  const [tiempoEspalda, setTiempoEspalda] = useState('');
  const [tiempoM, setTiempoM] = useState('');
  const [tiempoP, setTiempoP] = useState('');
  const [tiempoC, setTiempoC] = useState('');
  const [resultados, setResultados] = useState({ pron : [], r1_1: [],r1_2: [],r1_3: [], r2_1: [],r2_2: [], mvo2_1: [],mvo2_2: [], rl_1 : [],rl_2: [] });
  const [resultadosEspalda, setResultadosEspalda] = useState({ pron : [], r1_1: [],r1_2: [],r1_3: [], r2_1: [],r2_2: [], mvo2_1: [],mvo2_2: [], rl_1 : [],rl_2: [] });
  const [resultadosMariposa, setResultadosMariposa] = useState({ pron : [], r1_1: [],r1_2: [],r1_3: [], r2_1: [],r2_2: [], mvo2_1: [],mvo2_2: [], rl_1 : [],rl_2: [] });
  const [resultadosPecho, setResultadosPecho] = useState({ pron : [], r1_1: [],r1_2: [],r1_3: [], r2_1: [],r2_2: [], mvo2_1: [],mvo2_2: [], rl_1 : [],rl_2: [] });  
  const [resultadoscombi, setResultadoscombi] = useState({ pron : [], vr1_1: [],vr1_2: [],vr1_3: [], vr2_1: [],vr2_2: [], mvo2_1: [],mvo2_2: [], rl_1 : [],rl_2: [] });
  const [errorMsg, setErrorMsg] = useState('');

  const handleCalcular = () => {
    if (timeRegex.test(tiempo)) {
      const TiempoInMilliseconds = parseTimeToMilliseconds(tiempo);
      const resultado = TablaLibre(TiempoInMilliseconds / 1000);
      setResultados(resultado);
      setErrorMsg('');
    } else {
      setErrorMsg('El tiempo ingresado no tiene el formato correcto (mm:ss:ms)');
    }
  };

  const handleLimpiar = () => {
    setTiempo('');
    setResultados({ pron: [], r1_1: [],r1_2: [],r1_3: [], r2_1: [],r2_2: [], mvo2_1: [],mvo2_2: [], rl_1 : [],rl_2: [] });
  };

  const handleCalcularEspalda = () => {
    if (timeRegex.test(tiempoEspalda)) {
      const TiempoInMilliseconds = parseTimeToMilliseconds(tiempoEspalda);
      const resultado = TablaLibre(TiempoInMilliseconds / 1000);
      setResultadosEspalda(resultado);
      setErrorMsg('');
    } else {
      setErrorMsg('El tiempo ingresado no tiene el formato correcto (mm:ss:ms)');
    }
  };

  const handleLimpiarEspalda = () => {
    setTiempoEspalda('');
    setResultadosEspalda({ pron: [], r1_1: [],r1_2: [],r1_3: [], r2_1: [],r2_2: [], mvo2_1: [],mvo2_2: [], rl_1 : [],rl_2: [] });
  };
  const handleCalcularM = () => {
    if (timeRegex.test(tiempoM)) {
      const TiempoInMilliseconds = parseTimeToMilliseconds(tiempoM);
      const resultado = TablaPechoMariposa(TiempoInMilliseconds / 1000);
      setResultadosMariposa(resultado);
      console.log(resultado);
      setErrorMsg('');
    } else {
      setErrorMsg('El tiempo ingresado no tiene el formato correcto (mm:ss:ms)');
    }
  };

  const handleLimpiarM = () => {
    setTiempo('');
    setResultadosMariposa({ pron: [], r1_1: [],r1_2: [],r1_3: [], r2_1: [],r2_2: [], mvo2_1: [],mvo2_2: [], rl_1 : [],rl_2: [] });
  };

  const handleCalcularP = () => {
    if (timeRegex.test(tiempoP)) {
      const TiempoInMilliseconds = parseTimeToMilliseconds(tiempoP);
      const resultado = TablaPechoMariposa(TiempoInMilliseconds / 1000);
      setResultadosPecho(resultado);
      setErrorMsg('');
    } else {
      setErrorMsg('El tiempo ingresado no tiene el formato correcto (mm:ss:ms)');
    }
  };

  const handleLimpiarP = () => {
    setTiempo('');
    setResultadosPecho({ pron: [], r1_1: [],r1_2: [],r1_3: [], r2_1: [],r2_2: [], mvo2_1: [],mvo2_2: [], rl_1 : [],rl_2: [] });
  };
  const handleCalcularC = () => {
    if (timeRegex.test(tiempoC)) {
      const TiempoInMilliseconds = parseTimeToMilliseconds(tiempoC);
      const resultado = tablaCombinado(TiempoInMilliseconds / 1000);
      setResultadoscombi(resultado);
      setErrorMsg('');
    } else {
      setErrorMsg('El tiempo ingresado no tiene el formato correcto (mm:ss:ms)');
    }
  };

  const handleLimpiarC = () => {
    setTiempo('');
    setResultadoscombi({ pron: [], vr1_1: [],vr1_2: [],vr1_3: [], vr2_1: [],vr2_2: [], mvo2_1: [],mvo2_2: [], rl_1 : [],rl_2: [] });
  };

  return (
    <div className='table-indv'>
      <table className="tabla-libre">
        <tr>
          <td>Libre</td>
          <td>Pronostico</td>
          <td colSpan="3" className="r1">RI</td>
          <td colSpan="2" className="r2">RII</td>
          <td colSpan="2" className="vo2">MVO2</td>
          <td colSpan="2" className="rl">RL</td>
          <td colSpan="2" className="vv">V</td>
        </tr>
        <tr className="pintar">
          <td className="td-distancia">25 L</td>
          <td className="td-input">
          <input
  type="text"
  pattern="^([0-5]\d):([0-5]\d):([0-9][0-9]|[0-8][0-9]|99)$"
  title="Ingrese el tiempo en el formato 00:00:00"
  placeholder="Tiempo"
  value={tiempo}
  onChange={(e) => setTiempo(e.target.value)}
/>
          </td>
          <td colSpan="9" className="vacio"></td>
          <td className="blanco">{resultados.rl_1[0] ? formatTime(resultados.rl_1[0] * 1000) : ''}</td>
          <td className="blanco">{resultados.rl_2[0] ? formatTime(resultados.rl_2[0] * 1000) : ''}</td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">50 L</td>
          <td className="td-pron">{resultados.pron[1] ? formatTime(resultados.pron[1] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_1[0] ? formatTime(resultados.r1_1[0] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_2[0] ? formatTime(resultados.r1_2[0] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_3[0] ? formatTime(resultados.r1_3[0] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_1[0] ? formatTime(resultados.r2_1[0] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_2[0] ? formatTime(resultados.r2_2[0] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_1[0] ? formatTime(resultados.mvo2_1[0] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_2[0] ? formatTime(resultados.mvo2_2[0] * 1000) : ''}</td>
          <td className="rl">{resultados.rl_1[1] ? formatTime(resultados.rl_1[1] * 1000) : ''}</td>
          <td className="rl">{resultados.rl_2[1] ? formatTime(resultados.rl_2[1] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">75 L</td>
          <td>{resultados.pron[2] ? formatTime(resultados.pron[2] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_1[1] ? formatTime(resultados.r1_1[1] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_2[1] ? formatTime(resultados.r1_2[1] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_3[1] ? formatTime(resultados.r1_3[1] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_1[1] ? formatTime(resultados.r2_1[1] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_2[1] ? formatTime(resultados.r2_2[1] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_1[1] ? formatTime(resultados.mvo2_1[1] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_2[1] ? formatTime(resultados.mvo2_2[1] * 1000) : ''}</td>
          <td className="rl">{resultados.rl_1[2] ? formatTime(resultados.rl_1[2] * 1000) : ''}</td>
          <td className="rl">{resultados.rl_2[2] ? formatTime(resultados.rl_2[2] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">100 L</td>
          <td>{resultados.pron[3] ? formatTime(resultados.pron[3] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_1[2] ? formatTime(resultados.r1_1[2] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_2[2] ? formatTime(resultados.r1_2[2] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_3[2] ? formatTime(resultados.r1_3[2] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_1[2] ? formatTime(resultados.r2_1[2] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_2[2] ? formatTime(resultados.r2_2[2] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_1[2] ? formatTime(resultados.mvo2_1[2] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_2[2] ? formatTime(resultados.mvo2_2[2] * 1000) : ''}</td>
          <td className="rl">{resultados.rl_1[3] ? formatTime(resultados.rl_1[3] * 1000) : ''}</td>
          <td className="rl">{resultados.rl_2[3] ? formatTime(resultados.rl_2[3] * 1000) : ''}</td>
          <td colSpan="2"className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">150 L</td>
          <td>{resultados.pron[4] ? formatTime(resultados.pron[4] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_1[3] ? formatTime(resultados.r1_1[3] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_2[3] ? formatTime(resultados.r1_2[3] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_3[3] ? formatTime(resultados.r1_3[3] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_1[3] ? formatTime(resultados.r2_1[3] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_2[3] ? formatTime(resultados.r2_2[3] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_1[3] ? formatTime(resultados.mvo2_1[3] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_2[3] ? formatTime(resultados.mvo2_2[3] * 1000) : ''}</td>
          <td className="rl">{resultados.rl_1[4] ? formatTime(resultados.rl_1[4] * 1000) : ''}</td>
          <td className="rl">{resultados.rl_2[4] ? formatTime(resultados.rl_2[4] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">200 L</td>
          <td>{resultados.pron[5] ? formatTime(resultados.pron[5] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_1[4] ? formatTime(resultados.r1_1[4] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_2[4] ? formatTime(resultados.r1_2[4] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_3[4] ? formatTime(resultados.r1_3[4] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_1[4] ? formatTime(resultados.r2_1[4] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_2[4] ? formatTime(resultados.r2_2[4] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_1[4] ? formatTime(resultados.mvo2_1[4] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_2[4] ? formatTime(resultados.mvo2_2[4] * 1000) : ''}</td>
          <td className="rl">{resultados.rl_1[5] ? formatTime(resultados.rl_1[5] * 1000) : ''}</td>
          <td className="rl">{resultados.rl_2[5] ? formatTime(resultados.rl_2[5] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">250 L</td>
          <td>{resultados.pron[6] ? formatTime(resultados.pron[6] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_1[5] ? formatTime(resultados.r1_1[5] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_2[5] ? formatTime(resultados.r1_2[5] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_3[5] ? formatTime(resultados.r1_3[5] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_1[5] ? formatTime(resultados.r2_1[5] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_2[5] ? formatTime(resultados.r2_2[5] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_1[5] ? formatTime(resultados.mvo2_1[5] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_2[5] ? formatTime(resultados.mvo2_2[5] * 1000) : ''}</td>
          <td colSpan="4" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">300 L</td>
          <td>{resultados.pron[7] ? formatTime(resultados.pron[7] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_1[6] ? formatTime(resultados.r1_1[6] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_2[6] ? formatTime(resultados.r1_2[6] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_3[6] ? formatTime(resultados.r1_3[6] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_1[6] ? formatTime(resultados.r2_1[6] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_2[6] ? formatTime(resultados.r2_2[6] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_1[6] ? formatTime(resultados.mvo2_1[6] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_2[6] ? formatTime(resultados.mvo2_2[6] * 1000) : ''}</td>
          <td colSpan="4" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">350 L</td>
          <td>{resultados.pron[8] ? formatTime(resultados.pron[8] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_1[7] ? formatTime(resultados.r1_1[7] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_2[7] ? formatTime(resultados.r1_2[7] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_3[7] ? formatTime(resultados.r1_3[7] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_1[7] ? formatTime(resultados.r2_1[7] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_2[7] ? formatTime(resultados.r2_2[7] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_1[7] ? formatTime(resultados.mvo2_1[7] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_2[7] ? formatTime(resultados.mvo2_2[7] * 1000) : ''}</td>
          <td colSpan="4" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">400 L</td>
          <td>{resultados.pron[9] ? formatTime(resultados.pron[9] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_1[8] ? formatTime(resultados.r1_1[8] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_2[8] ? formatTime(resultados.r1_2[8] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_3[8] ? formatTime(resultados.r1_3[8] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_1[8] ? formatTime(resultados.r2_1[8] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_2[8] ? formatTime(resultados.r2_2[8] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_1[8] ? formatTime(resultados.mvo2_1[8] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_2[8] ? formatTime(resultados.mvo2_2[8] * 1000) : ''}</td>
          <td colSpan="4" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">500 L</td>
          <td>{resultados.pron[10] ? formatTime(resultados.pron[10] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_1[9] ? formatTime(resultados.r1_1[9] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_2[9] ? formatTime(resultados.r1_2[9] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_3[9] ? formatTime(resultados.r1_3[9] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_1[9] ? formatTime(resultados.r2_1[9] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_2[9] ? formatTime(resultados.r2_2[9] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_1[9] ? formatTime(resultados.mvo2_1[9] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_2[9] ? formatTime(resultados.mvo2_2[9] * 1000) : ''}</td>
          <td colSpan="4" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">600 L</td>
          <td>{resultados.pron[11] ? formatTime(resultados.pron[11] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_1[10] ? formatTime(resultados.r1_1[10] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_2[10] ? formatTime(resultados.r1_2[10] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_3[10] ? formatTime(resultados.r1_3[10] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_1[10] ? formatTime(resultados.r2_1[10] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_2[10] ? formatTime(resultados.r2_2[10] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_1[10] ? formatTime(resultados.mvo2_1[10] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_2[10] ? formatTime(resultados.mvo2_2[10] * 1000) : ''}</td>
          <td colSpan="4" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">800 L</td>
          <td>{resultados.pron[12] ? formatTime(resultados.pron[12] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_1[11] ? formatTime(resultados.r1_1[11] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_2[11] ? formatTime(resultados.r1_2[11] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_3[11] ? formatTime(resultados.r1_3[11] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_1[11] ? formatTime(resultados.r2_1[11] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_2[11] ? formatTime(resultados.r2_2[11] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_1[11] ? formatTime(resultados.mvo2_1[11] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_2[1] ? formatTime(resultados.mvo2_2[11] * 1000) : ''}</td>
          <td colSpan="4" className="vacio"></td>         
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">1000 L</td>
          <td>{resultados.pron[13] ? formatTime(resultados.pron[13] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_1[12] ? formatTime(resultados.r1_1[12] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_2[12] ? formatTime(resultados.r1_2[12] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_3[12] ? formatTime(resultados.r1_3[12] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_1[12] ? formatTime(resultados.r2_1[12] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_2[12] ? formatTime(resultados.r2_2[12] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_1[12] ? formatTime(resultados.mvo2_1[12] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_2[12] ? formatTime(resultados.mvo2_2[12] * 1000) : ''}</td>
          <td colSpan="4"className="td-button"><button className="calcular" onClick={handleCalcular}>Calcular</button></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">1500 L</td>
          <td>{resultados.pron[14] ? formatTime(resultados.pron[14] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_1[13] ? formatTime(resultados.r1_1[13] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_2[13] ? formatTime(resultados.r1_2[13] * 1000) : ''}</td>
          <td className="r1">{resultados.r1_3[13] ? formatTime(resultados.r1_3[13] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_1[13] ? formatTime(resultados.r2_1[13] * 1000) : ''}</td>
          <td className="r2">{resultados.r2_2[13] ? formatTime(resultados.r2_2[13] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_1[13] ? formatTime(resultados.mvo2_1[13] * 1000) : ''}</td>
          <td className="vo2">{resultados.mvo2_2[13] ? formatTime(resultados.mvo2_2[13] * 1000) : ''}</td>
         <td className="td-button" colSpan="4"> <button className="limpiar"onClick={handleLimpiar}>Limpiar</button></td>
        </tr>
      </table>

      <table className="tabla-espalda">
      <tr>
          <td>Espalda</td>
          <td>Pronostico</td>
          <td colSpan="3" className="r1">RI</td>
          <td colSpan="2" className="r2">RII</td>
          <td colSpan="2" className="vo2">MVO2</td>
          <td colSpan="2" className="rl">RL</td>
          <td colSpan="2" className="vv">V</td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia"> 25 E</td>
          <td className="td-input">
          <input
                type="text"
                pattern="^([0-5]\d):([0-5]\d):([0-9][0-9]|[0-8][0-9]|99)$"
                title="Ingrese el tiempo en el formato 00:00:00"
                placeholder="Tiempo"
                value={tiempoEspalda}
                onChange={(e) => setTiempoEspalda(e.target.value)}
              />
          </td>
          <td colSpan="9" className="vacio" ></td>
          <td className="blanco">{resultadosEspalda.rl_1[0] ? formatTime(resultadosEspalda.rl_1[0] * 1000) : ''}</td>
          <td className="blanco">{resultadosEspalda.rl_2[0] ? formatTime(resultadosEspalda.rl_2[0] * 1000) : ''}</td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">50 E</td>
          <td>{resultadosEspalda.pron[1] ? formatTime(resultadosEspalda.pron[1] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_1[0] ? formatTime(resultadosEspalda.r1_1[0] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_2[0] ? formatTime(resultadosEspalda.r1_2[0] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_3[0] ? formatTime(resultadosEspalda.r1_3[0] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_1[0] ? formatTime(resultadosEspalda.r2_1[0] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_2[0] ? formatTime(resultadosEspalda.r2_2[0] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_1[0] ? formatTime(resultadosEspalda.mvo2_1[0] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_2[0] ? formatTime(resultadosEspalda.mvo2_2[0] * 1000) : ''}</td>
          <td className="rl">{resultadosEspalda.rl_1[1] ? formatTime(resultadosEspalda.rl_1[1] * 1000) : ''}</td>
          <td className="rl">{resultadosEspalda.rl_2[1] ? formatTime(resultadosEspalda.rl_2[1] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">75 E</td>
          <td>{resultadosEspalda.pron[2] ? formatTime(resultadosEspalda.pron[2] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_1[1] ? formatTime(resultadosEspalda.r1_1[1] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_2[1] ? formatTime(resultadosEspalda.r1_2[1] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_3[1] ? formatTime(resultadosEspalda.r1_3[1] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_1[1] ? formatTime(resultadosEspalda.r2_1[1] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_2[1] ? formatTime(resultadosEspalda.r2_2[1] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_1[1] ? formatTime(resultadosEspalda.mvo2_1[1] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_2[1] ? formatTime(resultadosEspalda.mvo2_2[1] * 1000) : ''}</td>
          <td className="rl">{resultadosEspalda.rl_1[2] ? formatTime(resultadosEspalda.rl_1[2] * 1000) : ''}</td>
          <td className="rl">{resultadosEspalda.rl_2[2] ? formatTime(resultadosEspalda.rl_2[2] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">100 E</td>
          <td>{resultadosEspalda.pron[3] ? formatTime(resultadosEspalda.pron[3] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_1[2] ? formatTime(resultadosEspalda.r1_1[2] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_2[2] ? formatTime(resultadosEspalda.r1_2[2] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_3[2] ? formatTime(resultadosEspalda.r1_3[2] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_1[2] ? formatTime(resultadosEspalda.r2_1[2] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_2[2] ? formatTime(resultadosEspalda.r2_2[2] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_1[2] ? formatTime(resultadosEspalda.mvo2_1[2] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_2[2] ? formatTime(resultadosEspalda.mvo2_2[2] * 1000) : ''}</td>
          <td className="rl">{resultadosEspalda.rl_1[3] ? formatTime(resultadosEspalda.rl_1[3] * 1000) : ''}</td>
          <td className="rl">{resultadosEspalda.rl_2[3] ? formatTime(resultadosEspalda.rl_2[3] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">150 E</td>
          <td>{resultadosEspalda.pron[4] ? formatTime(resultadosEspalda.pron[4] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_1[3] ? formatTime(resultadosEspalda.r1_1[3] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_2[3] ? formatTime(resultadosEspalda.r1_2[3] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_3[3] ? formatTime(resultadosEspalda.r1_3[3] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_1[3] ? formatTime(resultadosEspalda.r2_1[3] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_2[3] ? formatTime(resultadosEspalda.r2_2[3] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_1[3] ? formatTime(resultadosEspalda.mvo2_1[3] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_2[3] ? formatTime(resultadosEspalda.mvo2_2[3] * 1000) : ''}</td>
          <td className="rl">{resultadosEspalda.rl_1[4] ? formatTime(resultadosEspalda.rl_1[4] * 1000) : ''}</td>
          <td className="rl">{resultadosEspalda.rl_2[4] ? formatTime(resultadosEspalda.rl_2[4] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">200 E</td>
          <td>{resultadosEspalda.pron[5] ? formatTime(resultadosEspalda.pron[5] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_1[4] ? formatTime(resultadosEspalda.r1_1[4] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_2[4] ? formatTime(resultadosEspalda.r1_2[4] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_3[4] ? formatTime(resultadosEspalda.r1_3[4] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_1[4] ? formatTime(resultadosEspalda.r2_1[4] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_2[4] ? formatTime(resultadosEspalda.r2_2[4] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_1[4] ? formatTime(resultadosEspalda.mvo2_1[4] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_2[4] ? formatTime(resultadosEspalda.mvo2_2[4] * 1000) : ''}</td>
          <td className="rl">{resultadosEspalda.rl_1[5] ? formatTime(resultadosEspalda.rl_1[5] * 1000) : ''}</td>
          <td className="rl">{resultadosEspalda.rl_2[5] ? formatTime(resultadosEspalda.rl_2[5] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">250 E</td>
          <td>{resultadosEspalda.pron[6] ? formatTime(resultadosEspalda.pron[6] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_1[5] ? formatTime(resultadosEspalda.r1_1[5] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_2[5] ? formatTime(resultadosEspalda.r1_2[5] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_3[5] ? formatTime(resultadosEspalda.r1_3[5] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_1[5] ? formatTime(resultadosEspalda.r2_1[5] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_2[5] ? formatTime(resultadosEspalda.r2_2[5] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_1[5] ? formatTime(resultadosEspalda.mvo2_1[5] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_2[5] ? formatTime(resultadosEspalda.mvo2_2[5] * 1000) : ''}</td>
          <td colSpan="4" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">300 E</td>
          <td>{resultadosEspalda.pron[7] ? formatTime(resultadosEspalda.pron[7] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_1[6] ? formatTime(resultadosEspalda.r1_1[6] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_2[6] ? formatTime(resultadosEspalda.r1_2[6] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_3[6] ? formatTime(resultadosEspalda.r1_3[6] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_1[6] ? formatTime(resultadosEspalda.r2_1[6] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_2[6] ? formatTime(resultadosEspalda.r2_2[6] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_1[6] ? formatTime(resultadosEspalda.mvo2_1[6] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_2[6] ? formatTime(resultadosEspalda.mvo2_2[6] * 1000) : ''}</td>
          <td colSpan="4" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">350 E</td>
          <td>{resultadosEspalda.pron[8] ? formatTime(resultadosEspalda.pron[8] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_1[7] ? formatTime(resultadosEspalda.r1_1[7] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_2[7] ? formatTime(resultadosEspalda.r1_2[7] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_3[7] ? formatTime(resultadosEspalda.r1_3[7] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_1[7] ? formatTime(resultadosEspalda.r2_1[7] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_2[7] ? formatTime(resultadosEspalda.r2_2[7] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_1[7] ? formatTime(resultadosEspalda.mvo2_1[7] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_2[7] ? formatTime(resultadosEspalda.mvo2_2[7] * 1000) : ''}</td>
          <td colSpan="4"className="td-button"><button className="calcular" onClick={handleCalcularEspalda}>Calcular</button></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">400 E</td>
          <td>{resultadosEspalda.pron[9] ? formatTime(resultadosEspalda.pron[9] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_1[8] ? formatTime(resultadosEspalda.r1_1[8] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_2[8] ? formatTime(resultadosEspalda.r1_2[8] * 1000) : ''}</td>
          <td className="r1">{resultadosEspalda.r1_3[8] ? formatTime(resultadosEspalda.r1_3[8] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_1[8] ? formatTime(resultadosEspalda.r2_1[8] * 1000) : ''}</td>
          <td className="r2">{resultadosEspalda.r2_2[8] ? formatTime(resultadosEspalda.r2_2[8] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_1[8] ? formatTime(resultadosEspalda.mvo2_1[8] * 1000) : ''}</td>
          <td className="vo2">{resultadosEspalda.mvo2_2[8] ? formatTime(resultadosEspalda.mvo2_2[8] * 1000) : ''}</td>
          <td className="td-button" colSpan="4"> <button className="limpiar"onClick={handleLimpiarEspalda}>Limpiar</button></td>
        </tr>

      </table>
      <table className="tabla-mariposa">
      <tr >
          <td>Mariposa</td>
          <td>Pronostico</td>
          <td colSpan="3" className="r1">RI</td>
          <td colSpan="2" className="r2">RII</td>
          <td colSpan="2" className="vo2">MVO2</td>
          <td colSpan="2" className="rl">RL</td>
          <td colSpan="2" className="vv">V</td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">25 M</td>
          <td className="td-input">
          <input
                type="text"
                pattern="\d{2}:\d{2}:\d{2}"
                title="Ingrese el tiempo en el formato 00:00:00"
                placeholder="Tiempo"
                value={tiempoM}
                onChange={(e) => setTiempoM(e.target.value)}
              />
          </td>
          <td colSpan="9" className="vacio"></td>
          <td className="blanco">{resultadosMariposa.rl_1[0] ? formatTime(resultadosMariposa.rl_1[0] * 1000) : ''}</td>
          <td className="blanco">{resultadosMariposa.rl_2[0] ? formatTime(resultadosMariposa.rl_2[0] * 1000) : ''}</td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">50 M</td>
          <td>{resultadosMariposa.pron[1] ? formatTime(resultadosMariposa.pron[1] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_1[0] ? formatTime(resultadosMariposa.r1_1[0] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_2[0] ? formatTime(resultadosMariposa.r1_2[0] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_3[0] ? formatTime(resultadosMariposa.r1_3[0] * 1000) : ''}</td>
          <td className="r2">{resultadosMariposa.r2_1[0] ? formatTime(resultadosMariposa.r2_1[0] * 1000) : ''}</td>
          <td className="r2">{resultadosMariposa.r2_2[0] ? formatTime(resultadosMariposa.r2_2[0] * 1000) : ''}</td>
          <td className="vo2">{resultadosMariposa.mvo2_1[0] ? formatTime(resultadosMariposa.mvo2_1[0] * 1000) : ''}</td>
          <td className="vo2">{resultadosMariposa.mvo2_2[0] ? formatTime(resultadosMariposa.mvo2_2[0] * 1000) : ''}</td>
          <td className="rl">{resultadosMariposa.rl_1[1] ? formatTime(resultadosMariposa.rl_1[1] * 1000) : ''}</td>
          <td className="rl">{resultadosMariposa.rl_2[1] ? formatTime(resultadosMariposa.rl_2[1] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">75 M</td>
          <td>{resultadosMariposa.pron[2] ? formatTime(resultadosMariposa.pron[2] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_1[1] ? formatTime(resultadosMariposa.r1_1[1] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_2[1] ? formatTime(resultadosMariposa.r1_2[1] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_3[1] ? formatTime(resultadosMariposa.r1_3[1] * 1000) : ''}</td>
          <td className="r2">{resultadosMariposa.r2_1[1] ? formatTime(resultadosMariposa.r2_1[1] * 1000) : ''}</td>
          <td className="r2">{resultadosMariposa.r2_2[1] ? formatTime(resultadosMariposa.r2_2[1] * 1000) : ''}</td>
          <td className="vo2">{resultadosMariposa.mvo2_1[1] ? formatTime(resultadosMariposa.mvo2_1[1] * 1000) : ''}</td>
          <td className="vo2">{resultadosMariposa.mvo2_2[1] ? formatTime(resultadosMariposa.mvo2_2[1] * 1000) : ''}</td>
          <td className="rl">{resultadosMariposa.rl_1[2] ? formatTime(resultadosMariposa.rl_1[2] * 1000) : ''}</td>
          <td className="rl">{resultadosMariposa.rl_2[2] ? formatTime(resultadosMariposa.rl_2[2] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr >
        <tr  className="pintar">
          <td className="td-distancia">100 M</td>
          <td>{resultadosMariposa.pron[3] ? formatTime(resultadosMariposa.pron[3] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_1[2] ? formatTime(resultadosMariposa.r1_1[2] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_2[2] ? formatTime(resultadosMariposa.r1_2[2] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_3[2] ? formatTime(resultadosMariposa.r1_3[2] * 1000) : ''}</td>
          <td className="r2">{resultadosMariposa.r2_1[2] ? formatTime(resultadosMariposa.r2_1[2] * 1000) : ''}</td>
          <td className="r2">{resultadosMariposa.r2_2[2] ? formatTime(resultadosMariposa.r2_2[2] * 1000) : ''}</td>
          <td className="vo2">{resultadosMariposa.mvo2_1[2] ? formatTime(resultadosMariposa.mvo2_1[2] * 1000) : ''}</td>
          <td className="vo2">{resultadosMariposa.mvo2_2[2] ? formatTime(resultadosMariposa.mvo2_2[2] * 1000) : ''}</td>
          <td className="rl">{resultadosMariposa.rl_1[3] ? formatTime(resultadosMariposa.rl_1[3] * 1000) : ''}</td>
          <td className="rl">{resultadosMariposa.rl_2[3] ? formatTime(resultadosMariposa.rl_2[3] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">150 M</td>
          <td>{resultadosMariposa.pron[4] ? formatTime(resultadosMariposa.pron[4] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_1[3] ? formatTime(resultadosMariposa.r1_1[3] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_2[3] ? formatTime(resultadosMariposa.r1_2[3] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_3[3] ? formatTime(resultadosMariposa.r1_3[3] * 1000) : ''}</td>
          <td className="r2">{resultadosMariposa.r2_1[3] ? formatTime(resultadosMariposa.r2_1[3] * 1000) : ''}</td>
          <td className="r2">{resultadosMariposa.r2_2[3] ? formatTime(resultadosMariposa.r2_2[3] * 1000) : ''}</td>
          <td className="vo2">{resultadosMariposa.mvo2_1[3] ? formatTime(resultadosMariposa.mvo2_1[3] * 1000) : ''}</td>
          <td className="vo2">{resultadosMariposa.mvo2_2[3] ? formatTime(resultadosMariposa.mvo2_2[3] * 1000) : ''}</td>
          <td className="rl">{resultadosMariposa.rl_1[4] ? formatTime(resultadosMariposa.rl_1[4] * 1000) : ''}</td>
          <td className="rl">{resultadosMariposa.rl_2[4] ? formatTime(resultadosMariposa.rl_2[4] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">200 M</td>
          <td>{resultadosMariposa.pron[5] ? formatTime(resultadosMariposa.pron[5] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_1[4] ? formatTime(resultadosMariposa.r1_1[4] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_2[4] ? formatTime(resultadosMariposa.r1_2[4] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_3[4] ? formatTime(resultadosMariposa.r1_3[4] * 1000) : ''}</td>
          <td className="r2">{resultadosMariposa.r2_1[4] ? formatTime(resultadosMariposa.r2_1[4] * 1000) : ''}</td>
          <td className="r2">{resultadosMariposa.r2_2[4] ? formatTime(resultadosMariposa.r2_2[4] * 1000) : ''}</td>
          <td className="vo2">{resultadosMariposa.mvo2_1[4] ? formatTime(resultadosMariposa.mvo2_1[4] * 1000) : ''}</td>
          <td className="vo2">{resultadosMariposa.mvo2_2[4] ? formatTime(resultadosMariposa.mvo2_2[4] * 1000) : ''}</td>
          <td className="rl">{resultadosMariposa.rl_1[5] ? formatTime(resultadosMariposa.rl_1[5] * 1000) : ''}</td>
          <td className="rl">{resultadosMariposa.rl_2[5] ? formatTime(resultadosMariposa.rl_2[5] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">250 M</td>
          <td>{resultadosMariposa.pron[6] ? formatTime(resultadosMariposa.pron[6] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_1[5] ? formatTime(resultadosMariposa.r1_1[5] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_2[5] ? formatTime(resultadosMariposa.r1_2[5] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_3[5] ? formatTime(resultadosMariposa.r1_3[5] * 1000) : ''}</td>
          <td className="r2">{resultadosMariposa.r2_1[5] ? formatTime(resultadosMariposa.r2_1[5] * 1000) : ''}</td>
          <td className="r2">{resultadosMariposa.r2_2[5] ? formatTime(resultadosMariposa.r2_2[5] * 1000) : ''}</td>
          <td className="vo2">{resultadosMariposa.mvo2_1[5] ? formatTime(resultadosMariposa.mvo2_1[5] * 1000) : ''}</td>
          <td className="vo2">{resultadosMariposa.mvo2_2[5] ? formatTime(resultadosMariposa.mvo2_2[5] * 1000) : ''}</td>
          <td colSpan="4" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">300 M</td>
          <td>{resultadosMariposa.pron[7] ? formatTime(resultadosMariposa.pron[7] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_1[6] ? formatTime(resultadosMariposa.r1_1[6] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_2[6] ? formatTime(resultadosMariposa.r1_2[6] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_3[6] ? formatTime(resultadosMariposa.r1_3[6] * 1000) : ''}</td>
          <td className="r2">{resultadosMariposa.r2_1[6] ? formatTime(resultadosMariposa.r2_1[6] * 1000) : ''}</td>
          <td className="r2">{resultadosMariposa.r2_2[6] ? formatTime(resultadosMariposa.r2_2[6] * 1000) : ''}</td>
          <td className="vo2">{resultadosMariposa.mvo2_1[6] ? formatTime(resultadosMariposa.mvo2_1[6] * 1000) : ''}</td>
          <td className="vo2">{resultadosMariposa.mvo2_2[6] ? formatTime(resultadosMariposa.mvo2_2[6] * 1000) : ''}</td>
          <td colSpan="4"className="td-button"><button className="calcular" onClick={handleCalcularM}>Calcular</button></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">400 M</td>
          <td>{resultadosMariposa.pron[8] ? formatTime(resultadosMariposa.pron[8] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_1[7] ? formatTime(resultadosMariposa.r1_1[7] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_2[7] ? formatTime(resultadosMariposa.r1_2[7] * 1000) : ''}</td>
          <td className="r1">{resultadosMariposa.r1_3[7] ? formatTime(resultadosMariposa.r1_3[7] * 1000) : ''}</td>
          <td className="r2">{resultadosMariposa.r2_1[7] ? formatTime(resultadosMariposa.r2_1[7] * 1000) : ''}</td>
          <td className="r2">{resultadosMariposa.r2_2[7] ? formatTime(resultadosMariposa.r2_2[7] * 1000) : ''}</td>
          <td className="vo2">{resultadosMariposa.mvo2_1[7] ? formatTime(resultadosMariposa.mvo2_1[7] * 1000) : ''}</td>
          <td className="vo2">{resultadosMariposa.mvo2_2[7] ? formatTime(resultadosMariposa.mvo2_2[7] * 1000) : ''}</td>
          <td className="td-button" colSpan="4"> <button className="limpiar"onClick={handleLimpiarM}>Limpiar</button></td>
        </tr>

      </table>
      <table className="tabla-pecho">
      <tr>
          <td>Pecho</td>
          <td>Pronostico</td>
          <td colSpan="3" className="r1">RI</td>
          <td colSpan="2" className="r2">RII</td>
          <td colSpan="2" className="vo2">MVO2</td>
          <td colSpan="2" className="rl">RL</td>
          <td colSpan="2" className="vv">V</td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">25 P</td>
          <td className="td-input">
          <input
                type="text"
                pattern="\d{2}:\d{2}:\d{2}"
                title="Ingrese el tiempo en el formato 00:00:00"
                placeholder="Tiempo"
                value={tiempoP}
                onChange={(e) => setTiempoP(e.target.value)}
              />
          </td>
          <td colSpan="9" className="vacio"></td>
          <td className="blanco">{resultadosPecho.rl_1[0] ? formatTime(resultadosPecho.rl_1[0] * 1000) : ''}</td>
          <td className="blanco">{resultadosPecho.rl_2[0] ? formatTime(resultadosPecho.rl_2[0] * 1000) : ''}</td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">50 P</td>
          <td>{resultadosPecho.pron[1] ? formatTime(resultadosPecho.pron[1] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_1[0] ? formatTime(resultadosPecho.r1_1[0] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_2[0] ? formatTime(resultadosPecho.r1_2[0] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_3[0] ? formatTime(resultadosPecho.r1_3[0] * 1000) : ''}</td>
          <td className="r2">{resultadosPecho.r2_1[0] ? formatTime(resultadosPecho.r2_1[0] * 1000) : ''}</td>
          <td className="r2">{resultadosPecho.r2_2[0] ? formatTime(resultadosPecho.r2_2[0] * 1000) : ''}</td>
          <td className="vo2">{resultadosPecho.mvo2_1[0] ? formatTime(resultadosPecho.mvo2_1[0] * 1000) : ''}</td>
          <td className="vo2">{resultadosPecho.mvo2_2[0] ? formatTime(resultadosPecho.mvo2_2[0] * 1000) : ''}</td>
          <td className="rl">{resultadosPecho.rl_1[1] ? formatTime(resultadosPecho.rl_1[1] * 1000) : ''}</td>
          <td className="rl">{resultadosPecho.rl_2[1] ? formatTime(resultadosPecho.rl_2[1] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">75 P</td>
          <td>{resultadosPecho.pron[2] ? formatTime(resultadosPecho.pron[2] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_1[1] ? formatTime(resultadosPecho.r1_1[1] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_2[1] ? formatTime(resultadosPecho.r1_2[1] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_3[1] ? formatTime(resultadosPecho.r1_3[1] * 1000) : ''}</td>
          <td className="r2">{resultadosPecho.r2_1[1] ? formatTime(resultadosPecho.r2_1[1] * 1000) : ''}</td>
          <td className="r2">{resultadosPecho.r2_2[1] ? formatTime(resultadosPecho.r2_2[1] * 1000) : ''}</td>
          <td className="vo2">{resultadosPecho.mvo2_1[1] ? formatTime(resultadosPecho.mvo2_1[1] * 1000) : ''}</td>
          <td className="vo2">{resultadosPecho.mvo2_2[1] ? formatTime(resultadosPecho.mvo2_2[1] * 1000) : ''}</td>
          <td className="rl">{resultadosPecho.rl_1[2] ? formatTime(resultadosPecho.rl_1[2] * 1000) : ''}</td>
          <td className="rl">{resultadosPecho.rl_2[2] ? formatTime(resultadosPecho.rl_2[2] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">100 P</td>
          <td>{resultadosPecho.pron[3] ? formatTime(resultadosPecho.pron[3] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_1[2] ? formatTime(resultadosPecho.r1_1[2] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_2[2] ? formatTime(resultadosPecho.r1_2[2] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_3[2] ? formatTime(resultadosPecho.r1_3[2] * 1000) : ''}</td>
          <td className="r2">{resultadosPecho.r2_1[2] ? formatTime(resultadosPecho.r2_1[2] * 1000) : ''}</td>
          <td className="r2">{resultadosPecho.r2_2[2] ? formatTime(resultadosPecho.r2_2[2] * 1000) : ''}</td>
          <td className="vo2">{resultadosPecho.mvo2_1[2] ? formatTime(resultadosPecho.mvo2_1[2] * 1000) : ''}</td>
          <td className="vo2">{resultadosPecho.mvo2_2[2] ? formatTime(resultadosPecho.mvo2_2[2] * 1000) : ''}</td>
          <td className="rl">{resultadosPecho.rl_1[3] ? formatTime(resultadosPecho.rl_1[3] * 1000) : ''}</td>
          <td className="rl">{resultadosPecho.rl_2[3] ? formatTime(resultadosPecho.rl_2[3] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">150 P</td>
          <td>{resultadosPecho.pron[4] ? formatTime(resultadosPecho.pron[4] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_1[3] ? formatTime(resultadosPecho.r1_1[3] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_2[3] ? formatTime(resultadosPecho.r1_2[3] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_3[3] ? formatTime(resultadosPecho.r1_3[3] * 1000) : ''}</td>
          <td className="r2">{resultadosPecho.r2_1[3] ? formatTime(resultadosPecho.r2_1[3] * 1000) : ''}</td>
          <td className="r2">{resultadosPecho.r2_2[3] ? formatTime(resultadosPecho.r2_2[3] * 1000) : ''}</td>
          <td className="vo2">{resultadosPecho.mvo2_1[3] ? formatTime(resultadosPecho.mvo2_1[3] * 1000) : ''}</td>
          <td className="vo2">{resultadosPecho.mvo2_2[3] ? formatTime(resultadosPecho.mvo2_2[3] * 1000) : ''}</td>
          <td className="rl">{resultadosPecho.rl_1[4] ? formatTime(resultadosPecho.rl_1[4] * 1000) : ''}</td>
          <td className="rl">{resultadosPecho.rl_2[4] ? formatTime(resultadosPecho.rl_2[4] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">200 P</td>
          <td>{resultadosPecho.pron[5] ? formatTime(resultadosPecho.pron[5] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_1[4] ? formatTime(resultadosPecho.r1_1[4] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_2[4] ? formatTime(resultadosPecho.r1_2[4] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_3[4] ? formatTime(resultadosPecho.r1_3[4] * 1000) : ''}</td>
          <td className="r2">{resultadosPecho.r2_1[4] ? formatTime(resultadosPecho.r2_1[4] * 1000) : ''}</td>
          <td className="r2">{resultadosPecho.r2_2[4] ? formatTime(resultadosPecho.r2_2[4] * 1000) : ''}</td>
          <td className="vo2">{resultadosPecho.mvo2_1[4] ? formatTime(resultadosPecho.mvo2_1[4] * 1000) : ''}</td>
          <td className="vo2">{resultadosPecho.mvo2_2[4] ? formatTime(resultadosPecho.mvo2_2[4] * 1000) : ''}</td>
          <td className="rl">{resultadosPecho.rl_1[5] ? formatTime(resultadosPecho.rl_1[5] * 1000) : ''}</td>
          <td className="rl">{resultadosPecho.rl_2[5] ? formatTime(resultadosPecho.rl_2[5] * 1000) : ''}</td>
          <td colSpan="2" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">250 P</td>
          <td>{resultadosPecho.pron[6] ? formatTime(resultadosPecho.pron[6] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_1[5] ? formatTime(resultadosPecho.r1_1[5] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_2[5] ? formatTime(resultadosPecho.r1_2[5] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_3[5] ? formatTime(resultadosPecho.r1_3[5] * 1000) : ''}</td>
          <td className="r2">{resultadosPecho.r2_1[5] ? formatTime(resultadosPecho.r2_1[5] * 1000) : ''}</td>
          <td className="r2">{resultadosPecho.r2_2[5] ? formatTime(resultadosPecho.r2_2[5] * 1000) : ''}</td>
          <td className="vo2">{resultadosPecho.mvo2_1[5] ? formatTime(resultadosPecho.mvo2_1[5] * 1000) : ''}</td>
          <td className="vo2">{resultadosPecho.mvo2_2[5] ? formatTime(resultadosPecho.mvo2_2[5] * 1000) : ''}</td>
          <td colSpan="4" className="vacio"></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">300 P</td>
          <td>{resultadosPecho.pron[7] ? formatTime(resultadosPecho.pron[7] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_1[6] ? formatTime(resultadosPecho.r1_1[6] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_2[6] ? formatTime(resultadosPecho.r1_2[6] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_3[6] ? formatTime(resultadosPecho.r1_3[6] * 1000) : ''}</td>
          <td className="r2">{resultadosPecho.r2_1[6] ? formatTime(resultadosPecho.r2_1[6] * 1000) : ''}</td>
          <td className="r2">{resultadosPecho.r2_2[6] ? formatTime(resultadosPecho.r2_2[6] * 1000) : ''}</td>
          <td className="vo2">{resultadosPecho.mvo2_1[6] ? formatTime(resultadosPecho.mvo2_1[6] * 1000) : ''}</td>
          <td className="vo2">{resultadosPecho.mvo2_2[6] ? formatTime(resultadosPecho.mvo2_2[6] * 1000) : ''}</td>
          <td colSpan="4"className="td-button"><button className="calcular" onClick={handleCalcularP}>Calcular</button></td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">400 P</td>
          <td>{resultadosPecho.pron[8] ? formatTime(resultadosPecho.pron[8] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_1[7] ? formatTime(resultadosPecho.r1_1[7] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_2[7] ? formatTime(resultadosPecho.r1_2[7] * 1000) : ''}</td>
          <td className="r1">{resultadosPecho.r1_3[7] ? formatTime(resultadosPecho.r1_3[7] * 1000) : ''}</td>
          <td className="r2">{resultadosPecho.r2_1[7] ? formatTime(resultadosPecho.r2_1[7] * 1000) : ''}</td>
          <td className="r2">{resultadosPecho.r2_2[7] ? formatTime(resultadosPecho.r2_2[7] * 1000) : ''}</td>
          <td className="vo2">{resultadosPecho.mvo2_1[7] ? formatTime(resultadosPecho.mvo2_1[7] * 1000) : ''}</td>
          <td className="vo2">{resultadosPecho.mvo2_2[7] ? formatTime(resultadosPecho.mvo2_2[7] * 1000) : ''}</td>
          <td className="td-button" colSpan="4"> <button className="limpiar"onClick={handleLimpiarP}>Limpiar</button></td>
        </tr>

      </table>
      <table className="tabla-combinado">
      <tr>
          <td>Combinado</td>
          <td>Pronostico</td>
          <td colSpan="3" className="r1">RI</td>
          <td colSpan="2" className="r2">RII</td>
          <td colSpan="2" className="vo2">MVO2</td>
          <td colSpan="2" className="rl">RL</td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">100 CI</td>
          <td className="td-input">
          <input
                type="text"
                pattern="\d{2}:\d{2}:\d{2}"
                title="Ingrese el tiempo en el formato 00:00:00"
                placeholder="Tiempo"
                value={tiempoC}
                onChange={(e) => setTiempoC(e.target.value)}
              /></td>
          <td className="r1">{resultadoscombi.vr1_1[0] ? formatTime(resultadoscombi.vr1_1[0] * 1000) : ''}</td>
          <td className="r1">{resultadoscombi.vr1_2[0] ? formatTime(resultadoscombi.vr1_2[0] * 1000) : ''}</td>
          <td className="r1">{resultadoscombi.vr1_3[0] ? formatTime(resultadoscombi.vr1_3[0] * 1000) : ''}</td>
          <td className="r2">{resultadoscombi.vr2_1[0] ? formatTime(resultadoscombi.vr2_1[0] * 1000) : ''}</td>
          <td className="r2">{resultadoscombi.vr2_2[0] ? formatTime(resultadoscombi.vr2_2[0] * 1000) : ''}</td>
          <td className="vo2">{resultadoscombi.mvo2_1[0] ? formatTime(resultadoscombi.mvo2_1[0] * 1000) : ''}</td>
          <td className="vo2">{resultadoscombi.mvo2_2[0] ? formatTime(resultadoscombi.mvo2_2[0] * 1000) : ''}</td>
          <td className="rl">{resultadoscombi.rl_1[0] ? formatTime(resultadoscombi.rl_1[0] * 1000) : ''}</td>
          <td className="rl">{resultadoscombi.rl_2[0] ? formatTime(resultadoscombi.rl_2[0] * 1000) : ''}</td>
          

        </tr>
        <tr  className="pintar">
          <td className="td-distancia">200 CI</td>
          <td>{resultadoscombi.pron[1] ? formatTime(resultadoscombi.pron[1] * 1000) : ''}</td>
          <td className="r1">{resultadoscombi.vr1_1[1] ? formatTime(resultadoscombi.vr1_1[1] * 1000) : ''}</td>
          <td className="r1">{resultadoscombi.vr1_2[1] ? formatTime(resultadoscombi.vr1_2[1] * 1000) : ''}</td>
          <td className="r1">{resultadoscombi.vr1_3[1] ? formatTime(resultadoscombi.vr1_3[1] * 1000) : ''}</td>
          <td className="r2">{resultadoscombi.vr2_1[1] ? formatTime(resultadoscombi.vr2_1[1] * 1000) : ''}</td>
          <td className="r2">{resultadoscombi.vr2_2[1] ? formatTime(resultadoscombi.vr2_2[1] * 1000) : ''}</td>
          <td className="vo2">{resultadoscombi.mvo2_1[1] ? formatTime(resultadoscombi.mvo2_1[1] * 1000) : ''}</td>
          <td className="vo2">{resultadoscombi.mvo2_2[1] ? formatTime(resultadoscombi.mvo2_2[1] * 1000) : ''}</td>
          <td className="rl">{resultadoscombi.rl_1[1] ? formatTime(resultadoscombi.rl_1[1] * 1000) : ''}</td>
          <td className="rl">{resultadoscombi.rl_2[1] ? formatTime(resultadoscombi.rl_2[1] * 1000) : ''}</td>
        </tr>
        <tr  className="pintar">
          <td className="td-distancia">400 CI</td>
          <td>{resultadoscombi.pron[2] ? formatTime(resultadoscombi.pron[2] * 1000) : ''}</td>
          <td className="r1">{resultadoscombi.vr1_1[2] ? formatTime(resultadoscombi.vr1_1[2] * 1000) : ''}</td>
          <td className="r1">{resultadoscombi.vr1_2[2] ? formatTime(resultadoscombi.vr1_2[2] * 1000) : ''}</td>
          <td className="r1">{resultadoscombi.vr1_3[2] ? formatTime(resultadoscombi.vr1_3[2] * 1000) : ''}</td>
          <td className="r2">{resultadoscombi.vr2_1[2] ? formatTime(resultadoscombi.vr2_1[2] * 1000) : ''}</td>
          <td className="r2">{resultadoscombi.vr2_2[2] ? formatTime(resultadoscombi.vr2_2[2] * 1000) : ''}</td>
          <td className="vo2">{resultadoscombi.mvo2_1[2] ? formatTime(resultadoscombi.mvo2_1[2] * 1000) : ''}</td>
          <td className="vo2">{resultadoscombi.mvo2_2[2] ? formatTime(resultadoscombi.mvo2_2[2] * 1000) : ''}</td>
          <td className="rl">{resultadoscombi.rl_1[2] ? formatTime(resultadoscombi.rl_1[2] * 1000) : ''}</td>
          <td className="rl">{resultadoscombi.rl_2[2] ? formatTime(resultadoscombi.rl_2[2] * 1000) : ''}</td>
        </tr>
        <tr>
          <td  colSpan="9" className="vacio"></td>
          <td className="td-button"><button className="calcular" onClick={handleCalcularC}>Calcular</button></td>
          <td className="td-button"><button className="limpiar" onClick={handleLimpiarC}>Limpiar</button></td>
        </tr>

      </table>
    </div>
  )
}
