import AboutUs from "../components/AboutUs";
import HomeInfo from "../components/Home";
import BrowsCollection from "../components/BrowsCollection";
import Products from "../components/Products";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="">
      <AboutUs />
      <HomeInfo />
      <section className="flex flex-col w-full lg:flex-row lg:h-96">
        <BrowsCollection
          color="bg-themeLight"
          image={{ src: "/image2.jpg" }}
          title="Residential Furniture"
        />
        <BrowsCollection
          color="bg-themeMain"
          image={{ src: "/Image3.png" }}
          title="Hospitality Furniture"
        />
      </section>
      <Products />
      <Reviews />
      <Footer />
    </main>
  );
}
