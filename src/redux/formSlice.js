import { createSlice } from "@reduxjs/toolkit";

const savedData = JSON.parse(localStorage.getItem("formData"));

const formSlice = createSlice({
  name: "form",
  initialState: savedData || {
    step: 1,
    data: {},
  },
  reducers: {
    saveData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
      localStorage.setItem("formData", JSON.stringify(state));
    },
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
  },
});

export const { saveData, nextStep, prevStep } = formSlice.actions;
export default formSlice.reducer;
