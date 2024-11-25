import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState = [
    {id: '1', title: 'Learning Redux Toolkit', content: "Sample text"},
    {id: '2', title: 'Slices...', content: "Sample text"}
]

const postsSlice = createSlice ({
    name: 'posts',
    initialState,
    reducers: {
        postAdded (state, action) {
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state: RootState) => state.posts;
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer