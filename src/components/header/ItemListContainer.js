import React, { useState, useEffect } from 'react'
import styles from './hero.css'
import ItemCount from '../toolkit/ItemCount'
import { customFetch } from '../toolkit/customFetch'
import { products } from '../assets/products'
import { ItemList } from '../items/ItemList'
import {Spinner} from '@chakra-ui/react'

export const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProducts(res)
            })

    }, [])

    console.log(listProducts)

    const onAdd = (counter) => {
        console.log(`Se agregaron al carrito ${counter} productos.`);
    }

    return (
        <section style={styles} className="d-flex align-items-center">
            <div className="container d-flex justify-content-center containerHero" >
                <div className="row">
                    <div className="col">
                        <div><h2>{greeting}</h2></div>
                        {/* <ItemCount initial={1} stock={15} onAdd={onAdd} /> */}
                    </div>
                    {loading ? <Spinner/> : <ItemList listProducts={listProducts}/>}
                    
                </div>
            </div>
        </section>
        
    )
}