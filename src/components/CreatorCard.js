import React from 'react';

const CreatorCard = ({ creator }) => {
  return (
    <div className="creator-card">
      <h3>{creator.name}</h3>
      <p>{creator.description}</p>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Channel</a>
    </div>
  );
};

export default CreatorCard;

