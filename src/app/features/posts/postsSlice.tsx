import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState = [
    {id: '1', title: 'Learning Redux Toolkit', content: "Sample text"},
    {id: '2', title: 'Slices...', content: "Sample text"}
]

const postsSlice = createSlice ({
    name: 'posts',
    initialState,
    reducers: {}
})

export const selectAllPosts = (state: RootState) => state.posts;

export default postsSlice.reducer