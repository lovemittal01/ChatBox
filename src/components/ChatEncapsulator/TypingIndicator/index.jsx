import React from 'react';

const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-1">
      <div className="w-2 h-2 bg-[#723AFF] rounded-full animate-pulse"></div>
      <div className="w-2 h-2 bg-[#723AFF] rounded-full animate-pulse delay-150"></div>
      <div className="w-2 h-2 bg-[#723AFF] rounded-full animate-pulse delay-300"></div>
    </div>
  );
};

export default TypingIndicator;
