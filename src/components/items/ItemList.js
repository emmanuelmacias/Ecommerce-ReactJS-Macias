import React from 'react'
import { Item } from './Item'

export const ItemList = ({ listProducts }) => {
    
    return (
        <div>
            {listProducts.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    )
}