import Image from "next/image";

const HomeInfo = () => {
  return (
    <section className="z-20 flex flex-col justify-center w-full h-full my-20">
      <h1 className="mb-10 font-bold text-center text-md">
        SOME OF OUR TRUSTED CLIENTS
      </h1>
      <div className="grid w-20 grid-rows-6 gap-8 m-auto lg:gap-28 lg:w-4/5 lg:grid-cols-6 lg:grid-rows-1">
        <Image
          src="/logos/stripe.png"
          width={96}
          height={47}
          layout={"responsive"}
        />
        <Image
          src="/logos/google.png"
          width={109}
          height={38}
          layout={"responsive"}
        />
        <Image
          src="/logos/deloitte.png"
          width={147}
          height={61}
          layout={"responsive"}
        />
        <Image
          src="/logos/acc.png"
          width={110}
          height={32}
          layout={"responsive"}
        />
        <Image
          src="/logos/ibm.png"
          width={67}
          height={28}
          layout={"responsive"}
        />
        <Image
          src="/logos/sam.png"
          width={122}
          height={24}
          layout={"responsive"}
        />
      </div>
    </section>
  );
};

export default HomeInfo;
