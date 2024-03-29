import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Pdata } from "../../Datas/Pdata";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchCategories } from "../../store/actions/globalActions";
import {
  fetchProducts,
  fetchProductsActionCreator,
} from "../../store/actions/productActions";

const AllProduct = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const categories = useSelector((state) => state.global.categories);
  const products = useSelector((state) => state.product.productList);
  const [offset, setOffset] = useState(0);
  const [sortOption, setSortOption] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterType, setFilterType] = useState("");
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
    dispatch(fetchProductsActionCreator());
  }, [dispatch]);

  const topFive = categories.sort((a, b) => b.rating - a.rating).slice(0, 5);

  if (loading) {
    return (
      <p style={{ textAlign: "center" }}>
        Ürünler hazırlanırken lütfen bekleyiniz. Bu biraz zaman alabilir.
        <br></br>
        Anlayışınız için teşekkürler... 😊
      </p>
    );
  }

  const fetchMoreData = () => {
    const newOffset = offset + products.length;
    const currentScrollPosition = scrollContainerRef.current.scrollTop;

    dispatch(fetchProductsActionCreator(newOffset, sortOption, products)).then(
      (newProducts) => {
        setOffset((prevOffset) => prevOffset + newProducts.length);

        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = currentScrollPosition;
        }

        if (!Array.isArray(newProducts)) {
          console.error("New products is not an array:", newProducts);
        }
      }
    );
  };

  const handleSort = (option) => {
    setSortOption(option);
    toggleDropdown();
    let filterText = "";
    if (option === "asc") {
      filterText = "Filtre: Düşükten Yükseğe";
    } else if (option === "desc") {
      filterText = "Filtre: Yüksekten Düşüğe";
    }
    setFilterType(filterText);
    const sortedProducts = [...products].sort((a, b) => {
      if (option === "asc") {
        return a.price - b.price;
      } else if (option === "desc") {
        return b.price - a.price;
      }
      return 0;
    });
    dispatch(fetchProductsActionCreator(null, option, sortedProducts));
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const filterProducts = (product) => {
    const searchRegex = new RegExp(searchTerm, "i");
    return (
      searchRegex.test(product.name) || searchRegex.test(product.description)
    );
  };

  const handleFilter = () => {
    const filtered = products.filter(filterProducts);
    setFilteredProducts((prevFilteredProducts) => [
      ...prevFilteredProducts,
      ...filtered,
    ]);
    if (searchTerm) {
      setFilterType(`Filtre: "${searchTerm}"`);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center md:justify-between mx-44 md:mx-56 mt-24 md:mt-12 mb-6">
        <p className="text-slate-800 text-2xl font-bold ">Shop</p>
        <div className="flex flex-wrap mt-12 md:mt-0">
          <p className="font-bold text-slate-800">Home</p>
          <img src={Pdata.bodyArea.HomeToShop} className="mx-3.5" />
          <p className="text-stone-300 font-bold">Shop</p>
        </div>
      </div>
      <div className="flex flex-wrap mx-auto justify-center ml-48 mr-48 ">
        {topFive.map((category, index) => (
          <Link
            to={`/shopping/${category.gender}/${category.code}`}
            className="relative mx-4 min-w-max my-10 hover:shadow-md transform transition-transform duration-100 hover:scale-105"
            key={index}
          >
            <img className="rounded-lg max-h-56" src={category.img} alt="" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <div className="p-4 text-white text-center">
                <p className="text-xl font-bold">{category.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap justify-between  ml-10 mr-24 md:ml-72 md:mr-64 my-4">
        <p className="text-neutral-500 content-end  md:ml-0  font-bold flex border border-gray-300 rounded-md p-3 bg-white shadow-xl">
          {filterType || "Tüm ürünler"}
        </p>

        <div className="flex">
          <div className="relative">
            <div className="cursor-pointer" onClick={toggleDropdown}>
              <div className="flex mr-10 border border-gray-300 rounded-md p-3 bg-white shadow-xl">
                <p className="text-sky-500 font-bold ">Sırala</p>

                <svg
                  className="w-2.5 h-2.5 ml-2.5 mt-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </div>
            </div>

            {isDropdownVisible && (
              <div className="absolute z-10 mt-1 bg-white rounded-md shadow-xl w-48">
                <div className="py-2 border-2 rounded-lg border-sky-500">
                  <p
                    className={`block px-4 py-2 cursor-pointer ${
                      sortOption === "asc" ? "bg-white" : ""
                    } hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white`}
                    onClick={() => handleSort("asc")}
                  >
                    En Düşük Fiyat
                  </p>
                </div>
                <div className="mt-1">
                  <div className="py-2 border-2 rounded-lg border-sky-500">
                    <p
                      className={`block px-4 py-2 cursor-pointer ${
                        sortOption === "desc" ? "bg-gray-100" : ""
                      } hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white`}
                      onClick={() => handleSort("desc")}
                    >
                      En Yüksek Fiyat
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder="Ürün Ara"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mr-2 bg-white shadow-xl"
          />
          <button
            onClick={handleFilter}
            className="border border-gray-300 rounded-md p-2 bg-sky-500 text-white shadow-xl transition-transform duration-300 hover:shadow-none hover:scale-105"
          >
            Filtrele
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex flex-wrap mx-auto justify-center "
      >
        {products.length > 0 ? (
          <InfiniteScroll
            dataLength={products.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more products to show</p>}
            scrollThreshold={0.9}
            scrollableTarget={scrollContainerRef.current}
            scrollToTop={false}
          >
            <div className="flex flex-wrap m-12 justify-center ml-48 mr-48 items-center">
              {(filteredProducts.length > 0 ? filteredProducts : products).map(
                (product) => (
                  <Link
                    to={`/${product.category}/${
                      product.id
                    }/${encodeURIComponent(product.name)}`}
                    key={product.id}
                    className="flex flex-col items-center m-8 shadow-2xl text-center w-64 rounded-lg p-8 hover:shadow-md transform transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      className="rounded-lg max-h-56"
                      src={product.images[0].url}
                      alt=""
                    />
                    <p className="text-xl font-bold mt-6 text-zinc-600">
                      {product.name}
                    </p>
                    <p className="text-sm">{product.description}</p>
                    <p className="text-lg font-bold text-green-500">{`${product.price.toFixed(
                      2
                    )} ₺`}</p>
                  </Link>
                )
              )}
            </div>
          </InfiniteScroll>
        ) : (
          <p>No products available.</p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between border-t border-gray-200 bg-white px-4 py-3 md:mx-0 ">
        <div className="flex mx-auto justify-center">
          <div className=" mt-12 ml-auto mr-auto">
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-6 py-4 text-sky-500 font-bold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                First
              </a>

              <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-6 text-sm font-semibold text-sky-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-sky-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                3
              </a>

              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-6 py-4 text-sky-500 font-bold  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                Next
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-48  my-24 md:mx-48 md:my-24 md:justify-between justify-center">
        <img
          src={Pdata.footerArea.brands1}
          className="object-contain mb-12 md:mb-0"
        />
        <img
          src={Pdata.footerArea.brands2}
          className="object-contain mb-12 md:mb-0"
        />
        <img
          src={Pdata.footerArea.brands3}
          className="object-contain mb-12 md:mb-0"
        />
        <img
          src={Pdata.footerArea.brands4}
          className="object-contain mb-12 md:mb-0"
        />
        <img
          src={Pdata.footerArea.brands5}
          className="object-contain mb-12 md:mb-0"
        />
        <img
          src={Pdata.footerArea.brands6}
          className="object-contain mb-12 md:mb-0 "
        />
      </div>
    </div>
  );
};

export default AllProduct;
