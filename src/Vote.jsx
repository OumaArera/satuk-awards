import React, { useEffect, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
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
    categoryName: "The Student Leader of the Year Award",
    candidates: [
      {name: "Yvonne Nyanchera", id: 7},
      {name: "Peter Marite", id: 8},
      {name: "Peter Kanyua", id: 9}
    ]
  },
  {
    categoryId: 4,
    categoryName: "The Upcoming Student Leader of the Year Award",
    candidates: [
      {name: "Sherline Wambui", id: 10},
      {name: "Lawrence Ojiambo", id: 11},
      {name: "Adam Mwinzi", id: 12}
    ]
  },
  {
    categoryId: 5,
    categoryName: "The Most Influential Student of the Year Award",
    candidates: [
      {name: "Julias Narikae", id: 13},
      {name: "Evance Ouma", id: 14},
      {name: "Charles Bwibo", id: 15}
    ]
  },
  {
    categoryId: 6,
    categoryName: "The Student's Affairs Advocate of the Year Award",
    candidates: [
      {name: "James Kinuthia", id: 16},
      {name: "Stanley Motinda", id: 17},
      {name: "Martin Nyaga", id: 18}
    ]
  },
  {
    categoryId: 7,
    categoryName: "The Blogger of the Year Award",
    candidates: [
      {name: "Mercyline Namasaka", id: 19},
      {name: "Austine Wambingwa", id: 20},
      {name: "Lucky Jones", id: 21}
    ]
  },
  {
    categoryId: 8,
    categoryName: "The Faculty of the Year Award",
    candidates: [
      {name: "FSST", id: 22},
      {name: "FEBE", id: 23},
      {name: "FAST", id: 24}
    ]
  },
  {
    categoryId: 9,
    categoryName: "The Content Creator of the Year Award",
    candidates: [
      {name: "Comrade Premium TUK", id: 25},
      {name: "Burudani 14", id: 26},
      {name: "TUK Comrade", id: 27}
    ]
  },
  {
    categoryId: 10,
    categoryName: "The Club and/or Society of the Year Award",
    candidates: [
      {name: "Drama", id: 28},
      {name: "French Club", id: 29},
      {name: "Biochemestry and Biotechnology Students Association", id: 30}
    ]
  },
  {
    categoryId: 11,
    categoryName: "The Humanitarian of the Year Award",
    candidates: [
      {name: "Daltone Ogonda", id: 31},
      {name: "Felicity Orifah", id: 32},
      {name: "Elphas Aduwa", id: 33}
    ]
  },
  {
    categoryId: 12,
    categoryName: "The Most Innovative and Creative Student of the Year Award",
    candidates: [
      {name: "Kevin Kariuki", id: 34},
      {name: "David Onyango", id: 35},
      {name: "Francis Mwendwa", id: 36}
    ]
  },
  {
    categoryId: 13,
    categoryName: "The Entrepreneurial Student of the Year Award",
    candidates: [
      {name: "Martha Muraya", id: 37},
      {name: "Tirati Malei", id: 38},
      {name: "Dinah Mwikali", id: 39}
    ]
  },
  {
    categoryId: 25,
    categoryName: "The Graphic Designer of the Year Award",
    candidates: [
      {name: "Evans Kimutai", id: 73},
      {name: "Peter Muchina", id: 74},
      {name: "Isaac Kiarita", id: 75}
    ]
  },
  {
    categoryId: 14,
    categoryName: "The Poet and Song Writer of the Year Award",
    candidates: [
      {name: "Timothy Olumunyak", id: 40},
      {name: "Ray Junior Orek", id: 41},
      {name: "Yovan Manoa", id: 42}
    ]
  },
  {
    categoryId: 15,
    categoryName: "The Photographer of the Year Award",
    candidates: [
      {name: "White Shadow Photography", id: 43},
      {name: "Kenyanza Art Photography", id: 44},
      {name: "Crews Photography", id: 45}
    ]
  },
  {
    categoryId: 16,
    categoryName: "The Dance Crew of the Year Award",
    candidates: [
      {name: "Creative Ministry", id: 46},
      {name: "Catalan Dancers", id: 47},
      {name: "Dolores Tempora Temp", id: 48}
    ]
  },
  {
    categoryId: 17,
    categoryName: "The Service Provider of the Year Award",
    candidates: [
      {name: "Tecla Barasa", id: 49},
      {name: "Omondi Rolex", id: 50},
      {name: "Adika Ladslaus", id: 51}
    ]
  },
  {
    categoryId: 18,
    categoryName: "The Environment Advocate of the Year Award",
    candidates: [
      {name: "Yvette Kenyatta", id: 52},
      {name: "Moses Okal", id: 53},
      {name: "Michael Onduto", id: 54}
    ]
  },
  {
    categoryId: 19,
    categoryName: "The PWDs Advocate of the Year Award",
    candidates: [
      {name: "Leila Abdi", id: 55},
      {name: "Albert Ooko", id: 56},
      {name: "Asumwa Amwilu", id: 57}
    ]
  },
  {
    categoryId: 20,
    categoryName: "The Commitment to Service Award",
    candidates: [
      {name: "Damaris Njeri", id: 58},
      {name: "Lenox Onyango", id: 59},
      {name: "Maurice Cornel", id: 60}
    ]
  },
  {
    categoryId: 21,
    categoryName: "Indoor Games, Sports Team of the Year Award",
    candidates: [
      {name: "Taekwondo", id: 61},
      {name: "Badminton", id: 62},
      {name: "Chess", id: 63}
    ]
  },
  {
    categoryId: 22,
    categoryName: "Outdoor Games, Sports Team of the Year Award",
    candidates: [
      {name: "Basketball Ladies", id: 64},
      {name: "TUK Hammers", id: 65},
      {name: "Hockey", id: 66}
    ]
  },
  {
    categoryId: 23,
    categoryName: "Indoor Games, Sports Person of the Year Award",
    candidates: [
      {name: "Lawrence Osuru", id: 67},
      {name: "Ian Brian Ouma", id: 68},
      {name: "Martin Abwao", id: 69}
    ]
  },
  {
    categoryId: 24,
    categoryName: "Outdoor Games, Sports Person of the Year Award",
    candidates: [
      {name: "Mitchelle Ann Odhiambo", id: 70},
      {name: "Emmanuel Palimwacha", id: 71},
      {name: "Jasper Ombaso", id: 72}
    ]
  }
]



