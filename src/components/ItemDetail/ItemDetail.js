import React from 'react'
import ItemCount from '../toolkit/ItemCount'

export const ItemDetail = ({product}) => {

    return (
        <>
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={product.image} alt="..." /></div>
                    <div className="col-md-6">
                        <div className="small mb-1">SKU: 000-{product.id}</div>
                        <h1 className="display-5 fw-bolder">{product.name}</h1>
                        <div className="fs-5 mb-5">
                            <span>${product.price}</span>
                        </div>
                        <p className="lead">{product.description}</p>
                        <div className="d-flex py-3">
                            <ItemCount initial={1} stock={15} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
