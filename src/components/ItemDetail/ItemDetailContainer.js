import React, { useState, useEffect } from 'react'
import { products } from '../assets/products'
import { ItemDetail } from './ItemDetail'
import Spinner from 'react-bootstrap/Spinner';
import { getItem } from '../toolkit/getItem'

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItem(products)
            .then(res => {
                setLoading(false)
                setProduct(res)
            })
    }, [])

    return (
        <>
            <section className="py-5">
                {loading ? <Spinner animation="border" variant="success" /> : <ItemDetail product={product[0]} />}
            </section>
        </>
    )
}