const Vote = () => {
  const [selectedCandidates, setSelectedCandidates] = useState({});
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isVotingOpen, setIsVotingOpen] = useState(true);
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const votingStartDate = new Date("2024-10-29T21:00:00Z");
  const votingEndDate = new Date("2024-11-08T21:00:00Z");

  useEffect(() => {
    const now = new Date();
    if (now < votingStartDate || now > votingEndDate) {
      setIsVotingOpen(false);
    }

    // Automatically set the first candidates for categories 1 and 2
    setSelectedCandidates((prev) => ({
      ...prev,
      1: votingDetails[0].candidates[0].id, // First candidate in the first category
      2: votingDetails[1].candidates[0].id, // First candidate in the second category
    }));
  }, []);

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(?:gmail\.com|yahoo\.com|outlook\.com|protonmail\.com)$/;
    return emailPattern.test(email);
  };

  const handleCandidateSelect = (categoryId, candidateId) => {
    setSelectedCandidates((prev) => ({ ...prev, [categoryId]: candidateId }));
  };

  const handleHCaptchaChange = (token) => {
    setCaptchaToken(token);
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateEmail(email)) {
      setErrorMessage('Invalid email format');
      setIsLoading(false);
      return;
    }

    if (!captchaToken) {
      setErrorMessage('Please complete the CAPTCHA check.');
      setIsLoading(false);
      return;
    }

    if (Object.keys(selectedCandidates).length !== votingDetails.length) {
      setErrorMessage('Please vote for each category.');
      setIsLoading(false);
      return;
    }

    const data = {
      voterEmail: email,
      candidateIds: Object.values(selectedCandidates),
      categoryIds: Object.keys(selectedCandidates).map(Number),
      captchaToken: captchaToken,
    };

    try {
      const response = await fetch('https://satuk.onrender.com/users/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.success) {
        setSelectedCandidates({});
        setSuccess(result.message);
        setTimeout(() => setSuccess(''), 5000);
      } else {
        setErrorMessage(result.message || 'Error submitting vote. Please try again.');
        setTimeout(() => setErrorMessage(''), 5000);
      }
    } catch (error) {
      setErrorMessage('Error submitting vote. Please try again.');
      setTimeout(() => setErrorMessage(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        {isVotingOpen ? (
          <form className="bg-white p-6 rounded shadow-lg" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-4">Vote for Your Candidates</h1>

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

            {votingDetails.slice(2).map((category) => (
              <div key={category.categoryId} className="mb-4">
                <h2 className="font-semibold mb-2">{category.categoryName}</h2>
                {category.candidates.map((candidate) => (
                  <label key={candidate.id} className="flex items-center space-x-2 mb-1">
                    <input
                      type="radio"
                      name={`category-${category.categoryId}`}
                      value={candidate.id}
                      onChange={() => handleCandidateSelect(category.categoryId, candidate.id)}
                      required
                    />
                    <span>{candidate.name}</span>
                  </label>
                ))}
              </div>
            ))}

            <div className="mb-4">
              <HCaptcha sitekey={siteKey} onVerify={handleHCaptchaChange} />
            </div>

            {errorMessage && <div className="text-red-600 font-semibold">{errorMessage}</div>}
            {success && <div className="text-green-600 font-semibold">{success}</div>}

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
              disabled={isLoading || !captchaToken}
            >
              {isLoading ? 'Submitting Vote...' : 'Submit Vote'}
            </button>
          </form>
        ) : (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg text-center">
              <h2 className="text-xl font-semibold mb-2">Voting Closed</h2>
              <p className="text-gray-600">The voting period is from October 31 at midnight to November 8, 2024.</p>
              <p className="text-gray-600 mt-4">Please check back within the allowed dates.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vote;



