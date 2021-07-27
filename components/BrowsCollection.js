import Image from "next/image";

const BrowsCollection = ({ image, title, color }) => {
  return (
    <div
      className={`flex flex-col justify-between lg:w-1/2 h-96 ${color} md:flex-row`}
    >
      <div className="flex flex-col items-center justify-around mt-5 md:w-1/3 md:pl-14">
        <h1 className="text-2xl font-bold">{title}</h1>
        <button className="font-light">Browse Collection</button>
      </div>
      <div className="relative w-full m-auto h-2/3 md:w-2/3">
        <Image
          src={image.src}
          layout="fill"
          objectFit="scale-down"
          className="mix-blend-darken"
        />
      </div>
    </div>
  );
};

export default BrowsCollection;
