import React, { useContext } from 'react';
import { ShoppingCart } from '@components/ShoppingCart/ShoppingCart';
import AppContext from '../../context/AppContext';
import './MyOrder.css';
import arrow from '@icons/flechita.svg';

const MyOrder = () => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (acum, currentValue) => acum + currentValue.price;
		return state.cart.reduce(reducer, 0)
	}

	return (
		<aside className="MyOrder">
			<div className="MyOrder__title-container">
				<img src={arrow} alt="arrow" />
				<p className="MyOrder__title">My order</p>
			</div>
			<div className="MyOrder__my-order-content">
				{state.cart.map(product => {
					console.log(product)
					return (
					<ShoppingCart name={product.name} key={`orderItem-${product.id}`} image={product.image} price={product.price} id={product.id} />
				)
				})}
				<div className="MyOrder__order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="MyOrder__primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export { MyOrder }