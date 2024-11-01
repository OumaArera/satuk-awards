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
          Celebrating Excellence, Fostering Inspiration, and Building a Legacy
        </p>

        {/* About SATUK AWARDS */}
        <div className="bg-gray-200 p-4 rounded-lg mb-8">
          <p className="text-gray-700 text-lg text-center">
            SATUK AWARDS 2024 is dedicated to recognizing outstanding students and groups within The Technical University of Kenya (TUK). This prestigious event brings together the brightest and most talented individuals who embody the spirit of leadership, innovation, and service to the university and beyond.
          </p>
          <p className="text-gray-700 text-lg text-center mt-4">
            Every nominee and winner represents a story of commitment, passion, and excellence. Whether it's academic achievements, creative innovations, community involvement, or leadership roles, the SATUK AWARDS 2024 honors those who inspire their peers and set the highest standards of achievement within TUK.
          </p>
        </div>

        {/* Invitation to Awards */}
        <div className="text-center">
          <p className="text-xl font-semibold text-green-600 mb-4">
            📢 Join us at the SATUK AWARDS 2024!
          </p>
          <p className="text-gray-700">
            We invite you to celebrate the remarkable contributions of our students and groups. Mark your calendar, bring your enthusiasm, and get ready to applaud those who make TUK a beacon of excellence!
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
              <p className="text-gray-700 text-center mb-4">Honoring the brightest and best of TUK</p>
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
