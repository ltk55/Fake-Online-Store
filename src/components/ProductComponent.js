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
          <Link to={`/product/${id}`} className="text-dark">
            <img
              src={image}
              alt={title}
              className="bd-placeholder-img card-img-top p-1"
            />
            <div className="card-body">
              <h5 className="card-title pb-3 font-weight-bold">{title}</h5>
              <h6 className="pb-1">$ {price}</h6>
              <span className="badge badge-secondary p-1">{category}</span>
            </div>
          </Link>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
