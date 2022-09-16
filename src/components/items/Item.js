import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import styles from '../toolkit/ItemCount.css'


export const Item = ({product}) => {
    return (
        <>
            <div className="container">
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>{product.name}</Card.Title>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                    <Container style={styles}>
                    </Container>
                </Card.Body>
                </Card>
            </div>
        </>
    )
}
