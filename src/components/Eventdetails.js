import React from "react";

const EventDetails = () => {
  return (
    <div id="EventDetails" className="py-6 md:py-12 bg-gray-100 px-4 md:px-12">
      <div className="py-6 md:py-12 px-4 md:px-12">
        <h1 className="text-3xl text-center md:text-5xl font-bold italic">101 Weddings With Hope</h1>
        <h1 className="mt-4 md:mt-6 text-3xl text-center md:text-5xl font-bold text-yellow-500">Venue Details</h1>
        <p className="mt-2 md:mt-4 text-center text-base md:text-lg">
          <b>Date:</b> April 6th, 2024 | <b>Time:</b> 9:00 AM | <b>Venue:</b> Ananta Spa & Resort, Jaipur, Rajasthan
        </p>
      </div>

      <div className=" ">
        <div className="text-2xl md:text-4xl font-bold text-center">The Grandeur Awaits</div>
        <div className="mt-4 md:flex md:flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <img src="/1stGrand.png" alt="Image 1" className="w-full" />
            <div className="text-lg font-semibold mt-2">Historic Unions</div>
            <p className="mt-2 italic text-base">
              Celebrate the journey of 101 couples, each with their own tale of resilience, as they come together in matrimony.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <img src="/2ndGrand.png" alt="Image 2" className="w-full" />
            <div className="text-lg font-semibold mt-2">Media Spotlight</div>
            <p className="mt-2 italic text-base">
              WV Connect 2024's initiative is bound to capture hearts across the nation. With pan-India coverage, expect features in top newspapers, magazines, television broadcasts, radio, YouTube, and numerous social forums.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <img src="/3rdGrand.png" alt="Image 3" className="w-full" />
            <div className="text-lg font-semibold mt-2">Royal Destination</div>
            <p className="mt-2 italic text-base">
              Experience the magic of a traditional Indian wedding set against the backdrop of Jaipur's regal architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
