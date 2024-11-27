import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the shape of a User
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

// Define the initial state type
interface UsersState {
    users: User[];
}

// Define the API URL
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

// Define the initial state
const initialState: UsersState = {
    users: [],
};

// Create an async thunk to fetch users from the API
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(USERS_URL);
    return response.data;
});

// Create the users slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        });
    }
});

// Selector to get all users
export const selectAllUsers = (state: { users: UsersState }) => state.users.users;

// Export the reducer as default
export default usersSlice.reducer;
