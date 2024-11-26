import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

// Define the User type
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    // Add any other fields from the API response
}

// Define initial state with the correct type
const initialState: User[] = [];

// Create async thunk to fetch users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(USERS_URL);
    return response.data;
});

// Create the slice with proper state typing
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}, // Remove if you don't need any custom reducers
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (_state, action) => {
            // Here we're returning action.payload directly to update the state
            return action.payload;
        });
    }
});

// Selector to access users from the state
export const selectAllUsers = (state: { users: User[] }) => state.users;

export default usersSlice.reducer;
