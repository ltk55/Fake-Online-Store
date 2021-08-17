import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="col-sm-6">
        <div className="card" key={id}>
          <Link to={`/product/${id}`}>
            <img src={image} alt={title} className="img-thumbnail" />
            <div className="card-body">
              <h5 class="card-title">{title}</h5>
              <div className="">$ {price}</div>
              <p class="card-text">{category}</p>
            </div>
          </Link>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
