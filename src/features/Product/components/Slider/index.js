import React, { useState } from "react";
import Slide1 from "../../assets/slider-1.jpg";
import Slide2 from "../../assets/slider-2.jpg";
import Slide3 from "../../assets/slider-3.jpg";
import Slide4 from "../../assets/slider-4.jpg";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { FaEye } from "react-icons/fa";

const Slider = () => {
  const data = [
    {
      banner: Slide1,
      title: "Floating Phone",
      price: "$1,139.33",
      stock: "Availability:",
      stock2: "In Stock",

      description:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      colors: ["blue", "green", "orange", "black"],
    },

    {
      banner: Slide2,
      title: "Floating Phone",
      price: "$1,139.33",
      stock: "Availability:",
      stock2: "In Stock",
      description:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      colors: ["blue", "green", "orange", "black"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    // console.log("handlenext1", activeIndex);
    const next = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(next);
    // console.log("handlenext", next);
  };
  const handlePrev = () => {
    // console.log("handleprev1", activeIndex);

    const prev = activeIndex === data.length - 1 ? 0 : activeIndex + 1;

    setActiveIndex(prev);
    // console.log("handleprev", prev);
  };

  return (
    <>
      <div className="flex bg-alabaster-100 px-48 py-6 gap-8">
        <div className="font-montserrat text-base font-bold leading-6 tracking-wider text-abony-950">
          Home
        </div>
        <div className="font-montserrat text-base font-bold leading-6 tracking-wider text-white-300">
          Shop
        </div>
      </div>
      <div className="bg-alabaster-100 pb-12 px-48">
        <button
          className=" absolute top-1/2 transform -translate-y-1/2 "
          onClick={handlePrev}
        >
          <FaAngleLeft className=" text-abony-50 text-4xl" />
        </button>
        <button
          className="absolute pl-[210px] sm:pl-[475px] top-1/2 transform -translate-y-1/2 "
          // absolute top-1/2 transform -translate-y-1/2
          onClick={handleNext}
        >
          <FaAngleRight className=" text-abony-50 text-4xl 	" />
        </button>
        {data.map((collection, idx) => (
          <div
            className={`flex flex-col sm:flex-row gap-8 ${
              idx === activeIndex ? "block" : "hidden"
            }`}
            key={idx}
          >
            {/* <div> */}
            <img src={collection.banner} alt={`Koleksiyon ${idx + 1}`} />

            {/* </div> */}
            <div className="sagtaraf px-6">
              <h1 className="font-montserrat font-semibold leading-7 tracking-wider text-abony-950 pt-3 pb-4">
                {collection.title}
              </h1>
              <div className="flex gap-1 text-yellow-500 pb-4">
                <MdOutlineStar className="my-auto" />
                <MdOutlineStar className="my-auto" />
                <MdOutlineStar className="my-auto" />
                <MdOutlineStar className="my-auto" />
                <MdOutlineStarHalf className="my-auto" />
                <p className="text-gray-500 font-montserrat font-bold text-sm pl-2">
                  10 Reviews
                </p>
              </div>
              <p className="font-montserrat text-2xl font-bold leading-8 tracking-tighter text-abony-950 pb-3">
                {collection.price}
              </p>
              <div className="flex flex-row">
                <div className="font-montserrat text-base font-bold leading-6 tracking-wider text-gray-500 pb-12">
                  {collection.stock}
                </div>
                <div className="font-montserrat text-base font-bold leading-6 tracking-wider text-blue-500">
                  {collection.stock2}
                </div>
              </div>
              <p> {collection.description} </p>
              <p className="bg-gray-700 h-[2px] w-full mt-6"></p>

              <div className="flex">
                {collection.colors.map((color) => (
                  <div
                    key={color}
                    className="flex w-7 h-7 mx-1 rounded-full mt-6 mb-16 "
                    style={{
                      background: `${color}`,
                    }}
                  ></div>
                ))}
              </div>
              <div className="flex gap-5 items-center">
                <button className="w-36 h-11 bg-blue-500 text-white-50 rounded-sm">
                  Select Options
                </button>
                <div className="my-auto flex items-center w-8 h-8 bg-white-50 mb-1 mx-1 rounded-full">
                  <IoMdHeartEmpty className="text-2xl mx-auto" />
                </div>
                <div className="my-auto flex items-center w-8 h-8 bg-white-50 mb-1 mx-1 rounded-full">
                  <LuShoppingCart className="text-2xl mx-auto" />
                </div>
                <div className="my-auto flex items-center w-8 h-8 bg-white-50 mb-1 mx-1 rounded-full">
                  <FaEye className="text-2xl mx-auto" />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex gap-5">
          <img src={Slide3} className="pt-5"></img>
          <img src={Slide4} className="pt-5"></img>
        </div>
      </div>
    </>
  );
};

export default Slider;

// const Slider = () => {
//   const data = [
//     {
//       banner: Slide1,
//       title: "Floating Phone",
//       price: "$1,139.33",
//       stock: "Availability:",
//       stock2: "In Stock",

//       description:
//         "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
//       colors: ["blue", "green", "orange", "black"],
//     },

//     {
//       banner: Slide2,
//       title: "Floating Phone",
//       price: "$1,139.33",
//       stock: "Availability:",
//       stock2: "In Stock",
//       description:
//         "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
//       colors: ["blue", "green", "orange", "black"],
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleNext = () => {
//     // console.log("handlenext1", activeIndex);
//     const next = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(next);
//     // console.log("handlenext", next);
//   };
//   const handlePrev = () => {
//     // console.log("handleprev1", activeIndex);

//     const prev = activeIndex === data.length - 1 ? 0 : activeIndex + 1;

//     setActiveIndex(prev);
//     // console.log("handleprev", prev);
//   };

//   return (
//     <>
//       <div className="flex bg-alabaster-100 px-48 py-6 gap-8">
//         <div className="font-montserrat text-base font-bold leading-6 tracking-wider text-abony-950">
//           Home
//         </div>
//         <div className="font-montserrat text-base font-bold leading-6 tracking-wider text-white-300">
//           Shop
//         </div>
//       </div>
//       <div className="bg-alabaster-100 pb-12 px-48">
//         <button
//           className=" absolute tleft-0 top-1/2 transform -translate-y-1/2 "
//           onClick={handlePrev}
//         >
//           <FaAngleLeft className=" text-abony-50 text-4xl" />
//         </button>
//         <button
//           className="absolute pl-[475px] top-1/2 transform -translate-y-1/2 "
//           // absolute top-1/2 transform -translate-y-1/2
//           onClick={handleNext}
//         >
//           <FaAngleRight className=" text-abony-50 text-4xl" />
//         </button>
//         {data.map((collection, idx) => (
//           <div
//             className={`flex gap-8 ${idx === activeIndex ? "block" : "hidden"}`}
//             key={idx}
//           >
//             <img src={collection.banner} alt={`Koleksiyon ${idx + 1}`} />
//             <div className="px-6">
//               <h1 className="font-montserrat font-semibold leading-7 tracking-wider text-abony-950 pt-3 pb-4">
//                 {collection.title}
//               </h1>
//               <div className="flex gap-1 text-yellow-500 pb-4">
//                 <MdOutlineStar className="my-auto" />
//                 <MdOutlineStar className="my-auto" />
//                 <MdOutlineStar className="my-auto" />
//                 <MdOutlineStar className="my-auto" />
//                 <MdOutlineStarHalf className="my-auto" />
//                 <p className="text-gray-500 font-montserrat font-bold text-sm pl-2">
//                   10 Reviews
//                 </p>
//               </div>
//               <p className="font-montserrat text-2xl font-bold leading-8 tracking-tighter text-abony-950 pb-3">
//                 {collection.price}
//               </p>
//               <div className="flex flex-row">
//                 <div className="font-montserrat text-base font-bold leading-6 tracking-wider text-gray-500 pb-12">
//                   {collection.stock}
//                 </div>
//                 <div className="font-montserrat text-base font-bold leading-6 tracking-wider text-blue-500">
//                   {collection.stock2}
//                 </div>
//               </div>
//               <p> {collection.description} </p>
//               <p className="bg-gray-700 h-[2px] w-full mt-6"></p>

//               <div className="flex">
//                 {collection.colors.map((color) => (
//                   <div
//                     key={color}
//                     className="flex w-7 h-7 mx-1 rounded-full mt-6 mb-16 "
//                     style={{
//                       background: `${color}`,
//                     }}
//                   ></div>
//                 ))}
//               </div>
//               <div className="flex gap-5 items-center">
//                 <button className="w-36 h-11 bg-blue-500 text-white-50 rounded-sm">
//                   Select Options
//                 </button>
//                 <div className="my-auto flex items-center w-8 h-8 bg-white-50 mb-1 mx-1 rounded-full">
//                   <IoMdHeartEmpty className="text-2xl mx-auto" />
//                 </div>
//                 <div className="my-auto flex items-center w-8 h-8 bg-white-50 mb-1 mx-1 rounded-full">
//                   <LuShoppingCart className="text-2xl mx-auto" />
//                 </div>
//                 <div className="my-auto flex items-center w-8 h-8 bg-white-50 mb-1 mx-1 rounded-full">
//                   <FaEye className="text-2xl mx-auto" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//         <div className="flex gap-5">
//           <img src={Slide3} className="pt-5"></img>
//           <img src={Slide4} className="pt-5"></img>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Slider;
