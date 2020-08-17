import React from 'react'
import { useStateValue } from '../../Context/StateContext'
import "./Checkout.css"
import ad from "../../Resources/images/ad.png"
import CheckoutProduct from '../../Component/CheckoutProduct/CheckoutProduct'
import Subtotal from '../../Component/Subtotal/Subtotal'

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={ad} alt="" className="checkout__ad" />
        {basket?.length === 0 ? (
          <div className="checkout__empty">
            <h2>Your Shopping Cart is empty.</h2>
            <p>Your Shopping Cart lives to serve. Give it purpose--fill it with books, CDs, videos, DVDs, electronics, and more.</p>
          </div>
        ) : (
            <div>
              <h2 className="checkout__title">Your shopping basket</h2>
              {
                basket.map((item, index) => (
                  <CheckoutProduct key={index} {...item} />
                ))
              }
            </div>
          )
        }
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  )
}

export default Checkout
