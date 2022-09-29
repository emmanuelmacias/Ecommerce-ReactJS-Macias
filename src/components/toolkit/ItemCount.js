import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';


const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    const add = () => counter < stock && setCounter(counter + 1);

    const subtract = () => counter > initial && setCounter(counter - 1);

/*     const addToCart = () => {
        onAdd(counter);
    } */

 /*    const onAdd = (counter) => {
        console.log(`Se agregaron al carrito ${counter} productos.`);
    } */

    return (
        <>
            <Button variant="danger" disabled={counter === initial} onClick={subtract}>-</Button>
            <div><p className='px-2'>{counter}</p></div>
            <Button variant="success" disabled={counter === stock} onClick={add}>+</Button>
            <div className="d-flex px-4">
                <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={() => onAdd(counter)}>
                    Agregar al carrito
                </button>
            </div>
        </>
    )
}

export default ItemCount;
