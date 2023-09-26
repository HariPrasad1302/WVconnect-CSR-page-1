import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid"; // Import the arrow icon from Heroicons

const FAQComponent = () => {
  return (
    <div className="bg-white p-4 sm:p-8 md:p-12 lg:p-16 rounded-lg shadow-md p-12 py-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold mb-2 sm:mb-4 lg:mb-6">
        FAQ
      </h1>
      <h2 className="text-lg text-center sm:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6 lg:mb-8">
        All you want to know
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 mb-12 gap-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black border border-black rounded-xl p-4 text-center relative transition duration-50 hover:bg-black hover:text-white hover:border-white hover:translate-x-2"
          >
            <span className="transition duration-300">{item.text}</span>
            <ArrowRightIcon className="h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 absolute right-4 top-1/2 transform -translate-y-1/2 transition duration-50" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;

// Sample FAQ data
const faqData = [
  { text: "Brand Identity" },
  { text: "Brand Activation" },
  { text: "Website Development" },
  { text: "Brand Strategy" },
  { text: "Video Production" },
  { text: "Integrated Production" },
];
