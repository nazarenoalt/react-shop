import React, { useContext } from 'react'
import './ShoppingCart.css';
import close from '@icons/icon_close.png'
import AppContext from '../../context/AppContext';

const ShoppingCart = (product) => {
  const { removeFromCart } = useContext(AppContext)
  return (
    <div className="shopping-cart">
        <figure>
          <img src={product.image} alt={product.name} />
        </figure>
        <p>{product.name}</p>
        <p>${product.price}</p>
        <img src={close} alt="close" onClick={() => removeFromCart(product)} />
      </div>
  )
}

export { ShoppingCart }
