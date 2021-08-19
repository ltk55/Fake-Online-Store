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
  }, [dispatch]);

  console.log(products);

  return (
    <div class="album py-5 bg-light">
      <div class="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <ProductComponent />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
