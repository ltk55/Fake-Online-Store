import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log(err);
        });
      dispatch(setProducts(response.data));
    };
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="row">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
