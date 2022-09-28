import React, { useState, useEffect } from 'react'
import { products } from '../assets/products'
import { ItemDetail } from './ItemDetail'
import Spinner from 'react-bootstrap/Spinner';
import { getItem } from '../toolkit/getItem'
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

    let { idProduct } = useParams();

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    let filterProduct = products.filter(product => product.id === idProduct);
    
    console.log(filterProduct)
    
    useEffect(() => {
        getItem(products)
            .then(res => {
                setLoading(false)
                setProduct(res)
            })
    }, [idProduct])

    return (
        <>
            <section className="py-5">
                {loading ? <Spinner animation="border" variant="success" /> : <ItemDetail product={filterProduct} />}
            </section>
        </>
    )
}