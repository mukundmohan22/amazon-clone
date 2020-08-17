import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../Context/StateContext';
import { getBasketTotal } from '../../Context/reducer';

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        prefix={'₹'}
        thousandSeparator
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />This order contains gift.
            </small>
          </>
        )}
      />
      <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
