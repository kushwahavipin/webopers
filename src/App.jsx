import React from "react";
import Home from './component/Home'
import "./component/Home.css"
import Topheader from "./component/header/Topheader";
import Navbar from "./component/header/Navbar";
import Menu from "./component/header/Menu";
import Intro from "./component/Intro_slider";
import Product from "./component/section/Product_Section";
import Banner from "./component/Banner";
import VerifyProductSection from "./component/section/VerifyProductSection";
import BrandSection from "./component/BrandSection";
import Footer from "./component/Footer";


function App() {
  return (
    <>
    {/* <Home/> */}
   <Topheader/>
   <Navbar/>
   <Menu/>
   <Intro/>
   <Product/>
   <Banner/>
   <VerifyProductSection/>
   <BrandSection/>
   <Footer/>
    </>
  );
}

export default App;
