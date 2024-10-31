import React, { useEffect, useState } from 'react';

const Nomination = () => {
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    // Open modal on load to inform the user about the timeline
    setShowModal(true);
  }, []);
  
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl animate-fadeIn">
        
        {/* Welcome Message */}
        <p className="text-center text-2xl font-bold text-gray-800 mb-4">
          🎉 Thank you for your enthusiasm!
        </p>
        
        <p className="text-center text-lg font-semibold text-gray-700 mb-6">
          Nominations are now closed. Here’s the exciting lineup of upcoming events:
        </p>

        {/* Timeline of Events */}
        <div className="bg-gray-200 p-4 rounded-lg mb-8">
          <ul className="space-y-4">
            <li>
              <span className="font-bold text-blue-600">Voting Period:</span> 
              <p className="text-gray-700">31st October 2024, 2 PM EAT - 8th November 2024, 2 PM EAT</p>
            </li>
            <li>
              <span className="font-bold text-blue-600">Vetting Process:</span> 
              <p className="text-gray-700">8th November - 11th November 2024</p>
            </li>
            <li>
              <span className="font-bold text-blue-600">Awards Ceremony:</span> 
              <p className="text-gray-700">15th November 2024</p>
              <p className="text-gray-700">Join us to celebrate the champions of our community!</p>
            </li>
          </ul>
        </div>

        {/* Invitation to Awards */}
        <div className="text-center">
          <p className="text-xl font-semibold text-green-600 mb-4">
            📢 Mark your calendars for the Awards Ceremony!
          </p>
          <p className="text-gray-700">
            We invite everyone to attend and cheer for the winners on <strong>15th November 2024</strong>.
            Let's celebrate excellence together!
          </p>
        </div>

        {/* Modal with Timeline Info */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-md mx-auto">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                &times;
              </button>
              <p className="text-gray-700 text-center font-semibold mb-4">Nominations Closed</p>
              <p className="text-gray-700 text-center mb-4">Voting opens soon!</p>
              <p className="text-blue-600 text-center mb-2">31st October - 8th November 2024</p>
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
