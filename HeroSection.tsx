import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import "./HeroSection.css";
import HereImage from "@/assets/herosection.jpeg";
import HereImage1 from "@/assets/herosection1.jpeg";
import HereImage2 from "@/assets/herosection2.jpeg";
import HereImage3 from "@/assets/burger_-3.png";
import HereImage4 from "@/assets/veg.avif";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [HereImage, HereImage1, HereImage2, HereImage3, HereImage4];

  // Automatically update the current image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col md:flex-row max-w-full mx-auto md:p-10 rounded-lg justify-center m-4 gap-6 md:gap-20 font-poppins">
      <div className="flex flex-col gap-5 md:gap-10 md:w-[40%]">
        <div className="flex flex-col gap-3 md:gap-5 fade-in">
          <h1 className="animate-morph font-bold md:font-extrabold md:text-5xl text-4xl">
            Savor the Flavor, Anytime, Anywhere!
          </h1>
          <p className="text-gray-500 hover:text-gray-700 transition-all duration-300 text-sm md:text-base">
            Discover mouthwatering dishes delivered fresh to your door. Whether
            you’re craving a hearty meal or a light snack, we bring the best
            flavors right to you!
          </p>
        </div>
        <div className="relative flex items-center gap-2 fade-in">
          <Input
            type="text"
            value={searchText}
            placeholder="Search restaurant by name,city & country"
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 shadow-lg"
          />
          <Search className="text-gray-500 absolute inset-y-2 left-2" />
          <Button
            onClick={() => navigate(`/search/${searchText}`)}
            className="bg-yellow-300 hover:bg-yellow-200 active:bg-yellow-400 text-black font-semibold py-2 rounded-lg shadow-md transition duration-200 transform hover:scale-105 active:scale-95 fade-in"
          >
            Search
          </Button>
        </div>
      </div>

      {/* Responsive Image Container with Sliding and Zoom Effect */}
      <div className="relative w-full h-[300px] md:max-w-[600px] md:h-[400px] overflow-hidden rounded-lg shadow-lg zoom-in">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectFit: "contain" }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
