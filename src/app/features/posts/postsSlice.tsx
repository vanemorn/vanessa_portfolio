import { createSlice, nanoid, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { db } from './firebase'; // Import Firestore functions
import { collection, addDoc, doc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';

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

// Async action to fetch posts from Firebase
export const fetchPostsFromFirebase = createAsyncThunk(
  'posts/fetchPostsFromFirebase',
  async () => {
    const postRef = collection(db, 'posts');
    const snapshot = await getDocs(postRef);
    const postsList = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title || '',
        body: data.body || '',
        date: data.date || '',
        reactions: data.reactions || { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
        file: data.file || null,
      };
    });
    return postsList;
  }
);

// Async action to add a post to Firebase
export const addPostToFirebase = createAsyncThunk('posts/addPostToFirebase', async (post: Post) => {
  const postRef = collection(db, 'posts');
  const newDocRef = await addDoc(postRef, {
    title: post.title,
    body: post.body,
    date: post.date,
    reactions: post.reactions,
  });

  return { ...post, id: newDocRef.id };
});

// Async action to update a post
export const updatePost = createAsyncThunk('posts/updatePost', async (updatedPost: Post) => {
  const postRef = doc(db, 'posts', updatedPost.id);
  await updateDoc(postRef, {
    title: updatedPost.title,
    body: updatedPost.body,
    reactions: updatedPost.reactions,
    date: updatedPost.date,
  });
  return updatedPost;
});

// Async action to delete a post
export const deletePost = createAsyncThunk('posts/deletePost', async (postId: string) => {
  const postRef = doc(db, 'posts', postId);
  await deleteDoc(postRef);
  return postId;
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
            reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
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
      .addCase(fetchPostsFromFirebase.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostsFromFirebase.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
        localStorage.setItem('posts', JSON.stringify(state.posts));
      })
      .addCase(fetchPostsFromFirebase.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(addPostToFirebase.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        localStorage.setItem('posts', JSON.stringify(state.posts));
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
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
