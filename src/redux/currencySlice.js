import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  baseCurrency: 'UAH',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
});

export const { setBaseCurrency } = currencySlice.actions;
export default currencySlice.reducer;
