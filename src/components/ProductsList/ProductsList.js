import React from 'react';
//components
import { ProductCard } from '../ProductCard/ProductCard';
//hooks
import { useGetProducts } from '../../hooks/useGetProducts';
//css
import './ProductsList.css';

const ProductsList = () => {
  const API = 'https://api.escuelajs.co/api/v1/products'
  const [loading, products] = useGetProducts(API);
 
  return (
    <div className="products-list">
      {loading
      ? <h1>Cargando..</h1>
      : products.map(product => (
        <ProductCard
          name={product.title}
          price={product.price}
          image={product.images[0]}
          key={product.id}
          id={product.id}
        />
      ))}
    </div>
  )
}

export { ProductsList }
