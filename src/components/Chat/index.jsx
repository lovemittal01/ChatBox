import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import ChatArea from '../ChatEncapsulator/ChatArea';
import InputArea from '../ChatEncapsulator/InputArea';
import { addMessage, setTyping } from '../../features/chat/chatSlice';

const Chat = () => {
  const dispatch = useDispatch();
  const { messages, isTyping } = useSelector((state) => state.chat);
  const [inputValue, setInputValue] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const botReplies = [
    "Thank you for your message! I'll get back to you shortly.",
    "I'm here to help! Could you provide more details?",
    "That's interesting! Let me think about it.",
    "Could you clarify your question, please?",
    "I'll process that and get back to you in a moment.",
  ];

  // Load chat history from localStorage on mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Save chat history to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
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
    if (inputValue.trim() === '') return;

    const newMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: formatTime(),
    };

    dispatch(addMessage(newMessage));
    setInputValue('');

    // Simulate bot response
    dispatch(setTyping(true));
    setTimeout(() => {
      const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];

      const botMessage = {
        id: Date.now(),
        text: randomReply,
        sender: 'bot',
        timestamp: formatTime(),
      };

      dispatch(addMessage(botMessage));
      dispatch(setTyping(false));
    }, 2000);
  };

  if (!isLoaded) {
    return <div>Loading chat...</div>;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <ChatArea messages={messages} isTyping={isTyping} />
      <InputArea
        inputValue={inputValue}
        setInputValue={setInputValue}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default Chat;
