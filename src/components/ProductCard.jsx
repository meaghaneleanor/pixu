import React from 'react';

import StarRating from './StarRating';

const ProductCard = ({productImg, productAltText, productTitle, productPrice, productRating}) => {
	return (
		<a href="#" className="product-card">
			<div className="product-card__image-container">
				<img className="product-card__image" src={productImg} alt={productAltText}/>
				<span className="product-card__button--add">Add to cart</span>
			</div>
			<p>{productTitle}</p>
			<p>${productPrice}</p>
			<StarRating numberOfStars={productRating}/>
		</a>
	)
}

export default ProductCard;