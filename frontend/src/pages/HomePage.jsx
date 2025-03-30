import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
  { href: "/track-bikes", name: "Track Bikes", imageUrl: "/trackbikes2.jpg" },
  { href: "/road-bikes", name: "Road Bikes", imageUrl: "/roadbikes.jpg" },
  { href: "/gravel-bikes", name: "Gravel Bikes", imageUrl: "/gravelbikes.jpg" },
  { href: "/dirt-bikes", name: "Dirt Bikes", imageUrl: "/dirt-bikes.jpg" },
  { href: "/e-bikes", name: "Electric Bikes", imageUrl: "/e-bikes.jpg" },
  { href: "/scooter", name: "Scooters", imageUrl: "/scooter.jpg" },
  { href: "/skateboard", name: "Skateboards", imageUrl: "/skateboard.jpg" },
  { href: "/classic", name: "Classic Bikes", imageUrl: "/classic.jpg" },
  { href: "/bmx", name: "BMX Bikes", imageUrl: "/bmx.jpg" },
  { href: "/mtb", name: "Mountain Bikes", imageUrl: "/mtb.jpg" },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-white-800 mb-4">
          Get Your Wheels
        </h1>
        <p className="text-center text-xl text-yellow-300 mb-12">
          Why travel the boring way when you can ride in style?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>

        {!isLoading && products.length > 0 && (
          <FeaturedProducts featuredProducts={products} />
        )}
      </div>
    </div>
  );
};
export default HomePage;
