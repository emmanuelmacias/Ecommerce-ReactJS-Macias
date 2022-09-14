import React from 'react'
import styles from './hero.css'
import ItemCount from '../toolkit/ItemCount'

export const ItemListContainer = ({greeting}) => {

    const onAdd = (counter) => {
        console.log(`Se agregaron al carrito ${counter} productos.`);
    }

    return (
        <section style={styles} className="d-flex align-items-center">
            <div className="container d-flex justify-content-center containerHero" >
                <div className="row">
                    <div className="col">
                        <div><h2>{greeting}</h2></div>
                        <ItemCount initial={1} stock={15} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </section>
    )
}