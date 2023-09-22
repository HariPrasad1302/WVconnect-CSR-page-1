import React from 'react';

const LegacyDiscover = () => {
  return (
    <div className="bg-gray-100 p-4 md:p-8 flex flex-col items-center">
      <h1 className="text-3xl md:text-6xl font-bold text-center">Discover as Legacy</h1>
      <div className="mt-4">
        <h2 className="text-lg md:text-xl italic">"A Journey of Love, Unity, and Change"</h2>
      </div>
      <div className="mt-4 text-base md:text-lg text-center">
        <p>
          Every great initiative begins with a spark, a vision to make a difference. At WV Connect, our legacy isn't just about events, but
          about the lives touched, the communities built, and the hope spread.
        </p>
      </div>
      <div className="mt-4 flex flex-col md:flex-row md:space-x-4 ">
        <img
          src="/Legacy.png" // Replace with your image source
          alt="Image 1"
          className="w-full md:w-1/3 rounded-lg"
        />
        <img
          src="/Legacy2.png" // Replace with your image source
          alt="Image 2"
          className="w-full md:w-1/3 rounded-lg"
        />
        <img
          src="/Legacy3.png" // Replace with your image source
          alt="Image 3"
          className="w-full md:w-1/3 rounded-lg"
        />
      </div>
    </div>
  );
};

export default LegacyDiscover;
