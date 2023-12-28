import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCar: 20,
};

const carSlice = createSlice({
  name: "Cars",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCar--;
    },
    restore: (state) => {
      state.numOfCar++;
    },
  },
});

export default carSlice.reducer;

export const { ordered, restore } = carSlice.actions;
