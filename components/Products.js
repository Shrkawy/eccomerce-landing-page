import classes from "../styles/Products.module.css";
import Product from "./Product";

import { LongBack } from "./Icons";

const products = [
  {
    title: "Ramen Stool",
    price: { final: 65, original: 95 },
    image: "/products/Ramen-Stool.jpg",
  },
  {
    title: "Flexform",
    price: { final: 35, original: 55 },
    image: "/products/Flexform.jpg",
  },
  {
    title: "Porada",
    price: { final: 87, original: 97 },
    image: "/products/Porada.jpg",
  },
  {
    title: "Taknion",
    price: { final: 45, original: 65 },
    image: "/products/Taknion.jpg",
  },
  {
    title: "Amora",
    price: { final: 65, original: 85 },
    image: "/products/Amora.jpg",
  },
  {
    title: "Liquid Contract",
    price: { final: 35, original: 45 },
    image: "/products/Liquid-Contract.jpg",
  },
];

const Products = () => {
  return (
    <section className="flex flex-col w-full p-5 pt-24 lg:p-24">
      {/* header */}
      <div className="flex flex-col items-start justify-between mb-5 md:flex-row lg:items-center">
        <div className="flex items-center justify-between w-full md:w-2/3">
          <h1 className="text-2xl font-bold lg:text-4xl">PRODUCTS</h1>
          <h3 className="text-base font-medium text-gray-400">Best Selling</h3>
          <h3 className="text-base font-medium text-gray-400">Most Popular</h3>
        </div>
        <div>
          <button className="flex w-24 gap-5">
            <span className="font-medium">See All</span>
            <span className={classes.span}>
              <LongBack />
            </span>
          </button>
        </div>
      </div>
      {/* menu */}
      <div className="flex gap-8 m-auto mt-10 lg:gap-20">
        <button className="font-semibold text-gray-900">All</button>
        <button className="text-gray-400">Bed</button>
        <button className="text-gray-400">Sofa</button>
        <button className="text-gray-400">Chair</button>
        <button className="text-gray-400">Light</button>
      </div>
      {/* products */}
      <div className="grid h-auto grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <Product
            title={product.title}
            originalPrice={`$${product.price.original}.00`}
            finalPrice={`$${product.price.final}.00`}
            image={product.image}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
