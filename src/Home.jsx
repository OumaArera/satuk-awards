import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import tuk1 from './images/tuk1.jpg';
import tuk2 from './images/tuk2.jpg';
import tuk3 from './images/tuk3.jpg';
import tuk5 from './images/tuk5.jpg';
import tuk6 from './images/tuk6.jpg';
import tuk7 from './images/tuk8.jpg';

const isWithinDateRange = (startDate, endDate) => {
  const now = new Date();
  return now >= new Date(startDate) && now <= new Date(endDate);
};

const Home = () => {
  const [canVote, setCanVote] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const voteStart = new Date("2024-11-01T16:00:00Z");
    const voteEnd = new Date("2024-11-07T16:00:00Z");

    if (isWithinDateRange(voteStart, voteEnd)) {
      setCanVote(true);
    }
  }, []);

  const handleVoteClick = () => {
    if (canVote) {
      navigate('/vote');
    } else {
      setModalContent('Voting is currently closed.');
      setShowModal(true);
    }
  };

  const handleBuyTicketClick = () => {
    window.open('https://satuk-event-management.vercel.app/', '_blank');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      {/* Important Message for Non-TUK Students */}
      <div className="bg-red-700 text-white text-center py-3 px-4 font-bold text-lg shadow-md mb-4">
        ** Attention: Only non-TUK students need to purchase tickets to join the SATUK AWARDS 2024. 
        TUK students are <span className="underline">not required</span> to buy tickets. Click "Buy Ticket" if you are a non-TUK student. **
      </div>
      {/* Content Section */}
      <section className="container mx-auto p-4 grid grid-cols-1 gap-4">
        {/* Event Description Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
          <div className="w-full h-auto">
            <img src={tuk1} alt="Event" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
            <p className="text-xl md:text-3xl font-semibold">
              The Annual Excellence SATUK Awards Gala is a prestigious event dedicated to recognizing and honouring individuals and groups that have made outstanding contributions to their respective fields.
            </p>
          </div>
        </div>

        {/* Objectives Cards */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
          <div className="w-full h-auto">
            <img src={tuk2} alt="Objective 1" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
            <p className="text-xl md:text-3xl font-semibold">To recognise, appreciate, and reward students excelling in various disciplines within the university.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
          <div className="w-full h-auto">
            <img src={tuk3} alt="Objective 2" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
            <p className="text-xl md:text-3xl font-semibold">To encourage creativity and innovation across different disciplines within the university.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
          <div className="w-full h-auto">
            <img src={tuk7} alt="Objective 3" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
            <p className="text-xl md:text-3xl font-semibold">To showcase diverse talents within the university during the event.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
          <div className="w-full h-auto">
            <img src={tuk5} alt="Objective 4" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
            <p className="text-xl md:text-3xl font-semibold">To recognise and award those who go the extra mile in their fields.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
          <div className="w-full h-auto">
            <img src={tuk6} alt="Objective 5" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
            <p className="text-xl md:text-3xl font-semibold">To provide a platform for students to interact and network with corporate representatives.</p>
          </div>
        </div>
      </section>

      {/* Fixed Buttons Above Footer */}
      <div className="bg-white bg-opacity-80 fixed bottom-16 left-0 right-0 mx-auto p-4 shadow-md z-50">
        <div className="flex justify-around">
          <button
            onClick={handleVoteClick}
            className="bg-green-600 text-white py-2 px-4 rounded shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            Vote
          </button>
          <button
            onClick={handleBuyTicketClick}
            className="bg-purple-600 text-white py-2 px-4 rounded shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105"
          >
            Buy Ticket
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-md mx-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
            <p className="text-gray-700 text-center">{modalContent}</p>
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
  );
};

export default Home;
