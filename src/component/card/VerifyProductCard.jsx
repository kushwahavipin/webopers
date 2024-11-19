import React from 'react';

const VerifyProductCard = ({ image, title, originalPrice, discountedPrice }) => {
  return (
    <div className="sectionfifth_firstcard">
      <div className="sectionfifth_firstcard_image">
        <img src={image} alt={title} />
      </div>
      <div className="sectionfifth_firstcard_title">{title}</div>
      <div className="sectionfifth_firstcard_price">
        Rs. <del>{originalPrice}</del> <span>{discountedPrice}/-</span>
      </div>
    </div>
  );
};

export default VerifyProductCard;
