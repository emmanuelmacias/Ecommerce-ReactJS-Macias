import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const categories = [
        { id: 0, name: 'Perfumes Ambientales', ruta: '/category/perfumes-ambientales' },
        { id: 1, name: 'Perfumes Automóvil', ruta: '/category/perfumes-automovil' },
        { id: 2, name: 'Línea Esenciales', ruta: '/category/esenciales' },
        { id: 3, name: 'Limpieza', ruta: '/category/limpieza' },
    ]

export const NavCat = () => {
    return (
        <nav>
                {categories.map((category) => {
                    return <NavLink key={category.id} to={category.ruta} sytle={styles.links}> {category.name} </NavLink>
                })}
        </nav>
    )
}

const styles = {
    links: {
        padding: 10,
    }
}
