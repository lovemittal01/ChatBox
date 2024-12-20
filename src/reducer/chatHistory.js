import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: JSON.parse(localStorage.getItem('chatHistory')) || [],
  isTyping: false,
};

const chatHistory = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setTyping: (state, action) => {
      state.isTyping = action.payload;
    },
    loadChatHistory: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { addMessage, setTyping, loadChatHistory } = chatHistory.actions;
export default chatHistory.reducer;
