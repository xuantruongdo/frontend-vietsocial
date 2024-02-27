import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
    selectedChat: IChat | null;
}
  
const initialState: IAppState = {
  selectedChat: null,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    doSelectedChatAction: (state, action) => {
      state.selectedChat = action.payload;
    },
  },
});

export const { doSelectedChatAction } = chatSlice.actions;

export default chatSlice.reducer;