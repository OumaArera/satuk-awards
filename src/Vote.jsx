import React, { useEffect, useState } from 'react';

const votingDetails=[
  {
    categoryId: 1,
    categoryName: "The Vice Chancellor's Award",
    candidates: [
      {name: "Test1", id: 1},
      {name: "Test2", id: 2},
      {name: "Test3", id: 3}
    ]
  },
  {
    categoryId: 2,
    categoryName: "The President's Commendation Award",
    candidates: [
      {name: "Test1", id: 4},
      {name: "Test2", id: 5},
      {name: "Test3", id: 6}
    ]
  },
  {
    categoryId: 3,
    categoryName: "The President's Commendation Award",
    candidates: [
      {name: "Test1", id: 7},
      {name: "Test2", id: 8},
      {name: "Test3", id: 9}
    ]
  },
  {
    categoryId: 4,
    categoryName: "The Upcoming Student Leader of the Year Award",
    candidates: [
      {name: "Test1", id: 10},
      {name: "Test2", id: 11},
      {name: "Test3", id: 12}
    ]
  },
  {
    categoryId: 5,
    categoryName: "The Most Influential Student of the Year Award",
    candidates: [
      {name: "Test1", id: 13},
      {name: "Test2", id: 14},
      {name: "Test3", id: 15}
    ]
  },
  {
    categoryId: 6,
    categoryName: "The Student's Affairs Advocate of the Year Award",
    candidates: [
      {name: "Test1", id: 16},
      {name: "Test2", id: 17},
      {name: "Test3", id: 18}
    ]
  },
  {
    categoryId: 7,
    categoryName: "The Blogger of the Year Award",
    candidates: [
      {name: "Test1", id: 19},
      {name: "Test2", id: 20},
      {name: "Test3", id: 21}
    ]
  },
  {
    categoryId: 8,
    categoryName: "The Faculty of the Year Award",
    candidates: [
      {name: "Test1", id: 22},
      {name: "Test2", id: 23},
      {name: "Test3", id: 24}
    ]
  },
  {
    categoryId: 9,
    categoryName: "The Content Creator of the Year Award",
    candidates: [
      {name: "Test1", id: 25},
      {name: "Test2", id: 26},
      {name: "Test3", id: 27}
    ]
  },
  {
    categoryId: 10,
    categoryName: "The Club and/or Society of the Year Award",
    candidates: [
      {name: "Test1", id: 28},
      {name: "Test2", id: 29},
      {name: "Test3", id: 30}
    ]
  },
  {
    categoryId: 11,
    categoryName: "The Humanitarian of the Year Award",
    candidates: [
      {name: "Test1", id: 31},
      {name: "Test2", id: 32},
      {name: "Test3", id: 33}
    ]
  },
  {
    categoryId: 12,
    categoryName: "The Most Innovative and Creative Student of the Year Award",
    candidates: [
      {name: "Test1", id: 34},
      {name: "Test2", id: 35},
      {name: "Test3", id: 36}
    ]
  },
  {
    categoryId: 13,
    categoryName: "The Entrepreneurial Student of the Year Award",
    candidates: [
      {name: "Test1", id: 37},
      {name: "Test2", id: 38},
      {name: "Test3", id: 39}
    ]
  },
  {
    categoryId: 25,
    categoryName: "The Graphic Designer of the Year Award",
    candidates: [
      {name: "Test1", id: 73},
      {name: "Test2", id: 74},
      {name: "Test3", id: 75}
    ]
  },
  {
    categoryId: 14,
    categoryName: "The Poet and Song Writer of the Year Award",
    candidates: [
      {name: "Test1", id: 40},
      {name: "Test2", id: 41},
      {name: "Test3", id: 42}
    ]
  },
  {
    categoryId: 15,
    categoryName: "The Photographer of the Year Award",
    candidates: [
      {name: "Test1", id: 43},
      {name: "Test2", id: 44},
      {name: "Test3", id: 45}
    ]
  },
  {
    categoryId: 16,
    categoryName: "The Dance Crew of the Year Award",
    candidates: [
      {name: "Test1", id: 46},
      {name: "Test2", id: 47},
      {name: "Test3", id: 48}
    ]
  },
  {
    categoryId: 17,
    categoryName: "The Service Provider of the Year Award",
    candidates: [
      {name: "Test1", id: 49},
      {name: "Test2", id: 50},
      {name: "Test3", id: 51}
    ]
  },
  {
    categoryId: 18,
    categoryName: "The Environment Advocate of the Year Award",
    candidates: [
      {name: "Test1", id: 52},
      {name: "Test2", id: 53},
      {name: "Test3", id: 54}
    ]
  },
  {
    categoryId: 19,
    categoryName: "The PWDs Advocate of the Year Award",
    candidates: [
      {name: "Test1", id: 55},
      {name: "Test2", id: 56},
      {name: "Test3", id: 57}
    ]
  },
  {
    categoryId: 20,
    categoryName: "The Commitment to Service Award",
    candidates: [
      {name: "Test1", id: 58},
      {name: "Test2", id: 59},
      {name: "Test3", id: 60}
    ]
  },
  {
    categoryId: 21,
    categoryName: "Indoor Games, Sports Team of the Year Award",
    candidates: [
      {name: "Test1", id: 61},
      {name: "Test2", id: 62},
      {name: "Test3", id: 63}
    ]
  },
  {
    categoryId: 22,
    categoryName: "Outdoor Games, Sports Team of the Year Award",
    candidates: [
      {name: "Test1", id: 64},
      {name: "Test2", id: 65},
      {name: "Test3", id: 66}
    ]
  },
  {
    categoryId: 23,
    categoryName: "Indoor Games, Sports Person of the Year Award",
    candidates: [
      {name: "Test1", id: 67},
      {name: "Test2", id: 68},
      {name: "Test3", id: 69}
    ]
  },
  {
    categoryId: 24,
    categoryName: "Outdoor Games, Sports Person of the Year Award",
    candidates: [
      {name: "Test1", id: 70},
      {name: "Test2", id: 71},
      {name: "Test3", id: 72}
    ]
  }
]


