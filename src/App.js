import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Nomination from './Nomination';
import Vote from './Vote';

function App() {
  return (
    <Router>
      <div style={{ paddingTop: '110px' }} className="flex bg-gray-100 flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nomination" element={<Nomination />} />
          <Route path="/vote" element={<Vote />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
