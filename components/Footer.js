import Image from "next/image";
import Link from "next/link";
import { Faccebook, Instagram, LongBack, Youtube } from "./Icons";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 p-5 mt-24 lg:px-24">
      <button className="h-8 text-yellow-600 border border-yellow-600 rounded-full bg-yellow-50 w-36">
        Mistrium Interiror
      </button>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <h1 className="text-4xl font-bold">Signup to receive updates?</h1>
          <div className="relative h-24 lg:row-start-2">
            <input
              type="email"
              placeholder="Your business email.."
              className="absolute top-0 w-full pl-2 pr-10 bg-gray-100 rounded-md h-14 focus:outline-none"
            />
            <button className="absolute flex items-center gap-3 p-1 text-white rounded-md right-1 bg-themeDark top-1">
              <span className="hidden font-semibold md:block md:ml-5">
                Get Started
              </span>
              <span className="px-2 py-2 bg-opacity-50 rounded-md bg-themeLight">
                <LongBack />
              </span>
            </button>
          </div>
          <div className="relative hidden h-96 lg:block lg:row-span-2 lg:col-start-2">
            <Image src="/image-last.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
      <div>
        <div className="grid justify-center gap-4 grid-col-1 justify-items-center lg:grid-cols-3">
          <div>
            <div className="relative w-24 h-8">
              <Image src="/logo.svg" layout="fill" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/">About</Link>
            <Link href="/">Broducts</Link>
            <Link href="/">Services</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className="flex items-center gap-2">
            <Faccebook />
            <Instagram />
            <Youtube />
          </div>
        </div>
        <hr className="my-8" />
        <p className="w-full text-sm italic text-center text-gray-400">
          Copyright © 2021. sharkawy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
