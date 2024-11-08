import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    // actions
    setMessage: (state, action) => {
      state.message.splice(20, 1);
      state.message.push(action.payload);
    },
  },
});
export const { setMessage } = chatSlice.actions;
export default chatSlice.reducer;
