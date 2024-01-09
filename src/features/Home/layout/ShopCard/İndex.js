import React from "react";
import { NavLink } from "react-router-dom";
import Photo1 from "../../assets/image/shop-card-men.jpg";
import Photo2 from "../../assets/image/shop-card-women.jpg";
import Photo3 from "../../assets/image/shop-card-accessories.jpg";
import Photo4 from "../../assets/image/shop-card-kids.jpg";

function ShopCart() {
  return (
    <div className="w-full bg-alabaster-50 ">
      <div className="max-w-[1050px] mx-auto py-20">
        <p className="flex justify-center font-bold font-montserrat text-abony-950 text-2xl tracking-tighter leading-8 ">
          adascdsa 'S PICK
        </p>
        <p className="flex justify-center font-montserrat text-gray-500 mt-4 mb-8">
          Problems trying to resolve the conflict between
          awsedrgtyhuolpoıuytrewrtyuıop
        </p>
        <div className="sm:grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-8">
          <div>
            <CatagoryImageCard title="MEN" image={Photo1} link="./men" />
          </div>
          <div>
            <CatagoryImageCard title="WOMEN" image={Photo2} link="./women" />
          </div>
          <div className="flex flex-col justify-between gap-4">
            <CatagoryImageCard
              title="ACCESSORIES"
              image={Photo3}
              link="./accessories"
            />
            <CatagoryImageCard title="KIDS" image={Photo4} link="./kids" />
          </div>
        </div>
      </div>
    </div>
  );
}

const CatagoryImageCard = ({ title, image, link }) => {
  return (
    <NavLink to={link} className="overflow-hidden  aspect-square relative">
      <div className="bg-white-50 font-bold absolute left-8 bottom-7 min-w-[170px] text-center py-3 tracking-widest">
        {title}
      </div>
      <img src={image} className="w-full h-full object-cover" />
    </NavLink>
  );
};

export default ShopCart;
