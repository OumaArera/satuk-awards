import React, { useState, useEffect } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

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

const CAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

// Rest of your imports...

const Nomination = () => {
  const [nominatorEmail, setNominatorEmail] = useState('');
  const [nominees, setNominees] = useState(categories.map(() => ''));
  const [reviewMode, setReviewMode] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  useEffect(() => {
    const nominationStart = '2024-10-24T12:00:00+03:00';
    const nominationEnd = '2024-10-30T14:00:00+03:00';
    
    if (!isWithinNominationPeriod(nominationStart, nominationEnd)) {
      setModalMessage('Nominations are closed or yet to begin.');
      setShowModal(true);
    }
  }, []);

  const handleHCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  

  const handleSubmit = async () => {
    if (!captchaToken) {
      setError('Please complete the CAPTCHA.');
      return;
    }

    setLoading(true);
  
    const payload = {
      nominator: nominatorEmail,
      nominees: nominees
        .map((name, index) => ({
          name,
          category: index + 1,
        }))
        .filter((nominee) => nominee.name),
    };
  
    try {
      const response = await fetch(NOMINATION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...payload, captchaToken }),
      });
      const result = await response.json();
  
      if (result.success) {
        setMessage(result.message);
        setError('');
        setNominatorEmail('');
        setNominees(categories.map(() => ''));
        setReviewMode(false);
        setCaptchaToken(null); // Reset captcha token
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  
    setTimeout(() => {
      setMessage('');
      setError('');
    }, 5000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        {/* Instructional Message */}
        <p className="text-center text-lg font-semibold text-gray-700 mb-6">
          Please nominate a person in each category. Ensure that you complete all fields before submission.
        </p>
  
        {/* Success or error message */}
        {message && (
          <p className="text-center text-green-600 font-medium mb-4">{message}</p>
        )}
        {error && (
          <p className="text-center text-red-600 font-medium mb-4">{error}</p>
        )}
  
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
  
        {/* Email input for nominator */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="nominatorEmail">
            Your Email
          </label>
          <input
            type="email"
            id="nominatorEmail"
            value={nominatorEmail}
            onChange={(e) => setNominatorEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
  
        {/* Nominee input fields for each category */}
        {categories.map((category, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              {category}
            </label>
            <input
              type="text"
              value={nominees[index]}
              onChange={(e) => {
                const updatedNominees = [...nominees];
                updatedNominees[index] = e.target.value;
                setNominees(updatedNominees);
              }}
              placeholder={`Nominee for ${category}`}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
  
        {/* HCaptcha for spam prevention */}
        <div className="text-center mb-6">
          <HCaptcha
            sitekey={CAPTCHA_SITE_KEY}
            onVerify={handleHCaptchaChange}
          />
        </div>
  
        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={loading || !captchaToken}
          className={`w-full bg-green-600 text-white py-2 px-4 rounded shadow-lg hover:bg-green-700 transition duration-300 ${loading ? 'opacity-50' : ''}`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
  
};

export default Nomination;

