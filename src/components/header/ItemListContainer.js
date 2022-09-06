import React from 'react'
import styles from './hero.css'

export const ItemListContainer = ({greeting}) => {
    return (
        <section style={styles} class="d-flex align-items-center">
            <div className="container d-flex justify-content-center containerHero" >
                <div className="row">
                    <div className="col">
                        <div><h2>{greeting}</h2></div>
                    </div>
                </div>
            </div>
        </section>
    )
}