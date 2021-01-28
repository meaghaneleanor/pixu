import React from 'react';

const StarRating = ({numberOfStars}) => {
	return (
		<div className="product-card__rating-container" aria-label={`Customer rating: ${numberOfStars} out of 5 stars`}>
			{[...Array(5)].map((star, index) => {
				return (
					<span key={index} className={index < numberOfStars ? `product-card__rating--filled`: `product-card__rating--unfilled`}>
						<svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<polygon id="star" points="6.91773333 6.1328 10 3.75 6.25 3.75 5 0 3.75 3.75 0 3.75 3.086 6.12293333 1.87493333 10 5.00466667 7.6 8.1276 10"></polygon>
						</svg>
					</span>
				)
			})}
		</div>
	)
}

export default StarRating;