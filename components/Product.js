import Image from "next/image";
import classes from "../styles/product.module.css";
import { Bag } from "./Icons";

const Product = ({ title, finalPrice, originalPrice, image }) => {
  return (
    <div className={`flex flex-col w-full ${classes.product}`}>
      <button
        className="z-10 inline-flex justify-center w-3/6 gap-5 py-2 m-auto text-white rounded-full lg:w-4/5"
        style={{ background: "#D9AB82" }}
      >
        <span className="font-semibold leading-8 text-center">Add to Cart</span>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-opacity-30 bg-themeMain">
          <Bag />
        </span>
      </button>
      <div className="z-10 w-3/4 m-auto">
        <h3 className="text-2xl font-bold ">{title}</h3>
        <div className="inline-flex items-center gap-10 ">
          <p className="text-lg font-semibold">{finalPrice}</p>
          <p className="font-semibold text-gray-400 line-through">
            {originalPrice}
          </p>
        </div>
      </div>
      <div className="relative w-full h-52">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="z-10 mix-blend-darken"
        />
      </div>
    </div>
  );
};

export default Product;
