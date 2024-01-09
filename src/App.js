// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React, { Suspense } from "react";
// import Header from "./layout/Header";
// import Footer from "./layout/Footer/Footer";

// const Home = React.lazy(() => import("./pages/HomePage"));

// function App() {
//   return (
//     <>
//       <Header />
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Suspense fallback={<div>Loading...</div>}>
//                 <Home />
//               </Suspense>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//       <Footer />
//     </>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./layout/Header";
// import Footer from "./layout/Footer/Footer";
// import Home from "./pages/HomePage";
// import ProductList from "./pages/ProductListPage";

// function App() {
//   return (
//     <>
//       <Header />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />}  />
//         </Routes>
//         <Routes>
//           <Route path="/product-list" element={<ProductList />} exact />
//         </Routes>
//       </BrowserRouter>
//       <Footer />
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer/Footer";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductListPage";
import Product from "./pages/ProductPage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Squat from "./pages/SquatPage";
import SignUp from "./pages/SignUpPage/SignUp";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/signup";

  return (
    <>
      {!isSignUpPage && <Header />}
      <Routes>
        <Route path="/product-list/" element={<ProductList />} />
        <Route path="/product/" element={<Product />} />
        <Route path="/about/" element={<About />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/team" element={<Squat />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {!isSignUpPage && <Footer />}
    </>
  );
}

export default App;
