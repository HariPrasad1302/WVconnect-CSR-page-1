import React from 'react';

const PinnacleMoments = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto">
                <h1 className="text-5xl font-semibold text-center mb-8">Pinnacle Moments</h1>

                <div className="flex flex-wrap justify-center gap-8">
                    {/* Image 1 */}
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <div className="bg-gray-100 ">
                            <img
                                src="/Pinnacle.png" // Replace with your image URL
                                alt="Image 1"
                                className="w-full h-auto rounded-md"
                            />
                            <h2 className="text-2xl font-semibold mt-4 text-center">101 Destination Weddings, 2023</h2>
                            <p className="text-gray-600 mt-2 text-center">
                                Setting a world record, we orchestrated an
                                event where love knew no boundaries.
                                Bestowed by Mr. Christopher Taylor from the
                                World Records Union, this event epitomized
                                our belief in the universality of love and
                                togetherness.
                            </p>
                        </div>
                    </div>

                    {/* Image 2 */}
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <div className="bg-gray-100 ">
                            <img
                                src="/Pinnacle2.png" // Replace with your image URL
                                alt="Image 2"
                                className="w-full h-auto rounded-md"
                            />
                            <h2 className="text-2xl font-semibold mt-4 text-center">World Record</h2>
                            {/* <p className="text-gray-600 mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                do eiusmod tempor incididunt.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PinnacleMoments;
