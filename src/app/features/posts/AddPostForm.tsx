import React, { useState } from 'react';
import ReactQuill from 'react-quill'; // Import Quill component
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS
import { useNavigate } from 'react-router-dom';
import { db, storage } from './firebase'; // Import Firebase Firestore and Storage
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import Storage functions

const AddPostForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>(''); // This will store the Quill editor's content
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (title && body) {
      try {
        // If a file is uploaded, upload it to Firebase Storage
        let imageUrl = null;
        if (file) {
          imageUrl = await uploadImage(file);
        }

        // Create a new post object
        const newPost = {
          title,
          body,
          imageUrl, // Include image URL if file is uploaded
          createdAt: new Date()
        };

        // Save the post to Firestore
        const postsCollection = collection(db, 'posts');
        await addDoc(postsCollection, newPost);

        // Redirect to the posts list after successful submission
        navigate('/posts');
      } catch (error) {
        console.error('Error adding post: ', error);
      }
    }
  };

  // Handle file change (file selection)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  // Function to upload image to Firebase Storage
  const uploadImage = async (file: File) => {
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file); // Upload the file
    const imageUrl = await getDownloadURL(storageRef); // Get the file's URL
    return imageUrl;
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="body">Post Body</label>
          {/* Quill Editor for body */}
          <ReactQuill
            value={body}
            onChange={setBody} // Update body state when editor changes
            placeholder="Write your post content here..."
          />
        </div>

        <div>
          <label htmlFor="file">Upload Image</label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit">Add Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
