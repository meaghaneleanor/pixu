import React from 'react';

const StarRating = ({numberOfStars}) => {
	return (
		<div aria-label={`Customer rating: ${numberOfStars} out of 5 stars`}>
			{[...Array(5)].map((star, index) => {
				return (
					index < numberOfStars ? (
						<span key={index} className="star">&#9733;</span>
					) : (
						<span key={index} className="star">&#9734;</span>
					)
				)
			})}
		</div>
	)
}

export default StarRating;