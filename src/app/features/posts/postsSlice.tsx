import { createSlice, nanoid, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { db } from './firebase'; 
import { collection, addDoc, doc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';

export interface Post {
  id: string;
  title: string;
  body: string;
  date: string;
  reactions: { [key: string]: number };
  file?: string | null;  // Ensure that 'file' is either a string (URL) or null
}

interface PostsState {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPostsFromFirebase = createAsyncThunk(
  'posts/fetchPostsFromFirebase',
  async () => {
    const postRef = collection(db, 'posts');  // Correct collection reference
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

export const addPostToFirebase = createAsyncThunk('posts/addPostToFirebase', async (post: Omit<Post, 'id'>) => {
  const postRef = collection(db, 'posts');  // Correct collection reference
  const newDocRef = await addDoc(postRef, {
    title: post.title,
    body: post.body,
    date: post.date,
    reactions: post.reactions,
    file: post.file,
  });
  
  return { ...post, id: newDocRef.id };  // Return the post with the generated id
});

export const updatePost = createAsyncThunk('posts/updatePost', async (updatedPost: Post) => {
  const postRef = doc(db, 'posts', updatedPost.id!);  // Correct doc reference
  await updateDoc(postRef, {
    title: updatedPost.title,
    body: updatedPost.body,
    reactions: updatedPost.reactions,
    date: updatedPost.date,
    file: updatedPost.file,
  });
  return updatedPost;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (postId: string) => {
  const postRef = doc(db, 'posts', postId);  // Correct doc reference
  await deleteDoc(postRef);
  return postId;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, { payload }: PayloadAction<Post>) {
        state.posts.push(payload);
      },
      prepare(title: string, body: string, file: string | null) {
        return {
          payload: {
            id: nanoid(),  // Generate the id for new posts
            title,
            body,
            date: new Date().toISOString(),
            reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
            file,
          },
        };
      },
    },
    postDeleted(state, action: PayloadAction<string>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
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
      })
      .addCase(fetchPostsFromFirebase.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(addPostToFirebase.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
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
