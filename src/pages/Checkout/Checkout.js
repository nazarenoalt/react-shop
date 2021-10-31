import React from 'react'
import { ShoppingCart } from '../../components/ShoppingCart/ShoppingCart';
import { Header } from '../../components/Header/Header';
import './Checkout.css';
const Checkout = () => {

  return (
    <React.Fragment>
    <Header />
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="title">My order</h1>
        <div className="my-order-content">
          <div className="order">
            <p>
              <span>03.25.21</span>
              <span>3 articles</span>
            </p>
            <p>${120+120+120}</p>
          </div>
          
          <ShoppingCart
          name="Bike"
          price="120.00"
          />
          <ShoppingCart
          name="Bike"
          price="120.00"
          />
          <ShoppingCart
          name="Bike"
          price="120.00"
          />
          </div>
        </div>
      </div>
    </React.Fragment>

  )
}

export { Checkout }
