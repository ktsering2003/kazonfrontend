import React from "react";
import Product from "./Product";
import reactLogo from "../../src/logo192.png";
import "../components/css/ProductPage.css";

const ProductPage = () => {
  return (
    <div>
      <ul className="flex-container">
        <Product source={reactLogo} title="PRoduct 1" price="$15"></Product>
        <Product source={reactLogo} title="PRoduct 2" price="$20">
          1
        </Product>
        <li className="flex-item">3</li>
        <li className="flex-item">4</li>
        <Product source={reactLogo} title="PRoduct 5" price="$50">
          1
        </Product>
        <li className="flex-item">6</li>
      </ul>
    </div>
  );
};

export default ProductPage;
