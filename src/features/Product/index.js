import React from "react";
import Slider from "./components/Slider";
import ProductCard from "./components/ProductCard";
import ShopCard from "./layout/ShopCard/index";
import Logo from "../ProductList/layout/Logo/index";

function ProductPage() {
  return (
    <>
      <Slider />
      <ShopCard />
      <ProductCard />
      <Logo />
    </>
  );
}

export default ProductPage;
