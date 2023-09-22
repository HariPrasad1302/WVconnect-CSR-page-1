import React from "react";

const Review1 = () => {
    return (
        <div id="reviews" className="bg-gray-100 py-12 p-12">
            <div className="text-center">
                <h1 className="text-3xl font-bold">
                    Straight from <span className="text-orange-500">Our Pure Hearts</span>
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 mt-8">
                {/* Review 1 */}
                <div className="bg-white rounded-lg p-4 w-full md:w-1/3 shadow-md">
                    <div className="text-center">
                        <div className="text-yellow-500 text-2xl text-left">
                            ★★★★★
                        </div>
                    </div>
                    <p className="mt-4">
                        Boost your product and
                        service's credibility by adding
                        testimonials from your clients.
                        People love recommendations
                        so feedback from others
                        who've tried it is invaluable.
                    </p>
                    <div className="flex items-center mt-4">
                        <img
                            src="/rev1.png" // Replace with your image source
                            alt="Profile Picture"
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="ml-2 font-semibold">Nicholas Newark</span>
                    </div>
                </div>

                {/* Review 2 */}
                <div className="bg-white rounded-lg p-4 w-full md:w-1/3 shadow-md">
                    <div className="text-center">
                        <div className="text-yellow-500 text-2xl text-left">
                            ★★★★★
                        </div>
                    </div>
                    <p className="mt-4">
                        Boost your product and
                        service's credibility by adding
                        testimonials from your clients.
                        People love recommendations
                        so feedback from others
                        who've tried it is invaluable.
                    </p>
                    <div className="flex items-center mt-4">
                        <img
                            src="/rev2.png" // Replace with your image source
                            alt="Profile Picture"
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="ml-2 font-semibold">Kyrie Rivera</span>
                    </div>
                </div>

                {/* Review 3 */}
                <div className="bg-white rounded-lg p-4 w-full md:w-1/3 shadow-md">
                    <div className="text-center ">
                        <div className="text-yellow-500 text-2xl text-left">
                            ★★★★★
                        </div>
                    </div>
                    <p className="mt-4">
                        Boost your product and
                        service's credibility by adding
                        testimonials from your clients.
                        People love recommendations
                        so feedback from others
                        who've tried it is invaluable.

                    </p>
                    <div className="flex items-center mt-4">
                        <img
                            src="/rev3.png" // Replace with your image source
                            alt="Profile Picture"
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="ml-2 font-semibold">Alice Johnson</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review1;
