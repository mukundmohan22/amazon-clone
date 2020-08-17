import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from '../../Context/StateContext'

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id
    })
  }

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProdcut__info">
        <p className="checkoutProduct__title">
          {title}
        </p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
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
        <button onClick={removeFromBasket}>Remove from cart</button>

      </div>
    </div>
  )
}

export default CheckoutProduct
