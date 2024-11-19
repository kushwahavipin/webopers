import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/header/Navbar";
import Topheader from "./component/header/Topheader";
import Menu from "./component/header/Menu";
import Jewellery from "./component/Pages/Jewellery";
import Profile from "./component/Pages/Profile";
import Cart from "./component/Pages/Cart";
import Supplyer from "./component/Pages/Supplyer";
import HomePage from "./component/HomePage";
import VerifyProductCard from "./component/card/VerifyProductCard";


function App() {
  return (
    <>
      <Router>
        <Topheader />
        <Navbar />
        <Menu />
        <Routes>
        <Route path="/" element={<HomePage/>}/>
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/clothing" element={<Jewellery />} />
          <Route path="/home-living" element={<Jewellery />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/supplier" element={<Supplyer/>}/>
          <Route path="/product/:id" element={<VerifyProductCard />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
