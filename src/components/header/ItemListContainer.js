import React, { useState, useEffect } from 'react'
import ItemCount from '../toolkit/ItemCount'
import { getItem } from '../toolkit/getItem'
import { products } from '../assets/products'
import { ItemList } from '../items/ItemList'
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greeting}) => {

    let { idCategory } = useParams();

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const URL_BASE = products;
 /*    const URL_CATEGORY = products.map ((product) => {
        return product.category;
    }) */

    let filterCategory = products.filter(product => product.category === idCategory );

    console.log(idCategory)
    console.log(filterCategory)

    useEffect(() => { 
        const getProduct = async () => {
            
            const res = await getItem( (idCategory === undefined) ? URL_BASE : filterCategory);
            setLoading(false)
            setListProducts(res)
        }
        getProduct()
    }, [idCategory])

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