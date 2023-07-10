import { createSlice } from '@reduxjs/toolkit';

const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    entries: [],
  },
  reducers: {
    saveBudgetEntry: (state, action) => {
      state.entries.push(action.payload);
    },
  },
});

export const { saveBudgetEntry } = budgetSlice.actions;

export default budgetSlice.reducer;
