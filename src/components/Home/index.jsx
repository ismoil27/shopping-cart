import React from "react";
import { CartState } from "../context/Context";
import Filters from "../Filters";
import SingleProduct from "../SingleProduct";
import "./home.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((value) => {
          return <SingleProduct value={value} key={value.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
