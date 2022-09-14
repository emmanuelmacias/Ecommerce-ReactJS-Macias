import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import styles from './ItemCount.css'




const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    const add = () => counter < stock && setCounter(counter + 1);

    const subtract = () => counter > initial && setCounter(counter - 1);

    const addToCart = () => {
        onAdd(counter);
    }

    return (
        <>
            <div className="container">
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Producto 1</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, perspiciatis!
                    </Card.Text>
                    <Container style={styles}>
                        <Button variant="danger" disabled={counter === initial} onClick={subtract}>-</Button>
                        <p>{counter}</p>
                        <Button variant="success" disabled={counter === stock} onClick={add}>+</Button>
                    </Container>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><Button variant="dark" className="btn mt-auto" onClick={addToCart}>Agregar al carrito</Button></div>
                    </div>
                </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default ItemCount;
