import React from "react";
import "../App.css";


const ProductCard = (props) => {
  return (
    <div className="product-card" >
      <img
        src={props.productImage}
        alt="product"
        className="product-thumbnail"
      />
      <div className="product-card-text">
      <p><span>Product: </span>{props.productName}</p>
      <p><span>Price: $</span>{props.productPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
