import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../index.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="col pb-3">
        <div className="card shadow-sm" key={id}>
          <Link to={`/product/${id}`}>
            <img
              src={image}
              alt={title}
              className="bd-placeholder-img card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <div className="">$ {price}</div>
              <p className="card-text">{category}</p>
            </div>
          </Link>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
