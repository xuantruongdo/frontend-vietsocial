import { configureStore } from '@reduxjs/toolkit';
import accountSlice from "./account/accountSlice";
import chatSlice from './chat/chatSlice';
import socketSlice from './socket/socketSlice';

export const store = configureStore({
  reducer: {
    account: accountSlice,
    chat: chatSlice,
    socket: socketSlice
  },
});
