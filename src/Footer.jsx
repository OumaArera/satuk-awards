import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} SATUK AWARDS. All Rights Reserved.
        </p>
        <p className="text-sm mb-2">
          Contact: <a href="tel:0714747636" className="text-blue-400 hover:underline">0714747636</a> - Nabangi Wanyonyi
        </p>
        <p className="text-sm">
          Event Location: Graduation Square, Friday 15th November 2024, from 4:00 PM
        </p>
      </div>
    </footer>
  );
};

export default Footer;
