import React, { useState } from "react";
import PaageHeader from "../component/PaageHeader";
const showResults = "Showing 01-12 of 139 Result";
import Data from "../products.json";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const Shop = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);

  //pagination function
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //function change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //filter product based on category
  const [selectedCategory, setSelectedCategory] = useState("all");
  const menuItem = [...new Set(Data.map((val) => val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setSelectedCategory(curcat);
    setProducts(newItem);
  };

  return (
    <div>
      <PaageHeader title=" Shop Page" curPage="Shop" />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/*layout & title */}
                <div className="shop-title d-flex flex-warp justify-content-between ">
                  <p>{showResults}</p>
                  <div
                    className={`product-view-mode ${
                      gridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                {/*import product card */}
                <div className="">
                  <ProductCard gridList={gridList} products={currentProducts} />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProduct={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} gridList={gridList} />
                <ShopCategory
                  filterItem={filterItem}
                  setItem={setProducts}
                  menuItem={menuItem}
                  setProducts={setProducts}
                  selectedCategory={selectedCategory}
                />
                <PopularPost/>
                <Tags/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
