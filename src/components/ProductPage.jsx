import React, { useEffect } from "react";
import Product from "./Product";
import ProductPageCSS from "../css/ProductPage.module.css";
import axios from "axios";
import { useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let ignore = false;

    if (!ignore) getProducts();

    return () => {
      ignore = true;
    };
  }, []);
  function getProducts() {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        console.log("Responses are " + JSON.stringify(response.data));
        setProducts(response.data);
      })
      .catch((err) => {
        if (err) {
          console.log("error" + err);
        }
      });
  }
  return (
    <div>
      <ul className={ProductPageCSS.flexcontainer}>
        {products.map((data, index) => {
          return (
            <Product
              source={data.imgurl}
              title={data.title}
              price={"$" + data.price}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductPage;
