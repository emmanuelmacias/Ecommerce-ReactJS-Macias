import React, { useState, useEffect } from 'react'
import { getProductFilter } from '../toolkit/getItem'
import { products } from '../assets/products'
import { ItemList } from '../items/ItemList'
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greeting}) => {

    let { id } = useParams();

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    let filterCategory = products.filter(product => product.category === id ); 


    useEffect(() => { 
        const getProduct = async () => {
            const res = await getProductFilter( (id === undefined) ? products : filterCategory);
            /* const res = await getCategory(URL_BASE, id); */
            setLoading(false)
            setListProducts(res)
            console.log(res)
        }
        getProduct()
    }, [id])
    
    
    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {/* <div><h2>{greeting}</h2></div> */}
                        {loading ? <Spinner animation="border" variant="success" /> : <ItemList listProducts={listProducts}/>}
                    </div>
                </div>
            </section>
        </>
    )
}