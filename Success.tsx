import Image from "@/assets/herosection1.jpeg";
import { IndianRupee } from "lucide-react";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
const Success = () => {
  const orders = [1, 2, 3];
  if (orders.length === 0)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="font-bols text-2xl text-gray-700 dark:text-gray-300">
          Order not found
        </h1>
      </div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg w-full">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Order Status:{" "}
            <span className="text-red-500">{"confirm".toUpperCase()}</span>
          </h1>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Order Summery
          </h2>
          {/*Your Order Item Display Here */}
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={Image}
                  alt=""
                  className="w-14 h-14 rounded-md object-cover"
                />
                <h3 className="ml-4 text-gray-800 dark:text-gray-200 font-medium">
                  Pizza
                </h3>
              </div>
              <div className="text-right">
                <div className="text-gray-800 dark:text-gray-200 flex items-center">
                  <IndianRupee />
                  <span className="text-lg font-medium">180</span>
                </div>
              </div>
            </div>
            <Separator className="my-4" />
          </div>
        </div>
        <Link to="/cart">
        <Button
              type="submit"
              className=" py-3 text-sm rounded-lg bg-yellow-300 hover:bg-yellow-200 active:bg-yellow-400  text-black font-semibold   transition duration-200 transform hover:scale-105 active:scale-95 w-full"
            >
             Continue Shopping
            </Button></Link>
      </div>
    </div>
  );
};

export default Success;
