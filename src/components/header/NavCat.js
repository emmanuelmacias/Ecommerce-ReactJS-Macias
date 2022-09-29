import React from 'react'
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const categories = [
        { id: 0, name: 'Perfumes Ambientales', ruta: '/perfumes-ambientales' },
        { id: 1, name: 'Perfumes Automóvil', ruta: '/perfumes-automovil' },
        { id: 2, name: 'Línea Esenciales', ruta: '/esenciales' },
        { id: 3, name: 'Limpieza', ruta: '/limpieza' },
    ]

export const NavCat = () => {
    return (
        <Nav>
            {categories.map((category) => {
                return <NavLink key={category.id} to={category.ruta} sytle={styles.links}> {category.name} </NavLink>
            })}
        </Nav>
    )
}

const styles = {
    links: {
        padding: 10,
    }
}
