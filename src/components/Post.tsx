import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Post.css';

import image0 from '../assets/blog-entry-2/0.png';
import image1 from '../assets/blog-entry-2/1.png';
import image2 from '../assets/blog-entry-2/2.png';
import image3 from '../assets/blog-entry-2/3.png';
import image4 from '../assets/blog-entry-2/4.png';
import image5 from '../assets/blog-entry-2/5.png';
import image6 from '../assets/blog-entry-2/6.png';
import image7 from '../assets/blog-entry-2/7.png';
import image8 from '../assets/blog-entry-2/8.png';
import image9 from '../assets/blog-entry-2/9.png';
import businessHeadshot from '../assets/business-headshot.jpg';
import aestheticShot from '../assets/aesthetic-shot.jpg';
import passionShot from '../assets/passion-shot.jpg';

interface Comment {
  id: number;
  text: string;
  reactions: { [emoji: string]: number };
  timestamp: number;
}

interface Post {
  id: number;
  title: string;
  content: string;
  tags: string[];
  comments: Comment[];
}

const initialPosts: Post[] = [
  {
    id: 1,
    title: 'Photography Series Analysis',
    content: `
      <p> This photography series includes three different images: a professional headshot, an aesthetic portrait, 
          and a photo that shows my personal passion. Each image is designed to share a specific message or mood, 
          highlighting different aspects of portrait photography and thematic expression.</p>

      <p>To develop each idea, I started with a brainstorming session to get my thoughts in line with the project brief. 
            I listed possible themes and visual elements that would help to communicate the message I wanted. After picking 
            the key concepts, I sketched out each idea, thinking about important details like location, lighting, camera 
            angles, clothes and props. I also looked for visual references and created mood boards to clarify the overall
             direction for each shot. All the photos were edited in Adobe Photoshop.</p>
      
      <h3>Business-Type Headshot</h3>
      <img class="post-image" src="${businessHeadshot}" alt="Business Headshot" />

      <p>For the business headshot, I wanted to create an image that balances professionalism with approachability. 
          I chose soft frontal lighting to keep the exposure even across my face and avoid harsh shadows, giving a 
          clean and polished look. I went with a plain white background, which I planned to replace later with a 
          softly blurred office background, adding context without distracting from the subject.</p>

      <p>In terms of framing, I opted for a close-up shot, focusing on the upper part of my torso and my face to 
      draw attention to my expression. Unlike other portraits where I might not wear my glasses, I decided to 
      wear them here to project a more intellectual appearance, as glasses are often associated with reading 
      and screen work. To strike a balance between formality and friendliness, I tilted my head slightly to the 
      left, breaking the symmetry to avoid a stiff look. I also wore a simple headband to keep my hair back, 
      ensuring my face was clear and focused, along with a turtleneck blouse that added a touch of professionalism 
      while maintaining a modern feel.</p>

     <p>For facial expressions, I tried out a few options: a big smile, a soft smile without showing my teeth and 
      a neutral look. After checking them out, I chose the full smile for its friendly quality. Including a warm 
      smile gives the image a sense of reliability, which is boosted by the lighting and wardrobe choices.</p>

      <h3>Aesthetic Shot</h3>
      <img class="post-image" src="${aestheticShot}" alt="Aesthetic Shot" />


      <p>For the aesthetic shot, I drew inspiration from cinematic photography that features deep shadows and rich 
            colours, aiming to create a moody and thoughtful atmosphere. I set up the composition with a centered 
            point of interest: a window right in the middle, with me sitting on the window ledge in a relaxed and 
            introspective pose looking at the outside. This setup was meant to symbolize a contrast between inner 
            darkness and the colourful world outside, serving as a reminder of hope in tough times.</p>

      <p>To achieve the right atmosphere, I relied entirely on natural light, avoiding artificial sources to 
            enhance the room's darkness. By positioning the camera to focus on the window, I let the outside light 
            shape the composition, creating a strong contrast between the bright window and the shadowy interior. 
            This lighting choice highlighted my silhouette against the brighter outdoor scene.</p>

      <p>For my outfit, I went with an all-black look to keep the focus on the light and mood without adding any 
            distractions. In post-production, I made a few adjustments to enhance the atmosphere of the image. I boosted 
            the greens visible through the window and subtly increased the contrast to sharpen the silhouette and enrich 
            the tonal range, allowing the main elements of the composition to stand out.</p>

      <h3>Passion Shot</h3>
      <img class="post-image" src="${passionShot}" alt="Passion Shot" />

            <p>For the passion shot, I wanted to capture my favourite activity since moving to Ireland: traveling and 
            exploring new places. To visually share this topic, I carefully arranged a composition with key items 
            related to trip planning. These included a map with some locations circled, a pen, a Pinterest board 
            full of ideas, a tourist brochure with potential destinations and some decorative elements like a small 
            plant and a cup of coffee. This setup was meant to evoke the feeling of getting ready for an adventure.</p>

            <p>
            To create a balanced and visually interesting composition, I arranged these items within the frame, 
            making sure each element contributed to the overall story without overcrowding the space. I had to 
            ensure that details, especially the circled spots on the map, were clear for the viewer. This took 
            several tries to position the objects and adjust the camera angle for the best shot. The goal was to 
            keep things organized while creating a casual, inviting atmosphere that reflects the excitement of 
            planning a trip.     
            </p

            <p>
            The background for this shot was my desk, which is originally brown and did not fit the colour 
            palette and look I was looking for. To fix this, I used Photoshop to edit the image by selecting 
            the table and adjusting its colour, brightness and contrast, turning it into a white surface. This 
            change made the composition pop, allowing the travel-related items to stand out and creating a 
            cohesive visual experience that matched the theme of exploration and creativity.    
            </p



    `,
    tags: ['Photography', 'Art'],
    comments: [
      { id: 1, text: 'Great analysis!', reactions: { '👍': 3, '❤️': 2 }, timestamp: Date.now() - 100000 },
      { id: 2, text: 'I like your approach to lighting.', reactions: { '👍': 1, '😮': 1 }, timestamp: Date.now() - 500000 },
    ],
  },
  {
    id: 2,
    title: 'A Simple Post',
    content: `
      <p>This is a simpler post with only one paragraph and one image.</p>
      <img src="https://via.placeholder.com/800x400" alt="Sample image" />
    `,
    tags: ['example', 'simple'],
    comments: [
      { id: 1, text: 'Very insightful, thanks!', reactions: { '👍': 1 }, timestamp: Date.now() - 300000 },
    ],
  },
];

