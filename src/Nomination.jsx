import React, { useEffect, useState } from 'react';

const Nomination = () => {
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    // Open modal on load to inform the user about SATUK AWARDS 2024
    setShowModal(true);
  }, []);
  
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl animate-fadeIn">
        
        {/* Welcome Message */}
        <p className="text-center text-3xl font-bold text-gray-800 mb-4">
          🎉 Welcome to SATUK AWARDS 2024!
        </p>
        
        <p className="text-center text-lg font-semibold text-gray-700 mb-6">
          Celebrating the Exceptional Change-Makers Who Shape Our Society
        </p>

        {/* Message from the President */}
        <div className="bg-gray-200 p-4 rounded-lg mb-8">
          <p className="text-gray-700 text-lg text-center">
            “The SATUK AWARDS 2024 is more than an event; it's a tribute to the visionaries, the outliers, and the passionate change-makers within The Technical University of Kenya (TUK). These awards recognize those who do not simply meet expectations—they redefine them. They are the ones who dare to go beyond, creating solutions, inspiring communities, and lighting paths toward a better future for us all.
          </p>
          <p className="text-gray-700 text-lg text-center mt-4">
            Whether through groundbreaking projects, unwavering commitment to service, or an unrelenting spirit to improve the world, our nominees and winners remind us of the power of purpose-driven action. Each is a testament to what we can achieve when we dedicate ourselves to serving others and pushing the boundaries of possibility. It is my honor to welcome you all to celebrate the remarkable efforts and inspiring accomplishments of TUK’s finest.
          </p>
          <p className="text-gray-700 text-lg text-center mt-4 font-semibold">
            – Nabangi Wanyonyi, 7th President of TUK
          </p>
        </div>

        {/* Invitation to Awards */}
        <div className="text-center">
          <p className="text-xl font-semibold text-green-600 mb-4">
            📢 Join us at the SATUK AWARDS 2024!
          </p>
          <p className="text-gray-700">
            We invite you to be part of this unforgettable celebration. Bring your passion, your applause, and your pride as we honor those who strive to make TUK and the world a brighter place for everyone.
          </p>
        </div>

        {/* Modal with Welcome Info */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-md mx-auto">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                &times;
              </button>
              <p className="text-gray-700 text-center font-semibold mb-4">Welcome to SATUK AWARDS 2024</p>
              <p className="text-gray-700 text-center mb-4">Celebrating the Exceptional Change-Makers of TUK</p>
              <button
                onClick={closeModal}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded shadow-lg hover:bg-blue-700 transition duration-300 w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nomination;
