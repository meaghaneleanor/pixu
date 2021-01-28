import React from 'react';
import './App.css';

import ProductCard from './components/ProductCard';

import products from './products';

const App = () => {
	return (
		<>
			<main>
				<h1>Products</h1>
				<div className="products-container">
					{ products.map((product, i) => {
						return (
							<ProductCard 
								key={`product-${i}`}
								productImg={product.img}
								productAltText={product.description}
								productTitle={product.title}
								productPrice={product.price}
								productRating={product.rating}
							/>
						)
					})}
				</div>
			</main>
		</>
	);
}

export default App;
