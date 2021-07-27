import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Cart, Search, Profile } from "./Icons";

const navItems = [
  {
    title: "home",
    href: "/",
    as: "/",
  },
  {
    title: "about us",
    href: "/about-us",
    as: "/about-us",
  },
  {
    title: "products",
    href: "/products",
    as: "/products",
  },
  {
    title: "fags",
    href: "/fags",
    as: "/fags",
  },
  {
    title: "contact us",
    href: "/contact-us",
    as: "/contact-us",
  },
];

function Header() {
  const router = useRouter();

  return (
    <header className="top-0 left-0 w-full py-10 m-auto bg-mainbg max-w-screen-2xl">
      <div className="flex items-center justify-between w-full m-auto px-14">
        {/* Logo */}
        <div className="relative w-20 h-5">
          <Image src="/logo.svg" layout="fill" />
        </div>

        {/* Header Icons */}
        <div className="flex justify-between w-24">
          <Link href="/" as="/">
            <Search />
          </Link>

          <Link href="/">
            <span className="relative">
              <Cart />
              <span className="absolute top-0 right-0">
                <span className="relative flex justify-end w-2 h-2 align-top">
                  <span className="absolute w-full h-full bg-red-600 rounded-full"></span>
                  <span className="w-full h-full bg-red-600 rounded-full animate-ping opacity-60"></span>
                </span>
              </span>
            </span>
          </Link>

          <Link href="/abx">
            <Profile />
          </Link>
        </div>
      </div>

      {/* Header Navbar */}
      <nav className="flex justify-between w-full m-auto mt-3 sm:w-4/5 md:w-3/5 lg:w-1/2 lg:-mt-7">
        {navItems.map((item) => {
          return (
            <Link href={item.href} key={item.title} as={item.as}>
              <a
                className={`p-1  hover:-translate-y-1 border-black hover:border-b-2 transition-all duration-150 ease-linear ${
                  router.pathname === item.href ? "border-b-2" : ""
                }`}
              >
                {item.title}
              </a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
