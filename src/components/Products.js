import React from "react";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id="1"
          title="DIAMOND SELECT TOYS Marvel Gallery: Miles Morales (Playstation 5 Version) PVC Statue, Multicolor"
          image="https://m.media-amazon.com/images/I/71M9yUXjxjL._AC_SX679_.jpg"
          rating={5}
          price={49.38}
        />
        <Product
          id="1112"
          title="McFarlane Toys - DC Gaming 7 Figures Wave 9 - Earth-2 Batman (Arkham Knight)"
          image="https://m.media-amazon.com/images/I/71YPDviKo3L._AC_SL1500_.jpg"
          rating={3}
          price={22.09}
        />
      </div>
      <div className="products_row">
        <Product
          id="1"
          title="Blue Whale Massage Gaming Chair for Adults, 350LBS Office Chair with Retractable Footrest, Adjustable Armrest, Classic PU Leather Big and Tall Ergonomic Computer Chair"
          image="https://m.media-amazon.com/images/I/61NAenToQaL._AC_SL1500_.jpg"
          rating={4}
          price={228.99}
        />
        <Product
          id="1546798"
          title="Dowinx Gaming/Office PC Chair with Massage Lumbar Support, Vintage Style PU Leather High Back Adjustable Swivel Task Chair with Footrest (Black and Red)"
          image="https://m.media-amazon.com/images/I/81Ddh54rbQL._AC_SL1500_.jpg"
          rating={5}
          price={249.0}
        />
        <Product
          id="192565195"
          title="Logitech MX Master 3S - Wireless Performance Mouse, Ergo, 8K DPI, Track on Glass, Quiet Clicks, USB-C, Bluetooth, Windows, Linux, Chrome - Graphite - With Free Adobe Creative Cloud Subscription"
          image="https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SX466_.jpg"
          rating={2}
          price={320.0}
        />
      </div>
      <div className="products_row">
        <Product
          id="1235546"
          title="
        HP 2022 Victus 15.6 FHD 144Hz Gaming Laptop, Intel 12th Core i5-12450H, 32GB RAM, 1TB PCIe SSD, NVIDIA GeForce GTX 1650 Graphics, Backlit Keyboard, Win 11 Pro, Mica Silver, 32GB Snowbell USB Card"
          image="https://m.media-amazon.com/images/I/71xBqZad3rL._AC_SX679_.jpg"
          rating={5}
          price={889.49}
        />
      </div>
    </>
  );
};

export default Products;
