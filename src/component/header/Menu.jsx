import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menusection">
      <div className="menu_content">
        <ul>
          <li><Link to="/jewellery" style={{ textDecoration: 'none', color: 'inherit' }} >Jewellery & Accessories</Link></li>
          <li><Link to="/clothing" style={{ textDecoration: 'none', color: 'inherit' }}>Clothing & Shoes</Link></li>
          <li><Link to="/home-living" style={{ textDecoration: 'none', color: 'inherit' }}>Home & Living</Link></li>
          <li><Link to="/craft-supplies" style={{ textDecoration: 'none', color: 'inherit' }}>Craft Supplies</Link></li>
          <li><Link to="/gifts-craft" style={{ textDecoration: 'none', color: 'inherit' }}>Gifts & Craft</Link></li>
          <li><Link to="/handmade-products" style={{ textDecoration: 'none', color: 'inherit' }}>Handmade Products</Link></li>
          <li><Link to="/offer-zone" style={{ textDecoration: 'none', color: 'inherit' }}>Offer Zone</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
