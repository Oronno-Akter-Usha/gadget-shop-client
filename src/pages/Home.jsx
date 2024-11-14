import Banner from "../components/home/Banner";
import FeaturedProduct from "../components/home/FeaturedProduct";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-24">
        <h1 className="mb-16 text-2xl font-semibold text-center">
          Featured Products
        </h1>
        <FeaturedProduct />
      </div>
    </div>
  );
};

export default Home;
