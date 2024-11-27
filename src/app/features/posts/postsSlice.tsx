import { createSlice, nanoid, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { db } from './firebase'; // Firebase Firestore import
import { collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'; // Firestore functions

// Post interface with file support
export interface Post {
  id: string;
  title: string;
  body: string;
  date: string;
  reactions: { [key: string]: number };
  file?: File | null; // Optional file property
}

interface PostsState {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PostsState = {
  posts: JSON.parse(localStorage.getItem('posts') || '[]'), // Initialize from localStorage
  status: 'idle',
  error: null,
};

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

// Async action to fetch posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch(POSTS_URL);
  const data = await response.json();
  return data;
});

// Async action to update a post
export const updatePost = createAsyncThunk('posts/updatePost', async (updatedPost: Post) => {
  const postRef = doc(db, 'posts', updatedPost.id); // Firestore document reference
  await updateDoc(postRef, {
    title: updatedPost.title,
    body: updatedPost.body,
    reactions: updatedPost.reactions,
    date: updatedPost.date,
  });
  return updatedPost; // Return the updated post
});

// Async action to delete a post from Firebase
export const deletePostFromFirebase = createAsyncThunk('posts/deletePostFromFirebase', async (postId: string) => {
  const postRef = doc(db, 'posts', postId); // Firestore document reference
  await deleteDoc(postRef); // Delete the post from Firestore
  return postId;
});

// Async action to add a post to Firebase
export const addPostToFirebase = createAsyncThunk('posts/addPostToFirebase', async (post: Post) => {
  const postRef = collection(db, 'posts'); // Firestore collection reference
  const newDocRef = await addDoc(postRef, {
    title: post.title,
    body: post.body,
    date: post.date,
    reactions: post.reactions,
  });

  // Return the post with its Firestore ID
  return { ...post, id: newDocRef.id };
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Modify postAdded to accept file as part of the payload
    postAdded: {
      reducer(state, { payload }: PayloadAction<Post>) {
        state.posts.push(payload);
        // Save updated posts to localStorage after adding a post
        localStorage.setItem('posts', JSON.stringify(state.posts));
      },
      prepare(title: string, content: string, file: File | null) {
        return {
          payload: {
            id: nanoid(),
            title,
            body: content,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
            file,
          },
        };
      },
    },

    // Post deletion action
    postDeleted(state, action: PayloadAction<string>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      // Save updated posts to localStorage after deletion
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },

    // Reaction added action
    reactionAdded(state, action: PayloadAction<{ postId: string; reaction: string }>) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction] = (existingPost.reactions[reaction] || 0) + 1;
      }
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload.map((post: any) => ({
          ...post,
          reactions: post.reactions || {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          },
        }));
        // Save fetched posts to localStorage
        localStorage.setItem('posts', JSON.stringify(state.posts));
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(addPostToFirebase.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        // Save updated posts to localStorage after adding the post to Firebase
        localStorage.setItem('posts', JSON.stringify(state.posts));
      })
      .addCase(deletePostFromFirebase.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
        // Save updated posts to localStorage after deletion
        localStorage.setItem('posts', JSON.stringify(state.posts));
      });
  },
});

export const { postAdded, postDeleted, reactionAdded } = postsSlice.actions;

export const selectAllPosts = (state: RootState) => state.posts.posts;
export const selectPostById = (state: RootState, postId: string) =>
  state.posts.posts.find((post) => post.id === postId);

export const getPostsStatus = (state: RootState) => state.posts.status;
export const getPostsError = (state: RootState) => state.posts.error;

export default postsSlice.reducer;
