import React from 'react';

const ImageSection = ({ imageSrc, altText, sectionClass }) => {
  return (
    <div className={sectionClass}>
      <div className="container">
        <div className={`${sectionClass}_image`}>
          <img src={imageSrc} alt={altText} />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
