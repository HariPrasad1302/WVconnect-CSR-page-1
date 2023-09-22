import React from 'react';

const Donate = () => {
  return (
    <div className="bg-gray-100 p-4 md:p-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-left mt-8 mb-4 md:mb-6 text-center">
        Donate to Make a Difference
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <p className="text-xl md:text-4xl text-left md:w-1/2 mb-4 md:mb-40 px-4 md:px-0">
          Your contribution fuels "101 Weddings With Hope," empowering us to create a haven
          of companionship for those who have endured loss. Your support aids in orchestrating
          this unique gathering, rekindling hope, companionship, and love.
        </p>
        <img
          src="/Donateintro.png"
          alt="Donate Image"
          className="w-full md:w-1/2 rounded-lg"
        />
      </div>
      <div className="my-4 md:my-8">
        <h2 className="text-2xl font-bold text-center mb-4">Ways to Donate</h2>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/3 m-2">
            <img src="/DirectDonate.png" alt="Image 1" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Direct Donation</h3>
            <p className="text-sm">
              Make a one-time donation of your preferred amount to directly impact the lives
              of resilient individuals.
            </p>
          </div>
          <div className="w-full md:w-1/3 m-2">
            <img src="/DonateGift.png" alt="Image 2" className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">Donate a Gift</h3>
            <p className="text-sm">
              Extend your blessings by sponsoring the special day of a couple, ensuring they
              experience love and joy once again.
            </p>
          </div>
        </div>
      </div>
      <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800">
        Donate Now
      </button>
    </div>
  );
};

export default Donate;
