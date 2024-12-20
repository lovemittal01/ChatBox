import React from 'react';
import { ChatAlt2Icon } from '@heroicons/react/solid';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#723AFF] to-indigo-500 text-white py-4 px-6 shadow-md rounded-b-lg">
      <h1 className="text-xl font-bold flex items-center">
        <ChatAlt2Icon className="w-8 h-8 mr-3" />
        ChatBox
      </h1>
    </header>
  );
};

export default Header;
