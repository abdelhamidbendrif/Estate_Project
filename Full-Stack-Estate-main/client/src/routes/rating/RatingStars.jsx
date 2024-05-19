import React from "react";

const RatingStars = ({ rating, numRatings }) => {
  // Calculate the average rating percentage out of 5 stars
  const avgRatingPercentage = (rating / 5) * 100;

  // Round the average rating to the nearest 0.5
  const roundedRating = Math.round(rating * 2) / 2;

  // Create an array to represent the filled and empty stars
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (roundedRating - i >= 0.5) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    } else if (roundedRating - i === 0) {
      stars.push(<i key={i} className="far fa-star"></i>);
    } else {
      stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
    }
  }

  return (
    <div className="rating-stars">
      <div className="stars">{stars}</div>
      <div className="average-rating">
        <b>{roundedRating}</b> ({numRatings} {numRatings === 1 ? "rating" : "ratings"})
      </div>
    </div>
  );
};

export default RatingStars;
