import React, { useState } from "react";
import TimesForm from "./TimesForm.js";
import Table from "./Table.js";

function SpeedTable() {
    const [speedTableON, setSpeedTableON] = useState(true);
    const [message, setMessage] = useState("Tiempo pronostico")

    function handleClick() {
        setSpeedTableON(!speedTableON);
        if (speedTableON) {
            console.log("Show speed table");
            setMessage("Tabla de tiempos");
        } else {
            console.log("Show times");
            setMessage("Tiempo pronostico");
            
        }
    }

    return (
        <div className="container-app">
            <button onClick={handleClick}>
                {message}
            </button>
            {speedTableON ? <h1>CALCULAR MI TABLA DE VELOCIDADES</h1> : <h1>CALCULAR MI TIEMPO PRONOSTICO</h1>}
            {!speedTableON && <TimesForm />}
            {speedTableON && <Table/>}
        </div>
    );
}

export default SpeedTable;
