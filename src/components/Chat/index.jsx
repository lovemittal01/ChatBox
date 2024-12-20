import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import ChatArea from '../ChatEncapsulator/ChatArea';
import InputArea from '../ChatEncapsulator/InputArea';
import { addMessage, setTyping } from '../../reducer/chatSlice';

const Chat = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null); // Error state

  const botReplies = [
    "Thank you for your message! I'll get back to you shortly.",
    "I'm here to help! Could you provide more details?",
    "That's interesting! Let me think about it.",
    "Could you clarify your question, please?",
    "I'll process that and get back to you in a moment.",
  ];

  const { messages, isTyping } = useSelector((state) => {
    try {
      return state.chat || { messages: [], isTyping: false }; // Fallback to avoid TypeError
    } catch (err) {
      setError('An error occurred while loading the chat state.');
      console.error(err);
      return { messages: [], isTyping: false };
    }
  });

  useEffect(() => {
    try {
      setIsLoaded(true);
    } catch (err) {
      setError('Failed to load the chat.');
      console.error(err);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('chatHistory', JSON.stringify(messages));
    } catch (err) {
      setError('Failed to save chat history.');
      console.error(err);
    }
  }, [messages]);

  const formatTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  };

  const sendMessage = () => {
    try {
      if (inputValue.trim() === '') return;

      const newMessage = {
        id: Date.now(),
        text: inputValue,
        sender: 'user',
        timestamp: formatTime(),
      };

      dispatch(addMessage(newMessage));
      setInputValue('');

      dispatch(setTyping(true));
      setTimeout(() => {
        const randomReply =
          botReplies[Math.floor(Math.random() * botReplies.length)] || 'Sorry, no response available.';

        const botMessage = {
          id: Date.now(),
          text: randomReply,
          sender: 'bot',
          timestamp: formatTime(),
        };

        dispatch(addMessage(botMessage));
        dispatch(setTyping(false));
      }, 2000);
    } catch (err) {
      setError('Failed to send the message.');
      console.error(err);
    }
  };

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-50 text-red-700">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Something went wrong</h1>
          <p className="mt-2">{error}</p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return <div className="flex items-center justify-center h-screen">Loading chat...</div>;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-10">
        <Header />
      </div>
      <div className="flex flex-col h-full mt-16 mb-16 overflow-hidden">
        <ChatArea messages={messages} isTyping={isTyping} className="flex-grow overflow-auto" />
        <div className="fixed bottom-0 left-0 right-0 z-10">
          <InputArea
            inputValue={inputValue}
            setInputValue={setInputValue}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
