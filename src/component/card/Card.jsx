// Card.js
import React from 'react';

const Card = ({ imageSrc, title }) => {
  return (
    <div className="col-md-6 col-6">
      <div className="sectionfirst_left_card">
        <div className="sectionfirst_left_card_image">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="sectionfirst_left_card_title">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Card;
