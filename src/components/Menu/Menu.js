import React from 'react'
import './Menu.css';

const Menu = () => {
  return (
    <div className="desktop-menu">
      <ul>
        <li>
          <a href="/orders" className="title">My orders</a>
        </li>
        <li>
          <a href="/my-account">My account</a>
        </li>
        <li>
          <a href="/login">Sign out</a>
        </li>
      </ul>
    </div>

  )
}

export { Menu }
