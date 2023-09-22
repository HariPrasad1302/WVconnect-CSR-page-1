import React from 'react';

const EventHighlights = () => {
  const eventsData = [
    {
      imageSrc: '/High1.png',
      heading: 'Fireworks Display',
      description: 'Lighting up the sky with a myriad of colors, representing the joyous beginning of new journeys',
    },
    {
      imageSrc: '/High2.png',
      heading: 'Baarat with Dhol',
      description: 'A procession of joy, dance, and music, the essence of Indian weddings. ',
    },
    {
      imageSrc: '/High3.png',
      heading: 'Special Yagna',
      description: 'Invoking divine blessings for the couples and their future',
    },
    {
      imageSrc: '/High4.png',
      heading: 'Flower Shower',
      description: 'As couples take their vows, the heavens (aided by drones) shower blessings in the form of petals.',
    },
    {
      imageSrc: '/High5.png',
      heading: 'Entertainment Galore',
      description: 'A lineup of music, dance, and performances to make the night unforgettable.',
    },
    {
      imageSrc: '/High6.png',
      heading: 'Exclusive Photoshoot',
      description: 'Each couple will have their moments captured by top photographers, preserving memories that last a lifetime. ',
    },
    {
      imageSrc: '/High7.png',
      heading: 'Pheras',
      description: 'The sacred ritual of walking around the fire, sealing the bond of matrimony in front of divine witnesses.',
    },
    {
      imageSrc: '/High8.png',
      heading: 'Grand Bridal Entry',
      description: 'The sacred ritual of walking around the fire, sealing the bond of matrimony in front of divine witnesses. ',
    },
    {
      imageSrc: '/High9.png',
      heading: 'Royal Wedding Decor',
      description: 'The sacred ritual of walking around the fire, sealing the bond of matrimony in front of divine witnesses.',
    },
    // Add more event data as needed
  ];

  return (
    <div id="Highlights"className="bg-gray-100 py-6 md:py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-left mb-4 md:mb-8 relative left-4">EVENT HIGHLIGHTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7">
          {eventsData.map((event, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 md:p-6"
              style={{ minHeight: '350px' }} // Set a fixed height for the container
            >
              <img
                src={event.imageSrc}
                alt={event.heading}
                className="md:h-48 w-full object-cover " // Set a fixed height for the image
              />
              <h2 className="text-xl md:text-2xl font-bold mb-2">{event.heading}</h2>
              <p className="text-sm md:text-base text-gray-600 max-h-20 overflow-hidden overflow-ellipsis italic">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventHighlights;
