import React from 'react';



const giftData = [

  {

    id: 1,

    name: 'Gift 1',

    description: 'This is a beautiful gift for your loved ones.',

    imageUrl: 'Gift1.png',

  },

  {

    id: 2,

    name: 'Gift 2',

    description: 'A special gift to show your appreciation.',

    imageUrl: 'Gift2.png',

  },

  {

    id: 3,

    name: 'Gift 3',

    description: 'Unique and thoughtful, perfect for any occasion.',

    imageUrl: 'Gift3.png',

  },

  {

    id: 4,

    name: 'Gift 4',

    description: 'Make your loved ones smile with this gift.',

    imageUrl: 'Gift4.png',

  },

  {

    id: 5,

    name: 'Gift 5',

    description: 'An exquisite gift to cherish forever.',

    imageUrl: 'Gift5.png',

  },

  {

    id: 6,

    name: 'Gift 6',

    description: 'Express your love with this special gift.',

    imageUrl: 'Gift6.png',

  },

];



const Gifts = () => {

  return (

    <div id="Gifts" className="bg-gray-100 py-4 md:py-8">

      <h1 className="text-3xl text-center md:text-5xl font-bold text-left italic">Gifts from the Heart</h1>

      <p className="py-12 p-12 text-base text-center md:text-xl text-left my-4">

        Gifts, especially in Indian weddings, hold immense significance. With "101 Weddings With Hope," every gift symbolizes collective love and support for those daring to find love again.With "101 Weddings With Hope," every gift symbolizes collective love and support for those daring to find love again.

      </p>



      <div className="container mx-auto">

        <h2 className="text-2xl md:text-3xl text-center my-4 font-bold relative top-6">Featured Gifts</h2>

        <div className="bg-white p-4 md:p-6 relative rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 relative top-8">

          {giftData.map((gift) => (

            <div key={gift.id} className="bg-gray-100 p-4 md:p-6 relative border border-gray-300">

              <div

                className="relative"

                style={{ paddingBottom: '100%' }}

              >

                <img

                  src={gift.imageUrl}

                  alt={gift.name}

                  className="absolute inset-0 w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"

                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black hover:opacity-70 transition duration-300 ease-in-out">

                  <div className="text-white text-center">

                    <h3 className="text-lg md:text-xl font-bold my-2">{gift.name}</h3>

                    <p className="text-gray-300 text-base md:text-sm max-h-20 overflow-hidden overflow-ellipsis italic">

                      {gift.description}

                    </p>

                  </div>

                </div>

              </div>



            </div>



          ))}

          <div className='sm:text-center xl:text-center md:text-center '>

          </div>

          <button className="bg-black text-white px-4 py-4 rounded-full mt-8 mb-8 sm:text-center">

            Donate now

          </button>
          
        </div>
      </div>
    </div>

  );

};



export default Gifts