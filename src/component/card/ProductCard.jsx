import React from 'react';

const ProductCard = ({ title, originalPrice, discountedPrice, imageSrc, altText }) => {
  return (
    <div className="col-md-6">
      <div className="sectionfirst_right_card">
        <div className="sectionfirst_right_card_image">
          <img src={imageSrc} alt={altText} />
        </div>
        <div className="sectionfirst_right_card_content">
          <div className="row">
            <div className="col-md-8 col-8">
              <div className="sectionfirst_right_card_content_title">
                {title}
              </div>
            </div>
            <div className="col-md-4 col-4">
              <div className="sectionfirst_right_card_content_price">
                <del>₹ {originalPrice}</del>
                <br />
                <span>₹ {discountedPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
