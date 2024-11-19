// Banner.js
import React from "react";
import ImageSection from "./section/ImageSection";
import CarouselSection from "./section/CarouselSection";

// Image imports
import bannerone from "./image/banner_one.png";
import bannertwo from "./image/banner_two.png";
import bannerthree from "./image/banner_three.jpg";
import bannerfour from "./image/banner_four.png";

function Banner() {
  const carouselOptions = {
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      600: { items: 1 },
      700: { items: 1 },
      800: { items: 1 },
      1000: { items: 1 },
    },
    nav: false,
    dots: true,
  };

  const carouselImages = {
    leftImage: bannerthree,
    carouselImages: [
      bannerfour,
      bannerfour,
      bannerfour,
      bannerfour,
      bannerfour,
    ],
  };

  return (
    <>
      <div className="sectionthird">
        <div className="container">
          <div className="thirdsection_image">
            <ImageSection
              imageSrc={bannerone}
              altText="Banner One"
              sectionClass="sectionsecond"
            />
            <ImageSection
              imageSrc={bannertwo}
              altText="Banner Two"
              sectionClass="sectionthird"
            />
          </div>
        </div>
      </div>

      <CarouselSection
        images={carouselImages}
        options={carouselOptions}
        sectionClass="sectionforth"
      />
    </>
  );
}

export default Banner;
