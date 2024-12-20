import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../reducer/chatHistory';

const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

export default store;
