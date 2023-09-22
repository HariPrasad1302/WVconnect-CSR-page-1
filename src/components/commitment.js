import React from 'react';

const CommitmentBox = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-center text-3xl font-semibold mb-6">COMMITMENT</h2>
      <div className="md:flex md:items-center md:space-x-8">
        <div className="bg-red-500 text-white p-4 rounded-lg flex items-center space-x-4">
          <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
            {/* Placeholder email icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4a4 4 0 100 8 4 4 0 000-8z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 11v1a8 8 0 01-2.18 5.44l-1.3 1.3a2 2 0 01-2.83 0l-7.54-7.55a2 2 0 010-2.83l1.3-1.3A8 8 0 0111 4h1"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Transparent Allocation:</h3>
            <p className="text-sm">
              Your contributions are in safe hands. Every donation will be
              thoughtfully allocated to craft an unparalleled experience for
              our couples. From outfits to essential necessities, and the day's
              celebratory moments, each detail is meticulously planned for a
              lasting impression.
            </p>
          </div>
        </div>
        <div className="bg-pink-300 text-white p-4 rounded-lg flex items-center space-x-4 mt-4 md:mt-0">
          <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
            {/* Placeholder SMS icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 6l8 8m8-8l-8 8m0 0l-8-8m8 8v6"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-7v14m0-7h3m-6 0h3"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Our Assurance:</h3>
            <p className="text-sm">
              In collaboration with Ananta Spa and Resort, WV Connect 2024
              remains steadfast in celebrating human perseverance and the
              boundless power of love. Every donation is channeled through our
              dedicated NGO account. Donors will receive an 80 G certificate as
              a testament to our transparency and heartfelt appreciation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitmentBox;
