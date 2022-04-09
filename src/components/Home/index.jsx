import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "../SingleProduct";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="homw">
      {/* <Filter/> */}
      <div className="productContainer">
        {products.map((value) => {
          return <SingleProduct value={value} key={value.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
