import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPosts, getPostsStatus, getPostsError, postAdded } from './postsSlice';
import PostsExcerpt from './PostsExcerpt';
import { RootState } from './store';
import axios from 'axios';

const PostsList: React.FC = () => {
    const dispatch = useDispatch();

    // Fetch posts status and error from the Redux store
    const posts = useSelector((state: RootState) => selectAllPosts(state));
    const postStatus = useSelector((state: RootState) => getPostsStatus(state));
    const error = useSelector((state: RootState) => getPostsError(state));

    // Local state for handling post fetch process
    const [loading, setLoading] = useState<boolean>(true);
    const [fetchError, setFetchError] = useState<string>('');

    // Fetch posts from GitHub when the component mounts
    useEffect(() => {
        const fetchPostsFromGitHub = async () => {
            try {
                // Fetch metadata (post file names and other details) from GitHub API
                const metadataResponse = await axios.get('https://api.github.com/repos/vanemorn/vanessa_portfolio/contents/posts');
                const postsData = metadataResponse.data;  // This contains the file details (like names)

                // Fetch content for each post from GitHub
                const postPromises = postsData.map(async (post: any) => {
                    const contentResponse = await axios.get(post.download_url); // Get the raw file content
                    return {
                        id: post.sha,  // Using sha or another identifier
                        title: post.name.replace('.md', ''),  // Assuming the name is the title
                        body: contentResponse.data,  // The post content (Markdown/HTML)
                        date: new Date().toISOString(),  // Adjust this if your posts contain date info
                        reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },  // Default reactions
                    };
                });

                // Wait for all post content to be fetched
                const postsWithContent = await Promise.all(postPromises);

                // Dispatch posts to Redux store
                postsWithContent.forEach((post) => {
                    dispatch(postAdded(post.title, post.body, null));  // Adjust to add files if needed
                });

                setLoading(false);  // Stop loading once data is fetched
            } catch (err) {
                console.error('Error fetching posts from GitHub:', err);
                setFetchError('Error fetching posts from GitHub');
                setLoading(false);
            }
        };

        fetchPostsFromGitHub();
    }, [dispatch]);

    // Handle the loading, success, and error states
    let content;
    if (loading) {
        content = <p>Loading...</p>;
    } else if (postStatus === 'succeeded') {
        // Sort posts by date
        const orderedPosts = posts.slice().sort((a, b) => {
            const dateA = a.date || '';
            const dateB = b.date || '';
            return dateB.localeCompare(dateA);
        });

        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />);
    } else if (postStatus === 'failed' || fetchError) {
        content = <p>{fetchError || error}</p>;
    }

    return <section>{content}</section>;
};

export default PostsList;
