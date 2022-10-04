import React, { useContext } from 'react'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { CartContext } from '../Context/CartContext';

export const CartWidget = () => {

    const { quantity } = useContext(CartContext);

    return (
        <>
        <div className="cart-area">
            <ShoppingCartTwoToneIcon color="success" fontSize="medium"/><span style={styles.span}>{quantity}</span>
        </div>
        </>
    )
}

const styles = {
    span: {
        color: "gray",
    },
    links: {
        textDecoration: "none",
    }
}