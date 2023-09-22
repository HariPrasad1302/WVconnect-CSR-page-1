import React from 'react';

const JoinUs = () => {
    return (

        <section id="DonateUs" className=" py-12 bg-gradient-to-r from-yellow-200 to-blue-300 p-12 ">
            <div className='container mx-auto  items-center top-50'>
                    <h2 className="text-3xl font-bold text-center mb-6">Why Now? The Imperative</h2>
                    <p className="text-gray-600 text-lg text-center">
                        In recent years, the world has witnessed unprecedented challenges, leaving
                        many grappling with loss and solitude. "101 Weddings With Hope" was
                        conceived as a balm for these souls, a chance to reignite hope in their
                        hearts.
                    </p>
                </div>
            <div className="container bg-gradient-to-r from-white to-yellow-100 rounded-lg mt-10 mb-20 p-6 mx-auto flex  md:flex-row flex-col items-center bg-gray-100" >
                
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-lg ">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="Donate.png" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-center items-center text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold italic ">Join Us & Contribute</h2>

                    <p className="mt-4 text-sm md:text-base lg:text-lg">
                        Become part of this transformation. By joining us, you play a pivotal role in shaping lives and spreading joy.
                        Together, we aim for a world filled with warmth and love.
                    </p>
                    <div className="flex justify-center items-center mt-4">
                        <button className="mt-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 focus:outline-none ">
                            Donate Now
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default JoinUs;
