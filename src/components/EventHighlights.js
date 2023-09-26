import React from 'react';

const EventHighlights = () => {
  const cardStyles = {
    card: {
      width: '300px',
      height: '379px',
      background: 'grey',
      borderRadius: '10px',
      transition: 'background 0.8s',
      overflow: 'hidden',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      boxShadow: '0 70px 63px -80px #000000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card0: {
      backgroundImage: 'url("fireworks.jpg")',
      backgroundSize: '300px',
    },
    card1: {
      backgroundImage: 'url("drum.jpg")',
      backgroundSize: '300px',
    },
    card2: {
      backgroundImage: 'url("yagna.jpg")',
      backgroundSize: '300px',
    },
    card3: {
      backgroundImage: 'url("flowers1.jpeg")',
      backgroundSize: '300px',
    },
    card4: {
      backgroundImage: 'url("galore.jpg")',
      backgroundSize: '300px',
    },
    card5: {
      backgroundImage: 'url("https://images.pexels.com/photos/2058070/pexels-photo-2058070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      backgroundSize: '300px',
    },
    card6: {
      backgroundImage: 'url("Fostering .png")',
      backgroundSize: '300px',
    },
    card7: {
      backgroundImage: 'url("entry1.jpg")',
      backgroundSize: '300px',
    },
    h2: {
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      color: 'white',
      margin: '20px',
      opacity: '0',
      transition: 'opacity 1s',
    },
  
    icons: {
      position: 'absolute',
      fill: '#fff',
      color: '#fff',
      height: '130px',
      top: '226px',
      width: '50px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      opacity: '0',
      transition: 'opacity 1s',
    },
    text: {
      textDecoration: 'none', // Add text decoration properties here
      fontWeight: 'bold', // Add font weight properties here
      fontSize: '18px', // Add font size properties here
    },
    description: {
      padding: '10px',
      textAlign: 'center',
      color: 'white',
    },
  };


  const handleMouseEnter = (e) => {
    e.currentTarget.style.border = '1px solid white';
    e.currentTarget.querySelector('h2').style.opacity = '1';
    const icons = e.currentTarget.querySelectorAll('.fa');
    icons.forEach((icon) => {
      icon.style.opacity = '1';
    });
    e.currentTarget.style.backgroundPosition = 'left center';
    e.currentTarget.style.backgroundSize = '600px';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.border = 'none';
    e.currentTarget.querySelector('h2').style.opacity = '0';
    const icons = e.currentTarget.querySelectorAll('.fa');
    icons.forEach((icon) => {
      icon.style.opacity = '0';
    });
    e.currentTarget.style.backgroundPosition = 'center center';
    e.currentTarget.style.backgroundSize = '300px';
  };


  return (
    <div id="Highlights"className="bg-gray-100 py-6 md:py-12 p-16 py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-8 relative left-4">EVENT HIGHLIGHTS</h1>
        <p className='text-center text-lg mb-8'>
          Explore our exclusive photoshoot event and connect with us on social media!
        </p>
        <div style={cardStyles.container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card components */}
          {/* You can add your card components here */}
          <div 
          style={{ ...cardStyles.border, ...cardStyles.card, ...cardStyles.card0 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 style={{ ...cardStyles.h2, ...cardStyles.text, }}>Fireworks Display</h2>
          <div style={cardStyles.icons}>
            <a href="#" className="text-black hover:text-gray-400">
              <i className="fab fa-codepen text-2xl"></i>
            </a>
          </div>
        </div>
        <div
          style={{ ...cardStyles.border, ...cardStyles.card, ...cardStyles.card1 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 style={{ ...cardStyles.h2, ...cardStyles.text }}>Baarat with Dhol</h2>
          <div style={cardStyles.icons}>
            <a href="#" className="text-black hover:text-gray-400">
              <i className="fab fa-codepen text-2xl"></i>
            </a>
            <i className="fab fa-instagram text-2xl"></i>
            <i className="fab fa-dribbble text-2xl"></i>
            <i className="fab fa-twitter text-2xl"></i>
            <i className="fab fa-facebook text-2xl"></i>
          </div>
        </div>
        <div
          style={{ ...cardStyles.border, ...cardStyles.card, ...cardStyles.card2 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 style={{ ...cardStyles.h2, ...cardStyles.text }}>Special Yagna</h2>
          <div style={cardStyles.icons}>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-codepen text-2xl"></i>
            </a>
            <i className="fab fa-instagram text-2xl"></i>
            <i className="fab fa-dribbble text-2xl"></i>
            <i className="fab fa-twitter text-2xl"></i>
            <i className="fab fa-facebook text-2xl"></i>
          </div>
        </div>
        <div
          style={{ ...cardStyles.border, ...cardStyles.card, ...cardStyles.card3 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 style={{ ...cardStyles.h2, ...cardStyles.text }}>Flower Shower</h2>
          <div style={cardStyles.icons}>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-codepen text-2xl"></i>
            </a>
            <i className="fab fa-instagram text-2xl"></i>
            <i className="fab fa-dribbble text-2xl"></i>
            <i className="fab fa-twitter text-2xl"></i>
            <i className="fab fa-facebook text-2xl"></i>
          </div>
        </div>
        
        {/* Second Row */}
        <div
          style={{ ...cardStyles.border, ...cardStyles.card, ...cardStyles.card4 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 style={{ ...cardStyles.h2, ...cardStyles.text }}>Entertainment Galore</h2>
          <div style={cardStyles.icons}>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-codepen text-2xl"></i>
            </a>
            <i className="fab fa-instagram text-2xl"></i>
            <i className="fab fa-dribbble text-2xl"></i>
            <i className="fab fa-twitter text-2xl"></i>
            <i className="fab fa-facebook text-2xl"></i>
          </div>
        </div>
        <div
          style={{ ...cardStyles.border, ...cardStyles.card, ...cardStyles.card5 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 style={{ ...cardStyles.h2, ...cardStyles.text }}>Exclusive Photoshoot</h2>
          <div style={cardStyles.icons}>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-codepen text-2xl"></i>
            </a>
            <i className="fab fa-instagram text-2xl"></i>
            <i className="fab fa-dribbble text-2xl"></i>
            <i className="fab fa-twitter text-2xl"></i>
            <i className="fab fa-facebook text-2xl"></i>
          </div>
        </div>
        <div
          style={{ ...cardStyles.border, ...cardStyles.card, ...cardStyles.card6 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 style={{ ...cardStyles.h2, ...cardStyles.text }}>Pheras</h2>
          <div style={cardStyles.icons}>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-codepen text-2xl"></i>
            </a>
            <i className="fab fa-instagram text-2xl"></i>
            <i className="fab fa-dribbble text-2xl"></i>
            <i className="fab fa-twitter text-2xl"></i>
            <i className="fab fa-facebook text-2xl"></i>
          </div>
        </div>
        <div
          style={{ ...cardStyles.border, ...cardStyles.card, ...cardStyles.card7 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 style={{ ...cardStyles.h2, ...cardStyles.text }}>Grand Bridal Entry</h2>
          <div style={cardStyles.icons}>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-codepen text-2xl"></i>
            </a>
            <i className="fab fa-instagram text-2xl"></i>
            <i className="fab fa-dribbble text-2xl"></i>
            <i className="fab fa-twitter text-2xl"></i>
            <i className="fab fa-facebook text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventHighlights;
