import React from 'react'
import { Item } from './Item'

export const ItemList = ({listProducts}) => {

    return (
        <>
            {listProducts.map((product, i) => <Item key={`${product.name}-${i}`} product={product}/>)}
            
        </>
    )
}

