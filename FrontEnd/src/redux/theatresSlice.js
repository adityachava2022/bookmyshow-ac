import { createSlice } from "@reduxjs/toolkit";

const threatresSlice = createSlice({
  name: "threatre",
  initialState: {
    threatres: [],
  },
  reducers: {
    setThreatres: (state, action) => {
      state.threatres = action.payload;
    },
  },
});

export const { setThreatres } = threatresSlice.actions;
export default threatresSlice.reducer;
