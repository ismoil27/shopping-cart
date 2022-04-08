import React from "react";
import { CartState } from "../context/Context";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="homw">
      {/* <Filter/> */}
      <div className="productContainer">
        {products.map((value) => {
          return <span>{value.name}</span>;
        })}
      </div>
    </div>
  );
};

export default Home;
