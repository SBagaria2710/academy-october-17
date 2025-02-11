import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (scaler) => {
      console.log("Incrementing by 1");
      scaler.count = scaler.count + 1;
    },
    decrement: (scaler) => {
      console.log("Decrementing by 1");
      scaler.count = scaler.count - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice;
