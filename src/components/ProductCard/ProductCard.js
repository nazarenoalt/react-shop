import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import './ProductCard.css'
//assets
import addToCartIcon from '../../../public/assets/icons/bt_add_to_cart.svg'

const ProductCard = (product) => {
  const { addToCart } = useContext(AppContext);
  const handleCart = (item) => {
    addToCart(item)
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={`${product.name} image`} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.name}</p>
        </div>
        <figure onClick={() => handleCart(product)}>
          <img src={addToCartIcon} alt="Add To Cart" />
        </figure>
      </div>
    </div>

  )
}

export { ProductCard }
