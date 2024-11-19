import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CarouselSection = ({ images, options, sectionClass }) => {
  return (
    <div className={sectionClass}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className={`${sectionClass}_left`}>
              <img src={images.leftImage} alt="Left Section" />
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${sectionClass}_right`}>
              <OwlCarousel className="owl-theme" loop margin={20} autoplay {...options}>
                {images.carouselImages.map((image, index) => (
                  <div className="item" key={index}>
                    <img src={image} alt={`Carousel Item ${index + 1}`} />
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
