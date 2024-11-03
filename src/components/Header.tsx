import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-dark-cyan text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="./Logo.png" alt="Nexus Logo" className="w-10 h-10 mr-2" />
        <span className="text-xl font-bold">Nexus</span>
      </div>
      <div className="flex items-center">
        <button className="mr-4 hover:text-gray-300">Profile</button>
        <button className="hover:text-gray-300">Settings</button>
      </div>
    </header>
  );
};

export default Header;
