import React, { useEffect, useState } from 'react';

const Vote = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  // Define the voting period
  const votingStartDate = new Date('2024-11-01T00:00:00'); // 1st November 2024, 12:00 AM
  const votingEndDate = new Date('2024-11-08T23:59:59'); // 8th November 2024, 11:59 PM

  useEffect(() => {
    const now = new Date();
    
    // Check if the current date is outside the voting period
    if (now < votingStartDate || now > votingEndDate) {
      setShowOverlay(true);
    }
  }, []);

  // Close the overlay
  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="relative">
      {/* Overlay Message */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-md mx-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeOverlay}
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold text-center text-gray-700 mb-4">
              Voting Information
            </h2>
            <p className="text-gray-700 text-center">
              Voting will start on <strong>1st November 2024 at 12:00 AM</strong> and end on <strong>8th November 2024 at midnight</strong>.
            </p>
          </div>
        </div>
      )}

      {/* Main Content of the Vote Page */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold">Vote for Your Candidates</h1>
        {/* Additional vote page content can go here */}
      </div>
    </div>
  );
};

export default Vote;
