import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="z-20 flex flex-col w-full px-5 py-10 overflow-hidden lg:pr-0 lg:py-14 lg:pl-14">
      <h2 className="mb-10 text-2xl font-bold text-left lg:text-5xl lg:w-3/5">
        Modern Furniture For Modern Living Style
      </h2>
      <div className="relative ">
        <div className="-m-10 lg:right-0 lg:absolute lg:w-3/4 lg:-top-48 lg:h-96">
          <Image
            src="/image.jpg"
            layout="responsive"
            width={1022}
            height={853}
            className="z-50 mix-blend-darken"
          />
        </div>
        <div className="flex flex-col ">
          <p className="text-gray-600 lg:w-2/6">
            In unfeeling existence objection immediate repulsive on he in.
            Imprudence comparison uncommonly me he difficulty diminution
            resolution. Likewise proposal differed scarcely dwelling as on
            raillery. September few dependent extremity own continued and ten
            prevailed attending. Early to weeks we could. Do commanded an
            shameless we disposing do. Indulgence ten remarkably nor are
            impression out. Power is lived means oh every in we quiet.
          </p>
          <div className="mt-10 w-max">
            <button className="py-5 mr-5 text-sm text-white transition-all duration-300 ease-in-out bg-themeDark px-7 hover:bg-transparent hover:ring-1 ring-themeDark hover:text-themeDark">
              Request a Qoute
            </button>
            <button className="py-5 transition-all duration-300 ease-in-out text-themeDark px-7 hover:ring-1 ring-themeDark">
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

/* 
<section className="flex flex-col w-full px-5 py-10 overflow-hidden lg:pr-0 lg:py-14 lg:pl-14 lg:flex-row">
      <div className="w-full lg:w-2/5">
        <h2 className="z-20 mb-10 text-2xl font-bold text-left lg:text-5xl ">
          Modern Furniture For Modern Living Style
        </h2>
        <div className="z-20 flex flex-col">
          <p className="z-30 text-gray-600 lg:w-4/6">
            In unfeeling existence objection immediate repulsive on he in.
            Imprudence comparison uncommonly me he difficulty diminution
            resolution. Likewise proposal differed scarcely dwelling as on
            raillery. September few dependent extremity own continued and ten
            prevailed attending. Early to weeks we could. Do commanded an
            shameless we disposing do. Indulgence ten remarkably nor are
            impression out. Power is lived means oh every in we quiet.
          </p>
          <div className="mt-10 w-max">
            <button className="py-5 mr-5 text-sm text-white bg-themeDark px-7">
              Request a Qoute
            </button>
            <button className="py-5 text-themeDark px-7">Watch Video</button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-4/5">
        <div className="z-0">
          <Image
            src="/image.jpg"
            layout="responsive"
            width={1022}
            height={853}
            className="z-0 mix-blend-darken"
          />
        </div>
      </div>
    </section>
*/

/* 
    <section className="flex flex-col w-full px-5 py-10 overflow-hidden lg:pr-0 lg:py-14 lg:pl-14">
      <h2 className="z-20 mb-10 text-2xl font-bold text-left lg:text-5xl lg:w-3/5">
        Modern Furniture For Modern Living Style
      </h2>
      <div className="relative">
        <div className="z-0 -m-10 lg:right-0 lg:absolute lg:w-2/3 lg:-top-44 lg:h-96">
          <Image
            src="/image.jpg"
            layout="responsive"
            width={1022}
            height={853}
            className="z-0 mix-blend-darken"
          />
        </div>
        <div className="z-20 flex flex-col">
          <p className="z-30 text-gray-600 lg:w-2/5">
            In unfeeling existence objection immediate repulsive on he in.
            Imprudence comparison uncommonly me he difficulty diminution
            resolution. Likewise proposal differed scarcely dwelling as on
            raillery. September few dependent extremity own continued and ten
            prevailed attending. Early to weeks we could. Do commanded an
            shameless we disposing do. Indulgence ten remarkably nor are
            impression out. Power is lived means oh every in we quiet.
          </p>
          <div className="mt-10 w-max">
            <button className="py-5 mr-5 text-sm text-white bg-themeDark px-7">
              Request a Qoute
            </button>
            <button className="py-5 text-themeDark px-7">Watch Video</button>
          </div>
        </div>
      </div>
    </section>
 */
