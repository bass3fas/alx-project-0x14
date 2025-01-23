import React from 'react';

interface MovieCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default MovieCard;
