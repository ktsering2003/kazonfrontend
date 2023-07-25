import React from "react";

interface Props {
  imageSrc: string;
  title: string;
  price: string;
}

const Product = ({ source, title, price }) => {
  return (
    <>
      <div>
        <img className="flex-item" src={source} />
        <li>{title}</li>
        <li>{price}</li>
        <button>Add to Cart</button>
      </div>
    </>
  );
};

export default Product;
