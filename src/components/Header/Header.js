import React, { useState, useContext } from 'react'
import AppContext from '../../context/AppContext';
import './Header.css';
//assets
import Logo from '@logos/logo_yard_sale.svg'
import IconShoppingCart from '@icons/icon_shopping_cart.svg'
import { BurgerMenu } from '@components/BurgerMenu/BurgerMenu';
import { Menu } from '@components/Menu/Menu'
import { MyOrder } from '@containers/MyOrder/MyOrder'


const Header = () => {
 
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false)
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  const handleToggleOrder = () => {
    setToggleOrders(!toggleOrders);
  }

  return (
    <nav className="Header__navbar">
      <BurgerMenu />
      <div className="navbar-left">
        <a href="/">
          <img src={Logo} alt="logo" className="Header__logo" />
        </a>
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Clothes</a>
          </li>
          <li>
            <a href="#">Electronics</a>
          </li>
          <li>
            <a href="#">Furnitures</a>
          </li>
          <li>
            <a href="#">Toys</a>
          </li>
          <li>
            <a href="#">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
          <li className="navbar-shopping-cart"
              onClick={handleToggleOrder}
          >
            <img src={IconShoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>

  )
}

export { Header }
