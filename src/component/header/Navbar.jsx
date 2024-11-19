import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarsection">
      <div className="navbar_logosection">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><img
          src="https://s3-alpha-sig.figma.com/img/91b6/c22b/cb4cdf460396a7065bb567bd874f7821?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WlwhwJ6E06yJ7buBeqCCCqeVjnF5gveG7FgHwq9tKO1t-E-JUc-DDnLRHbvHlniMb9keuY59NeB8O52qAXgyYGvby87cNsS0OLDZ1XYoHU3DLgcrw5~~Dy1tZslAjkp7ZVuegoghEoJZCDKyRICGBV9H7SE08Y0NFRCCTEg8SpOiKbuUD6dMXvUtcBYCbtYLJRmZVBncYevrU8q0Xw0vWen5a4uN8-qdJUml0AL6w6d4kl6xmW0Vs4VljnY0~e9Cy1vv1yku~MXn7fqJIOBk9aPSlXATMWX2r2N-FD5HF8A-P8-WTPRJLAzzVYO74aWu1o0hNpu~wY7yVk2AOto50Q__"
          alt="Logo"
        /></Link>
      </div>
      <div className="navbar_inputsection">
        <ul className="navbarcategory_subsection">
          <li>
            <Link to="/jewellery" style={{ textDecoration: 'none', color: 'inherit' }}>Jewellery & Accessories</Link>
          </li>
          <li>
            <Link to="/clothing" style={{ textDecoration: 'none', color: 'inherit' }}>Clothing & Shoes</Link>
          </li>
          <li>
            <Link to="/home-living" style={{ textDecoration: 'none', color: 'inherit' }}>Home & Living</Link>
          </li>
          <li>
            <Link to="/craft-supplies" style={{ textDecoration: 'none', color: 'inherit' }}>Craft Supplies</Link>
          </li>
          <li>
            <Link to="/gifts-craft" style={{ textDecoration: 'none', color: 'inherit' }}>Gifts & Craft</Link>
          </li>
          <li>
            <Link to="/handmade-products" style={{ textDecoration: 'none', color: 'inherit' }}>Handmade Products</Link>
          </li>
          <li>
            <Link to="/offer-zone" style={{ textDecoration: 'none', color: 'inherit' }}>Offer Zone</Link>
          </li>
        </ul>
        <div className="navbar_inputfirst">
          <span>
            All Categories <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>
        <div className="navbar_inputsecond">
          <input type="text" placeholder="Search...." />
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </div>
      <div className="navbar_rightsection">
        <div className="navbar_rightsection_first">
          <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
            <i className="fa-regular fa-user"></i> Profile
          </Link>
        </div>
        <div className="navbar_rightsection_second">
          <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
            <i className="fa-solid fa-cart-shopping"></i> Cart
          </Link>
        </div>
        <div className="navbar_rightsection_first">
          <Link to="/supplier" style={{ textDecoration: 'none', color: 'inherit' }}>
            <i className="fa-solid fa-shop"></i> Become a Supplier
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
