import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: null,
    error: false,
    loading: true,
  },
  reducers: {
    userLoading: (state) => {
      state.error = false;
      state.loading = true;
    },
    userError: (state) => {
      state.error = true;
      state.loading = false;
    },
    userData: (state, obj) => {
      state.loading = false;
      state.user = obj.payload;
    },
  },
});

export const { userLoading, userError, userData } = userSlice.actions;
export default userSlice;
