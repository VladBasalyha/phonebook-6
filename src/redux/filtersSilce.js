import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterValue(state, action) {
      return action.payload;
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { setFilterValue } = filterSlice.actions;
