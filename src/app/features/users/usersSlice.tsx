import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../posts/store';  // Ensure RootState is imported from the correct path

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

// Ensure this interface is exported so it can be used in other files
export interface User {
    id: string;
    name: string;
}

interface UsersState {
    users: User[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null; // Error is either string or null
}

const initialState: UsersState = {
    users: [],
    status: 'idle',
    error: null
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(USERS_URL);
    return response.data;
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                // Fix the type error: handle the case where action.error.message might be undefined
                state.error = action.error.message ?? null; // Default to null if message is undefined
            });
    }
});

export const selectAllUsers = (state: RootState) => state.users.users;

export default usersSlice.reducer;
