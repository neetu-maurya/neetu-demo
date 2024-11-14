import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import "./HeroSection.css";
import HereImage from "@/assets/herosection.jpeg";

const HeroSection = () => {
  const [searchText, setSerachText] = useState<string>("");
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg justify-center m-4 gap-20">
      <div className="flex flex-col gap-10 md:w-[40%]">
        <div className="flex flex-col gap-5 ">
          <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
            <span className="animate-flip">Fresh,</span>
            <span className="animate-flip">Delicious</span>
            <span className="animate-flip">Food</span>
            <span className="animate-flip">Delivered</span>
            <span className="animate-flip">to</span>
            <span className="animate-flip">Your</span>
            <span className="animate-flip">Doorstep</span>
          </h1>

          <p className="text-gray-500 hover:text-gray-700 transition-all duration-300">
            Craving something tasty? We’re just around the corner, ready to
            serve you anytime, anywhere.
          </p>
        </div>
        <div className="relative flex items-center gap-2">
          <Input
            type="text"
            value={searchText}
            onChange={(e) => setSerachText(e.target.value)}
            className="pl-10 shadow-lg"
          />
          <Search className="text-gray-500 absolute inset-y-2 left-2" />

          <Button className="bg-yellow-300 hover:bg-yellow-200 active:bg-yellow-400  text-black font-semibold py-2 rounded-lg shadow-md transition duration-200 transform hover:scale-105 active:scale-95">
            Serach
          </Button>
        </div>
      </div>
      <div>
        <img src={HereImage} alt="" className="object-cover w-full max-h-[500px] " />
      </div>
    </div>
  );
};

export default HeroSection;
