import React from "react";
import HeroSection from "./layout/HeroSection";
import ShopCart from "./layout/ShopCard/İndex";
import ProductCard from "./components/ProductCard/index"
import Slider2 from "./components/Slider2";
import Blog from "./components/Blog/"
import Collection from "./layout/Collection";


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ShopCart/>
      <ProductCard/>
      <Slider2/>
      <Collection/>
      <Blog/>
      
        

    </>
  );
};

export default HomePage;
