import React from 'react';

const ContactUS = () => {
    const ContactUSheading = document.getElementById('Contactus');
    if (ContactUSheading) {
        ContactUSheading.scrollIntoView({ behavior: 'smooth' });
    }
  };

const Pledge = () => {
    return (
        <div className="bg-gray-100 py-8 p-12 py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-2 ml-20 text-center md:text-left">
                        Our <br />Pledge to <br /> You
                    </h1>
                </div>
                <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="aspect-w-1 aspect-h-1">
                        <img
                            src="/Pledge1.png" // Replace with your image source
                            alt="Image 1"
                            className="object-cover w-full h-full rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="aspect-w-1 aspect-h-1">
                        <img
                            src="/Pledge2.png" // Replace with your image source
                            alt="Image 2"
                            className="object-cover w-full h-full rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-6">
                {/* Thin line */}
                <div className="w-full h-0.5 bg-black border-black border-t-2 border-opacity-50"></div>

                {/* Content */}
                <div className="mt-4 text-center">
                    <div className=" text-center md:text-center">
                        <p className="text-lg md:text-3xl font-semibold lg:relative left-10 top-2">
                            THANK YOU FOR MAKING A <br/>DIFFERENCE
                        </p>
                    </div>
                    <div className="mt-4 text-center md:text-center">
                        <p>
                            "WV Connect 2024" is a beacon of human spirit, resilience, and the infinite power of love. By uniting with us, you help rewrite destinies through unity and compassion.
                        </p>    
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 text-center">
                    <button className="bg-black text-white px-6 py-3 rounded-md mx-2 hover:bg-opacity-80">
                        View Report
                    </button>
                    <button onClick={ContactUS} className="bg-black text-white px-6 py-3 rounded-md mx-2 hover:bg-opacity-80">
                        Donate Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pledge;
