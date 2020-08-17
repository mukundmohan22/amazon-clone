import React from 'react'
import "./Product.css"
import { useStateValue } from '../../Context/StateContext'

const Product = ({ id, image, title, price, rating }) => {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id, title, image, price, rating
      }
    })
  }
  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            Array(5).fill().map((_, index) => {
              if (index <= rating - 1) {
                return <span key={index} aria-label="ss" role="img">⭐</span>
              } else {
                return <span key={index} aria-label="ss" role="img">☆</span>
              }
            }
            )
          }
        </div>
      </div>
      <img src={image} alt="" className="product__image" />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  )
}

export default Product
