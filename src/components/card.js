// components/Card.js
import React from 'react';

const Card = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="relative w-72 h-96 rounded-lg shadow-md transition-transform duration-300 transform bg-white cursor-pointer hover:scale-105">
        <div className="relative w-full h-2/3">
          <img
            src="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Card Image"
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>

        <div className="absolute top-2/3 left-0 w-full h-1/3 opacity-0 transform translate-y-2/3 transition-opacity duration-300 group-hover:opacity-100">
          <h2 className="text-blue-500 text-2xl">keep Smiling</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus vitae fugit enim repudiandae
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
