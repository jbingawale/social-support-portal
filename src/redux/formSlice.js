import { createSlice } from "@reduxjs/toolkit";

const savedData = JSON.parse(localStorage.getItem("formData"));

const formSlice = createSlice({
  name: "form",
  initialState: {
    step: 1,
    data: savedData || {
      name: "",
      nationalId: "",
      dob: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      country: "",
      phone: "",
      email: "",
      maritalStatus: "",
      dependents: "",
      employmentStatus: "",
      monthlyIncome: "",
      housingStatus: "",
      situation: "",
      employmentDesc: "",
      reason: "",
    },
  },
  reducers: {
    saveData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
      localStorage.setItem("formData", JSON.stringify(state.data));
    },
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    resetForm: (state) => {
      state.step = 1;
      state.data = {};
      localStorage.removeItem("formData");
    },
  },
});

export const { saveData, nextStep, prevStep, resetForm } = formSlice.actions;
export default formSlice.reducer;
