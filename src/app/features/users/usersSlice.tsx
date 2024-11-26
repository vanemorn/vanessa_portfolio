import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../posts/store";

// Define the users URL
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

// Define the User type to improve type safety
interface User {
    id: string;
    name: string;
    username: string;
    email: string;
}

// Set the initial state for users (initially an empty array)
const initialState: User[] = [];

// Create an async thunk to fetch users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(USERS_URL);
        return response.data as User[]; // Explicitly type the response
    } catch (err: any) {
        return err.message; // Handle errors
    }
});

// Create the users slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                return action.payload; // Store the fetched users
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                console.error("Failed to fetch users: ", action.error.message);
                // You can also update the state here with an error message if needed
                // For example: state.error = action.error.message;
            });
    }
});

// Selector to access all users from state
export const selectAllUsers = (state: RootState) => state.users;

// Export the reducer as default
export default usersSlice.reducer;
