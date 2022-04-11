import React from "react";
import { CartState } from "../context/Context";
import Filters from "../Filters";
import SingleProduct from "../SingleProduct";
import "./home.css";

const Home = () => {
  const {
    state: { products },
    productState: { byStock, byFastDelivery, byRating, sort, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((value) => value.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((value) => value.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (value) => value.rating >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((value) =>
        value.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((value) => {
          return <SingleProduct value={value} key={value.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
