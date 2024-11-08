import { createSlice } from "@reduxjs/toolkit";

const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState: {
    open: true,
    video: [],
    category: "All",
  },
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
    setHomeVideo: (state, actions) => {
      state.video = actions.payload;
    },
    setCategory: (state, actions) => {
      state.category = actions.payload;
    },
  },
});

export const { toggleSidebar, setHomeVideo, setCategory } = hamburgerSlice.actions;
export default hamburgerSlice.reducer;
