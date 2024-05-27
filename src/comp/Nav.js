import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <h1>Aplicacion</h1>
            <div className='nav__menu'
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul
                className={menuOpen ? "open" : ""}
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            >
                <li>
                    <NavLink to="/tp">Tiempo Pronostico</NavLink>
                </li>
                <li>
                    <NavLink to="/tv">Tabla Velocidades</NavLink>
                </li>
                <li>
                    <NavLink to="/te">Tabla Estilos Progresivo</NavLink>
                </li>
            </ul>
        </nav>
    )
}
