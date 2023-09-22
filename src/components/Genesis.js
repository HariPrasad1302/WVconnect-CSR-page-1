// components/WVConnect.js

import React from "react";

const Genesis = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center p-4 bg-gray-100">
            {/* Left Part */}
            <div className="lg:w-1/2 lg:pr-11 relative left-6">
                <h2 className="text-5xl lg:text-6xl font-bold text-center lg:text-left mb-4 md:mb-6">
                    WV Connect: The Genesis
                </h2>
                <p className="text-base lg:text-3xl text-center lg:text-left">
                    It all began in 2023 with a simple mission: <br/>
                    to celebrate love in all its forms. <br/>
                    As time passed by, our vision evolved,<br/>
                    expanding our horizons, creating bonds,  <br/>    
                    and embedding positive changes in society.
                </p>
            </div>

            {/* Right Part */}
            <div className="lg:w-1/2 mt-4 lg:mt-11 lg:mb-9"> 
                <img
                    src="/Genesis.png" // Replace with the actual image path
                    alt="WV Connect Image"
                    className="w-full h-auto rounded-lg shadow-lg mt-4 lg:mt-0" 
                />
            </div>
        </div>
    );
};

export default Genesis;
