import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SubscriptionState {
  email: string;
  subscribed: boolean;
}

const initialState: SubscriptionState = {
  email: '',
  subscribed: false,
};

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    subscribe: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      state.subscribed = true;
    },
    resetSubscription: (state) => {
      state.email = '';
      state.subscribed = false;
    },
  },
});

export const { subscribe, resetSubscription } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
