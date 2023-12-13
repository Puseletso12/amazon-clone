import React from 'react';
import "./Home.css";
import Products from "./Products"

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        {/* eslint-disable  jsx-a11y/img-redundant-alt */}
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
          alt="Hero image"
        />
        {/* eslint-enable jsx-a11y/img-redundant-alt */}
        <Products />
      </div>
    </div>
  )
}

export default Home

