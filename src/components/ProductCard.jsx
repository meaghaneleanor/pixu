import React from 'react';

import StarRating from './StarRating';

const ProductCard = ({productImg, productAltText, productTitle, productPrice, productRating, addCartClick, productSoldOut}) => {
	return (
		<a href="#" className={`product-card ${productSoldOut ? 'product-card--product-sold-out' : ''}`} onClick={addCartClick} aria-label={productSoldOut && `${productTitle} is sold out`}>
			<div className="product-card__image-container">
				<img className="product-card__image" src={productImg} alt={productAltText}/>
				{ productSoldOut && 
					<div className="product-card__sold-out-banner">
						<p>Sold out</p>
					</div>
				}
				{ !productSoldOut && <span className="product-card__button--add">Add to cart</span>}
			</div>
			<p className="product-card__title">{productTitle}</p>
			<p>${productPrice}</p>
			<StarRating numberOfStars={productRating}/>
		</a>
	)
}

export default ProductCard;