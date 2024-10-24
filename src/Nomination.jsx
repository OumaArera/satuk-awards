import React, { useState, useEffect } from 'react';
const NOMINATION_URL = 'https://satuk.onrender.com/users/nominate';

// Helper function to check the current date against the nomination period
const isWithinNominationPeriod = (startDate, endDate) => {
  const now = new Date();
  return now >= new Date(startDate) && now <= new Date(endDate);
};

const categories = [
    "The Vice Chancellor's Award",
    "The President's Commendation Award",
    "The Student Leader of the Year Award",
    "The Upcoming Student Leader of the Year Award",
    "The Most Influential Student of the Year Award",
    "The Student's Affairs Advocate of the Year Award",
    "The Blogger of the Year Award",
    "The Faculty of the Year Award",
    "The Content Creator of the Year Award",
    "The Club and/or Society of the Year Award",
    "The Humanitarian of the Year Award",
    "The Most Innovative and Creative Student of the Year Award",
    "The Entrepreneurial Student of the Year Award",
    "The Graphic Designer of the Year Award",
    "The Poet and Song Writer of the Year Award",
    "The Photographer of the Year Award",
    "The Dance Crew of the Year Award",
    "The Service Provider of the Year Award",
    "The Environment Advocate of the Year Award",
    "The PWDs Advocate of the Year Award",
    "The Commitment to Service Award",
    "Indoor Games Sports Team of the Year Award",
    "Outdoor Games Sports Team of the Year Award",
    "Indoor Games Sports Person of the Year Award",
    "Outdoor Games Sports Person of the Year Award"
];

const Nomination = () => {
  const [nominatorEmail, setNominatorEmail] = useState('');
  const [nominees, setNominees] = useState(categories.map(() => ''));
  const [reviewMode, setReviewMode] = useState(false); // Review Mode
  const [modalMessage, setModalMessage] = useState(''); // Modal message
  const [showModal, setShowModal] = useState(false); // Modal visibility
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  // Effect to check nomination time validity
  useEffect(() => {
    const nominationStart = '2024-10-24T12:00:00+03:00'; // EAT timezone
    const nominationEnd = '2024-10-30T14:00:00+03:00';
    
    if (!isWithinNominationPeriod(nominationStart, nominationEnd)) {
      setModalMessage('Nominations are closed or yet to begin.');
      setShowModal(true);
    }
  }, []);

  const handleNomineeChange = (index, value) => {
    const updatedNominees = [...nominees];
    updatedNominees[index] = value;
    setNominees(updatedNominees);
  };

  const handleReview = () => {
    const allFieldsFilled = nominees.every((nominee) => nominee.trim() !== '');

    if (!nominatorEmail.trim()) {
      setError('Please enter your email.');
    } else if (!allFieldsFilled) {
      setError('Please fill in all nomination fields before proceeding.');
    } else {
      setError('');
      setReviewMode(true);
    }
  };

  const handleEdit = () => {
    setReviewMode(false);
  };

  const handleSubmit = async () => {
    setLoading(true);  // Set loading to true
  
    const payload = {
      nominator: nominatorEmail,
      nominees: nominees
        .map((name, index) => ({
          name,
          category: index + 1,
        }))
        .filter((nominee) => nominee.name),
    };
  
    Object.entries(payload).forEach(([key, value]) => console.log(`${key} : ${value}`));
  
    try {
      const response = await fetch(NOMINATION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
  
      if (result.success) {
        setMessage(result.message);
        setError('');
  
        // Clear inputs after successful submission
        setNominatorEmail('');
        setNominees(categories.map(() => ''));
  
        // Exit review mode and go back to form
        setReviewMode(false);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Submission failed. Please try again.');
    } finally {
      setLoading(false); // Set loading to false
    }
  
    setTimeout(() => {
      setMessage('');
      setError('');
    }, 5000); // Clear messages after 5 seconds
  };
  

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        {/* Instructional Message */}
        <p className="text-center text-lg font-semibold text-gray-700 mb-6">
          Please nominate a person in each category. Ensure that you complete all fields before submission.
        </p>
  
        {/* Modal to display messages */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-md mx-auto">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                &times;
              </button>
              <p className="text-gray-700 text-center">{modalMessage}</p>
              <button
                onClick={closeModal}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded shadow-lg hover:bg-blue-700 transition duration-300 w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
        {/* Form or Review Mode */}
        {!reviewMode ? (
          <div>
            <h1 className="text-2xl font-semibold text-center mb-6">Nomination Form</h1>
            
            {/* Email Input */}
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              value={nominatorEmail}
              onChange={(e) => setNominatorEmail(e.target.value)}
              className="border border-gray-300 p-2 rounded mb-6 w-full placeholder-gray-400"
              placeholder="Enter your valid email"
              required
            />
  
            {/* Nomination Categories */}
            {categories.map((category, index) => (
              <div key={index} className="mb-6">
                <label className="block mb-2 font-semibold text-gray-700">{category}</label>
                <input
                  type="text"
                  value={nominees[index]}
                  onChange={(e) => handleNomineeChange(index, e.target.value)}
                  className="border border-gray-300 p-2 rounded w-full placeholder-gray-400"
                  placeholder={`Nominate a person for ${category}`}
                />
              </div>
            ))}

            
            {/* Review Button */}
            <div className="text-center mt-6">
              <button
                onClick={handleReview}
                className="bg-green-600 text-white py-2 px-4 rounded shadow-lg hover:bg-green-700 transition duration-300"
              >
                Review
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-semibold text-center mb-6">Review Your Nominations</h1>
            <ul className="list-disc ml-6">
              {nominees.map((name, index) => (
                name && (
                  <li key={index} className="mb-2">
                    {categories[index]}: <strong>{name}</strong>
                  </li>
                )
              ))}
            </ul>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleEdit}
                className="bg-gray-600 text-white py-2 px-4 rounded shadow-lg hover:bg-gray-700 transition duration-300"
              >
                Edit
              </button>
                {/* Display success and error messages */}
                {message && <p className="text-green-500 text-center mb-4">{message}</p>}
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
              <button
                onClick={handleSubmit}
                className={`bg-green-600 text-white py-2 px-4 rounded shadow-lg hover:bg-green-700 transition duration-300 ${loading ? 'opacity-50' : ''}`}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nomination;
