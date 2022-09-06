import React from 'react'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

export const CartWidget = () => {
    return (
        <>
        <div className="cart-area">
            <a cid="CartBtn" style={styles.links}><ShoppingCartTwoToneIcon color="success" fontSize="medium"/><span style={styles.span}>1</span></a>
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