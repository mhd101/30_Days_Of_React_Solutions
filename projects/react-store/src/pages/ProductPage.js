/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {MdOutlineKeyboardBackspace} from 'react-icons/md'

const ProductPage = () => {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const API_URL = await `https://dummyjson.com/products/${id}`;

      axios
        .get(API_URL)
        .then((response) => {
          // console.log(response.data)
          setProduct(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchProduct();
  }, []);

  console.log(product);
  return (
    <div className="single-product-wrapper">
      <div className="back-btn">
      <Link to={'/allProducts'}>
        <span><MdOutlineKeyboardBackspace size={'50'} color="black"/></span>
      </Link>
      </div>
      <div className="single-product-container">
        <div className="single-product-image">
          <img src={product.thumbnail} alt={product.brand} />
        </div>
        <div className="single-product-text">
          <div className="single-product-heading">
            <h2 className="single-product-title">{product.title}</h2>
            <p className="single-product-description">{product.description}</p>
          </div>
          <p className="single-product-rating">
            <span>Rating: </span>
            {product.rating}
          </p>
          <div className="single-product-details">
            <p className="single-product-stock">
              <span>In Stock: </span>
              {product.stock}
            </p>
            <p className="single-product-price">
              <span>Price: </span>
              {product.price}
            </p>
          </div>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
