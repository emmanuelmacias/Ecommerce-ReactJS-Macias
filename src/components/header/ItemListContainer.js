import React, { useState, useEffect } from 'react'
import ItemCount from '../toolkit/ItemCount'
import { getItem } from '../toolkit/getItem'
import { products } from '../assets/products'
import { ItemList } from '../items/ItemList'
import Spinner from 'react-bootstrap/Spinner';

export const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItem(products)
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
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {/* <div><h2>{greeting}</h2></div> */}
                        {/* <ItemCount initial={1} stock={15} onAdd={onAdd} /> */}
                        {loading ? <Spinner animation="border" variant="success" /> : <ItemList listProducts={listProducts}/>}
                    </div>
                </div>
            </section>
        </>
    )
}