// TProno.jsx
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { CalcProno } from "./CalcProno";
import "../tiempoP.css";

export const TProno = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    setFormData(data);
  };

  const onClear = () => {
    setFormData(null);
    reset();
  };

  return (
    <div className="container">
      <div className="formTimes">
        <h1>Información</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Tiempo Actual (mm:ss:msms) :</label>
            <input
              type="text"
              name="TA"
              placeholder="Cual es mi tiempo actual"
              {...register("TA", {
                required: "este campo es obligatorio",
                pattern: {
                  value: /^([0-5]\d):([0-5]\d):([0-9]\d)$/,
                  message: "debe estar en formato hh:mm:ss (00:00:00)"
                },
              })}
            />
            {errors.TA && <span>{errors.TA.message}</span>}
          </div>
          <div>
            <label>Marca A (mm:ss:msms) :</label>
            <input
              type="text"
              name="MA"
              placeholder="Marca A"
              {...register("MA", {
                pattern: {
                  value: /^([0-5]\d):([0-5]\d):([0-9]\d)$/,
                  message: "debe estar en formato hh:mm:ss (00:00:00)"
                },
              })}
            />
            {errors.MA && <span>{errors.MA.message}</span>}
          </div>
          <div>
            <label>Distancia (mts) :</label>
            <input
              type="text"
              name="d"
              placeholder="Distancia de la prueba"
              {...register("d", {
                pattern: {
                  value: /^\d+$/,
                  message: "debe ser un número entero",
                },
              })}
            />
            {errors.d && <span>{errors.d.message}</span>}
          </div>
          <div>
            <label>Porcentaje a mejorar (%) :</label>
            <input
              type="text"
              name="porc"
              placeholder="Cuanto % voy a mejorar"
              {...register("porc", {
                pattern: {
                  value: /^\d+(\.\d+)?$/,
                  message: "debe ser un número",
                },
                min: {
                  value: 0,
                  message: "debe ser un número de 0 a 100",
                },
                max: {
                  value: 100,
                  message: "debe ser un número de 0 a 100",
                },
              })}
            />
            {errors.porc && <span>{errors.porc.message}</span>}
          </div>
          <div>
            <label>Numero de Competencias :</label>
            <input
              type="text"
              name="eventos"
              placeholder="Durante cuantos eventos"
              {...register("eventos", {
                pattern: {
                  value: /^\d+$/,
                  message: "debe ser un número entero",
                },
              })}
            />
            {errors.eventos && <span>{errors.eventos.message}</span>}
          </div>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre (Opcional)"
              {...register("nombre")}
            />
          </div>
          <div>
            <label>Fecha:</label>
            <input
              type="date"
              name="fecha"
              {...register("fecha")}
            />
          </div>
          <div>
            <input type="submit" value="Calcular" />
          </div>
        </form>
      </div>
      {formData && <CalcProno formData={formData} onClear={onClear} />}
    </div>
  );
};

export default TProno;