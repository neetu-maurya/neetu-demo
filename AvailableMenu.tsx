import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import image from "@/assets/home.jpg";
import { useState } from "react";

const AvailableMenu = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleFeedbackSubmit = () => {
    console.log("Feedback Submitted:", feedback);
    alert("Thank you for your feedback!");
    setFeedback(""); // Clear feedback after submission
    setIsFeedbackOpen(false); // Close the feedback form
  };

  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menu
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className="md:max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
          <img src={image} alt="" className="w-full h-40 object-cover" />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Briyani
            </h2>
            <p className="text-sm text-gray mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              ratione dignissimos deserunt inventore ullam, recusandae officiis
              voluptates, blanditiis praesentium nostrum culpa quis amet aliquam
              doloribus at eligendi eius soluta minus!
            </p>
            <h3 className="text-lg font-semibold mt-4">
              Price : <span className="text-red-600 font-bold">₹80 </span>
            </h3>
          </CardContent>
          <CardFooter className="p-4 flex flex-col gap-2">
            <Button className="text-black bg-yellow-300 hover:bg-yellow-200 active:bg-yellow-400 shadow-md transition duration-200 transform hover:scale-105 active:scale-95 fade-in rounded-md hover:cursor-pointer w-full">
              Add to Cart
            </Button>
            <Button
              className="text-black bg-red-500 hover:bg-red-400 active:bg-red-600 shadow-md transition duration-200 transform hover:scale-105 active:scale-95 rounded-md w-full"
              onClick={() => setIsFeedbackOpen(true)}
            >
              Give Feedback
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Feedback Form Modal */}
      {isFeedbackOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Feedback</h2>
            <textarea
              className="w-full border p-2 rounded-md"
              rows={4}
              placeholder="Enter your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <div className="flex justify-end gap-2 mt-4">
              <Button
                className="bg-gray-300 hover:bg-gray-200 text-black rounded-md px-4 py-2"
                onClick={() => setIsFeedbackOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-green-500 hover:bg-green-400 text-white rounded-md px-4 py-2"
                onClick={handleFeedbackSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableMenu;
