import React from 'react';
import { Header } from '../../components/Header/Header';
import { ShoppingCart } from '../../components/ShoppingCart/ShoppingCart';

import './Orders.css';

const Orders = () => {
	return (
    <React.Fragment>
      <Header />
      <div className="Orders">
        <div className="Orders-container">
          <h1 className="title">My orders</h1>
          <div className="Orders-content">
            <ShoppingCart name="Bike" price="120,00" />
            <ShoppingCart name="Bike" price="120,00" />
          </div>
        </div>
      </div>
    </React.Fragment>
	);
}

export { Orders };