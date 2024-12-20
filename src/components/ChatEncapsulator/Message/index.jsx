import React, { useState } from 'react';
import userImage from '../../../assets/user.png';
import botImage from '../../../assets/bot.png';

const Message = ({ text, sender, timestamp }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isUser = sender === 'user';

  return (
    <div className="relative my-4 sm:my-6">
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} relative`}>
        {/* For bot messages, display bot image with circular background */}
        {!isUser && (
          <div className="absolute w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center z-10"
            style={{ top: '-15px', left: '-10px' }}>
            <img
              src={botImage}
              alt="Bot"
              className="w-6 h-6 rounded-full"
            />
          </div>
        )}

        <div
          className={`max-w-xs px-4 py-3 rounded-xl shadow-md ${isUser ? 'bg-gradient-to-r from-[#723AFF] to-indigo-500 text-white' : 'bg-white text-gray-800'} break-words relative`}
          style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {text}
        </div>

        {/* For user messages, display user image with circular background */}
        {isUser && (
          <div className="absolute w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center z-10"
            style={{ top: '-15px', right: '-10px' }}>
            <img
              src={userImage}
              alt="User"
              className="w-6 h-6 rounded-full"
            />
          </div>
        )}
      </div>

      {/* Timestamp at the bottom of the message, conditionally placed */}
      <div className={`text-xs text-gray-500 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
        {timestamp}
        
        {/* Show double tick (Delivered/Read) only for user messages */}
        {isUser && isHovered && (
          <span className="material-icons text-green-500 text-xs ml-2 inline-block align-middle">
            done_all
          </span>
        )}
      </div>
    </div>
  );
};

export default Message;
