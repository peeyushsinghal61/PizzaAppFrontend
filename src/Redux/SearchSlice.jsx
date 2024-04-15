import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    searchFood:(state, action) => {
      state.search = action.payload;
    },
  },
});

export const { searchFood } = searchSlice.actions;
export default searchSlice.reducer;
