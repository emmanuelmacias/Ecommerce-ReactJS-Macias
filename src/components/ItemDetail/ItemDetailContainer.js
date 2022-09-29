import React, { useState, useEffect } from 'react'
import { products } from '../assets/products'
import { ItemDetail } from './ItemDetail'
import Spinner from 'react-bootstrap/Spinner';
import { getItem } from '../toolkit/getItem'
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

    let { id } = useParams();

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const URL_BASE = products;

    useEffect(() => { 
        const getProduct = async () => {
            const res = await getItem(URL_BASE, parseInt(id));
            setLoading(false)
            setProduct(res)
        }
        getProduct()
    }, [id])

    return (
        <>
            <section className="py-5">
                {loading ? <Spinner animation="border" variant="success" /> : <ItemDetail product={product} />}
            </section>
        </>
    )
}