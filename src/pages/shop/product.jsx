import React from 'react'

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
  return (
    <div className="product">
        <img src={productImage} />
        <div className="description">
            <p><strong>{productName}</strong></p>
            <p>${price}</p>
            <button className="addToCartBtn">Add to cart</button>
        </div>
    </div>
  )
}
