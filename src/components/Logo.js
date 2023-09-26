import React from 'react';

const ContactUS = () => {
  const ContactUSheading = document.getElementById('Contactus');
  if (ContactUSheading) {
      ContactUSheading.scrollIntoView({ behavior: 'smooth' });
  }
};

const MediaChronicles = () => {
  return (
    <div className="bg-gray-100 p-4 md:p-8 lg:p-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Media Chronicles</h1>
      <div className="my-6 md:my-8">
        <p className="text-center text-gray-700 ">
          Our journey has been echoed and celebrated by national and international media alike.
        </p>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-6">
        As Seen On
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
        {/* Replace these placeholders with your logo images */}
        <div className="w-32 md:w-40 lg:w-48 mx-auto">
          <img src="Logo1.png" alt="Logo 1" className="w-full" />
        </div>
        <div className="w-32 md:w-40 lg:w-48 mx-auto">
          <img src="Logo2.png" alt="Logo 2" className="w-full" />
        </div>
        <div className="w-32 md:w-40 lg:w-48 mx-auto">
          <img src="Logo3.png" alt="Logo 3" className="w-full" />
        </div>
        <div className="w-32 md:w-40 lg:w-48 mx-auto">
          <img src="Logo4.png" alt="Logo 4" className="w-full" />
        </div>
        <div className="w-32 md:w-40 lg:w-48 mx-auto">
          <img src="Logo5.png" alt="Logo 5" className="w-full" />
        </div>
        <div className="w-32 md:w-40 lg:w-48 mx-auto">
          <img src="Logo6.png" alt="Logo 6" className="w-full" />
        </div>
      </div>
      <div className="mt-6 md:mt-8 flex justify-center space-x-4">
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition duration-300">
          View Report
        </button>
        <button onClick={ContactUS} className="bg-black text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition duration-300">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default MediaChronicles;