const timeAgo = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  return `${days} day${days === 1 ? '' : 's'} ago`;
};

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = initialPosts.find((p) => p.id.toString() === id);

  const [currentPost, setCurrentPost] = useState<Post | undefined>(post);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentData: Comment = {
        id: Date.now(),
        text: newComment,
        reactions: { '👍': 0, '❤️': 0, '😂': 0, '😮': 0, '😢': 0 },
        timestamp: Date.now(),
      };

      if (currentPost) {
        const updatedPost = {
          ...currentPost,
          comments: [...currentPost.comments, newCommentData],
        };
        setCurrentPost(updatedPost);
      }
      setNewComment('');
    }
  };

  const handleAddReaction = (commentId: number, emoji: string) => {
    if (currentPost) {
      const updatedComments = currentPost.comments.map((comment) => {
        if (comment.id === commentId) {
          const updatedReactions = {
            ...comment.reactions,
            [emoji]: (comment.reactions[emoji] || 0) + 1,
          };
          return { ...comment, reactions: updatedReactions };
        }
        return comment;
      });
      setCurrentPost({ ...currentPost, comments: updatedComments });
    }
  };

  if (!currentPost) {
    return <p>Post not found</p>;
  }

  return (
    <div className="post">
      <h2>{currentPost.title}</h2>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: currentPost.content }} />
      <div className="post-tags">
        {currentPost.tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>
      <div className="comments-section">
        <h3>Comments</h3>
        {currentPost.comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <p className="timestamp">{timeAgo(comment.timestamp)}</p>
            <div className="reactions">
              {['👍', '❤️', '😂', '😮', '😢'].map((emoji) => (
                <button key={emoji} onClick={() => handleAddReaction(comment.id, emoji)}>
                  {emoji}
                  <span className="reaction-count">{comment.reactions[emoji]}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={handleAddComment}>Post Comment</button>
      </div>
    </div>
  );
};

export default Post;
