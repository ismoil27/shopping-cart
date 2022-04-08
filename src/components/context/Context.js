import faker from "@faker-js/faker";
import { createContext } from "react";

const Cart = createContext();

const products = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.image(),
  inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
  fastDelivery: faker.datatype.boolean(),
  rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
}));

// console.log(products);

const Context = ({ children }) => {
  return <Cart.Provider value={{ products }}>{children}</Cart.Provider>;
};

export default Context;
