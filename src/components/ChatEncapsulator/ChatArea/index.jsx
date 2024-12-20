import React, { useRef, useEffect } from 'react';
import Message from '../Message';
import TypingIndicator from '../TypingIndicator';

const ChatArea = ({ messages, isTyping }) => {
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div
      className="chat-area flex-1 overflow-y-auto p-6 bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-lg"
      ref={chatRef}
    >
      {messages.map((msg) => (
        <Message
          key={msg.id}
          text={msg.text}
          sender={msg.sender}
          timestamp={msg.timestamp}
        />
      ))}
      {isTyping && (
        <div className="text-gray-500 italic">
          <TypingIndicator />
        </div>
      )}
    </div>
  );
};

export default ChatArea;
