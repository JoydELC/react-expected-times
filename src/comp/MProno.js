// TProno.jsx
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { CalcMProno } from "./CalcMProno";
import "../tiempoP.css";

export const MProno = () => {
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
                        <label>Tiempo Actual (mm:ss:msms) :</label>
                        <input
                            type="text"
                            name="TA"
                            placeholder="Cual es mi tiempo actual"
                            {...register("TA", {
                                required: "Este campo es obligatorio",
                                pattern: {
                                    value: /^([0-5]\d):([0-5]\d):([0-9]\d)$/,
                                    message: "Debe estar en formato mm:ss:msms (00:00:00)"
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
                                required: "Este campo es obligatorio",
                                pattern: {
                                    value: /^([0-5]\d):([0-5]\d):([0-9]\d)$/,
                                    message: "debe estar en formato mm:ss:msms (00:00:00)"
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
                                required: "Este campo es obligatorio",
                                pattern: {
                                    value: /^\d+$/,
                                    message: "debe ser un número entero",
                                },
                            })}
                        />
                        {errors.d && <span>{errors.d.message}</span>}
                    </div>
                    <div>
                        <input type="submit" value="Calcular" />
                    </div>
                </form>
            </div>
            {formData && <CalcMProno formData={formData} onClear={onClear} />}
        </div>
    );
};

export default MProno;