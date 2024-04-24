import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Calc from "./Calc";

const TimesForm = () => {
        const {
          register,
          formState: { errors },
          handleSubmit,
          reset,
        } = useForm();
      
        const [formData, setFormData] = useState(null);
      
        const onSubmit = (data) => {
          setFormData(data);
        };
      
        const onClear = () => {
          setFormData(null);
          reset();
        };
      

  return (
    <>
      <div className="formTimes">
        <h1>Información Tiempo</h1>
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
      value: /^([0-5]?[0-9]):[0-5][0-9]:[0-9]{2}$/,
      message: "debe estar en formato mm:ss:msms",
    },
  })}
/>
  {errors.TA && <span>{errors.TA.message}</span>}
</div>
          <div>
            <label>Distancia (mts) :</label>
            <input
              type="text"
              name="d"
              placeholder="Distancia de la prueba"
              {...register("d", {
                required: "este campo es obligatorio",
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
                required: "este campo es obligatorio",
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
                required: "este campo es obligatorio",
                pattern: {
                  value: /^\d+$/,
                  message: "debe ser un número entero",
                },
              })}
            />
            {errors.eventos && <span>{errors.eventos.message}</span>}
          </div>
          <div>
            <input type="submit" value="Calcular" />
          </div>
        </form>
      </div>
      {formData && <Calc formData={formData} onClear={onClear} />}
    </>
  );
};

export default TimesForm;