const Vote = () => {
  const [selectedCandidates, setSelectedCandidates] = useState({});
  const [email, setEmail] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState("");

  // Time constraint
  const votingStartDate = new Date();
  const votingEndDate = new Date('2024-11-08T23:59:59');

  // Validate Email (excludes invalid formats)
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(?:gmail\.com|yahoo\.com|outlook\.com|protonmail\.com)$/;
    return emailPattern.test(email);
  };

  useEffect(() => {
    const now = new Date();
    if (now < votingStartDate || now > votingEndDate) {
      setShowOverlay(true);
    } else {
      setShowOverlay(false);
    }
  }, []);

  // Handle candidate selection
  const handleCandidateSelect = (categoryId, candidateId) => {
    setSelectedCandidates((prev) => ({ ...prev, [categoryId]: candidateId }));
  };

  // Submit vote
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Invalid email format');
      return;
    }

    // Check if all categories have been selected
    if (Object.keys(selectedCandidates).length !== votingDetails.length) {
      setErrorMessage('Please vote for each category.');
      return;
    }

    const data = {
      voterEmail: email,
      candidateIds: Object.values(selectedCandidates),
      categoryIds: Object.keys(selectedCandidates).map(Number),
    };
    Object.entries(data).forEach(([key, value]) => console.log(`${key} : ${value}`));

    setIsLoading(true);
    try {
      const response = await fetch('https://satuk.onrender.com/users/vote', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      });
      const result = response.json()
      if(result.success){
        setSuccess(result.message);
        setTimeout(() => setSuccess(''), 5000);
      }
    } catch (error) {
      setErrorMessage('Error submitting vote. Please try again.');
      setTimeout(() => setErrorMessage(''), 5000);
    } finally{
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-lg font-semibold text-center mb-4">
              Voting Not Yet Open
            </h2>
            <p className="text-center">
              Voting starts on <strong>today at 12:00 AM</strong> and ends on{' '}
              <strong>8th November 2024 at midnight</strong>.
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          className="bg-white p-6 rounded shadow-lg"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold mb-4">Vote for Your Candidates</h1>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Category Candidate Selection */}
          {votingDetails.map((category) => (
            <div key={category.categoryId} className="mb-4">
              <h2 className="font-semibold mb-2">{category.categoryName}</h2>
              {category.candidates.map((candidate) => (
                <label
                  key={candidate.id}
                  className="flex items-center space-x-2 mb-1"
                >
                  <input
                    type="radio"
                    name={`category-${category.categoryId}`}
                    value={candidate.id}
                    onChange={() =>
                      handleCandidateSelect(category.categoryId, candidate.id)
                    }
                    required
                  />
                  <span>{candidate.name}</span>
                </label>
              ))}
            </div>
          ))}

          {/* Error Message */}
          {errorMessage && (
            <div className="text-red-600 font-semibold">{errorMessage}</div>
            
          )}
          {success && (
            <div className="text-green-600 font-semibold">{success}</div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting Vote...' : 'Submit Vote'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Vote;

