import { createSlice } from '@reduxjs/toolkit';

// Define the state interface
interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.count += 1;
    },
    decrement: (state: CounterState) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state,action) => {
      state.count += action.payload;
    }
  }
});

// Export actions and reducer
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
