import React from "react";
import Category from "./components/Category/index";
import ProductCard from "./components/ProductCard/index";
import Logo from "./layout/Logo";

const ProductListPage = () => {
  console.log("ProductListPage rendered");
  return (
    <>
      <Category />
      <ProductCard />
      <Logo />
    </>
  );
};

export default ProductListPage;
