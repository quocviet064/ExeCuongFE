import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  priceRange: { min: 0, max: Infinity },
  areaRange: { min: 0, max: Infinity },
  locationType: '',
  vibe: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPriceFilter: (state, action) => {
      state.priceRange = action.payload;
    },
    setAreaFilter: (state, action) => {
      state.areaRange = action.payload;
    },
    setLocationTypeFilter: (state, action) => {
      state.locationType = action.payload;
    },
    setVibeFilter: (state, action) => {
      state.vibe = action.payload;
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const {
  setPriceFilter,
  setAreaFilter,
  setLocationTypeFilter,
  setVibeFilter,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
