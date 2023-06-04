import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const API_URL = await "https://dummyjson.com/products";

      axios
        .get(API_URL)
        .then((response) => {
          // console.log(response.data)
          setProduct(response.data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchProduct();
  }, []);

//   console.log(product);
  return (
    <div className="all-product-container">
      <div className="all-product-title">
        <h2>All Products</h2>
      </div>
      <hr />
      <div className="product-container">
        {product.length > 0 && product.map((p) => (
          <Link key={p.id} to={`/allProducts/product/${p.id} ` }>
            <ProductCard
              productImage={p.thumbnail}
              productName={p.title}
              productPrice={p.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
