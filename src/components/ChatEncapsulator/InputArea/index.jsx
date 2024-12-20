import React from 'react';
import { PaperAirplaneIcon, PlusIcon, EmojiHappyIcon } from '@heroicons/react/solid';

const InputArea = ({ inputValue, setInputValue, sendMessage }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex items-center bg-white p-4 rounded-t-lg shadow-md border-t border-gray-300">
      
      {/* Document icon on the left of the input field */}
      <button
        className="bg-purple-100 p-2 rounded-full hover:bg-purple-200 mr-4"
        onClick={() => alert('Document upload clicked')}
      >
        <PlusIcon className="w-5 h-5 text-[#723AFF]" />
      </button>

      {/* Text area for message */}
      <textarea
        className="flex-1 p-3 border border-gray-300 rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-[#723AFF] hide-scrollbar"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        rows="1"
        style={{
          height: '40px',  // Fixed height
          lineHeight: '40px',  // Match line height with height to vertically center the text
          paddingTop: '0',  // No extra padding at the top
          paddingBottom: '0',  // No extra padding at the bottom
          resize: 'none',  // Prevent resizing
        }}
      ></textarea>
      
      {/* Emoji icon */}
      <button
        className="bg-purple-100 p-2 rounded-full hover:bg-purple-200 ml-4"
        onClick={() => alert('Emoji picker clicked')}
      >
        <EmojiHappyIcon className="w-5 h-5 text-[#723AFF]" />
      </button>

      {/* Send button with only the icon */}
      <button
        onClick={sendMessage}
        className="ml-4 bg-gradient-to-r from-[#723AFF] to-indigo-500 text-white p-2 rounded-full hover:shadow-lg flex items-center"
      >
        <PaperAirplaneIcon className="w-6 h-6 transform rotate-90" />
      </button>
    </div>
  );
};

export default InputArea;
