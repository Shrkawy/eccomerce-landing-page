import Image from "next/image";
import { Star, Backward, Forward } from "./Icons";

const Reviews = () => {
  return (
    <section className="flex flex-col w-full p-5 mt-20 lg:p-24">
      {/* upper (image, review) */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:gap-14">
        <h1 className="text-4xl font-bold md:col-span-2">
          Let’s see what our customer’s say
        </h1>
        <div className="relative w-full h-72 md:col-start-1 xl:h-96">
          <Image
            src="/Mike.jpg"
            layout="fill"
            objectFit="contain"
            objectPosition={"top"}
            className="rounded-md"
          />
        </div>
        <blockquote className="inline-flex items-center italic font-light text-center md:text-left md:font-normal">
          "Dwelling and speedily ignorant any steepest. Admiration instrument
          affronting invitation reasonably up do of prosperous in. Shy saw
          declared age debating ecstatic man. Call in so want pure rank am dear
          were. Remarkably to continuing in surrounded diminution on."
        </blockquote>
      </div>
      <div className="flex flex-col items-center w-full gap-10 pt-5">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-10">
            <h1 className="text-lg font-semibold">Mike Taylor</h1>
            <div className="flex items-center">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
          <p className="text-gray-400">20 January 2020</p>
        </div>
        <div className="flex items-center justify-center w-full md:w-3/4 h-36 lg:w-1/2 xl:w-1/3">
          <div className="relative w-1/3 h-full">
            <Image src="/t-3.jpg" layout="fill" />
          </div>
          <div className="relative w-1/3 h-full">
            <Image src="/t-4.jpg" layout="fill" />
          </div>
          <div className="relative w-1/3 h-full">
            <Image src="/t-5.jpg" layout="fill" />
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-10">
            <button className="flex items-center justify-center w-10 h-10 border border-black rounded-full">
              <Backward />
            </button>
            <button className="flex items-center justify-center w-10 h-10 bg-gray-200 border border-black rounded-full">
              <Forward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
