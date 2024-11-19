import React from 'react';
import Intro from './Intro_slider';
import Product from "./section/Product_Section";
import Banner from './Banner'
import VerifyProductSection from './section/VerifyProductSection';
import BrandSection from './BrandSection';
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <Intro/>
    <Product/>
    <Banner/>
    <VerifyProductSection/>
    <BrandSection/>
    <Footer/>
    </>
  );
}
