import React, { useState, useEffect } from 'react';
import './App.css';

import ProductCard from './components/ProductCard';

import products from './products';

const App = () => {
	const [productList, setProducts] = useState([]);

	const cartClick = (e, product, i) => {
		e.preventDefault();

		let updatedProductList = [...productList];

		updatedProductList[i] = Object.assign(updatedProductList[i], { soldOut: true})

		setProducts(updatedProductList);
	};

	useEffect(() => {
		setProducts(products);
	}, [setProducts])


	return (
		<>
			<main>
				<h1>Products</h1>
				<div className="products-container">
					{ productList && productList.map((product, i) => {
						return (
							<ProductCard 
								key={`product-${i}`}
								productSoldOut={product.soldOut ? true : false }
								productImg={product.img}
								productAltText={product.description}
								productTitle={product.title}
								productPrice={product.price}
								productRating={product.rating}
								addCartClick={(e) => cartClick(e, product, i)}
							/>
						)
					})}
				</div>
			</main>
		</>
	);
}

export default App;
