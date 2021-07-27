import Image from "next/image";

const images = [
  { src: "/logos/stripe.png", width: 96, height: 47 },
  { src: "/logos/google.png", width: 109, height: 38 },
  { src: "/logos/deloitte.png", width: 147, height: 61 },
  { src: "/logos/acc.png", width: 110, height: 32 },
  { src: "/logos/ibm.png", width: 67, height: 28 },
  { src: "/logos/sam.png", width: 122, height: 24 },
];

const HomeInfo = () => {
  return (
    <section className="z-20 flex flex-col justify-center w-full h-full my-20">
      <h1 className="mb-10 font-bold text-center text-md">
        SOME OF OUR TRUSTED CLIENTS
      </h1>
      <div className="grid w-20 grid-rows-6 gap-8 m-auto lg:gap-28 lg:w-4/5 lg:grid-cols-6 lg:grid-rows-1">
        {images.map(({ src, width, height }, i) => (
          <Image
            src={src}
            width={width}
            height={height}
            layout={"responsive"}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeInfo;
