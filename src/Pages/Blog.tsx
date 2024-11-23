import React, { useState } from 'react';
import Header from '../components/Header'; // Importing Header
import Footer from '../components/Footer'; // Importing Footer
import './Blog.css'; // CSS File

// Images of the blog entry
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

const Blog: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [imageIndex, setImageIndex] = useState<number>(-1); // To track the index of the current image
  
  const images = [
    {src: image0, alt: 'Image 0'},
    {src: image1, alt: 'Image 1'},
    {src: image2, alt: 'Image 2'},
    {src: image3, alt: 'Image 3'},
    {src: image4, alt: 'Image 4'},
    {src: image5, alt: 'Image 5'},
    {src: image6, alt: 'Image 6'},
    {src: image7, alt: 'Image 7'},
    {src: image8, alt: 'Image 8'},
    {src: image9, alt: 'Image 9'},
    {src: businessHeadshot, alt: 'Business Headshot'},
    {src: aestheticShot, alt: 'Aesthetic Shot'},
    {src: passionShot, alt: 'Passion Shot'},
  ]; // List of all images with alt texts

  const openLightbox = (index: number) => {
    setCurrentImage(images[index].src);
    setImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    const nextIndex = (imageIndex + 1) % images.length;
    setCurrentImage(images[nextIndex].src);
    setImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (imageIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex].src);
    setImageIndex(prevIndex);
  };

  return (
    <>
      <Header />
      
      <div className="container"> {/*Blog container */}
        <h1 className="blog-title">Blog</h1> {/*Title of the page*/}
        
        {/* First entry */}
        <div className="post">
          <h2 className="post-title">Photography Series Analysis</h2>
          <div className="post-meta">
            <span className="post-date">Published: 30/10/2024</span> |
            <span className="post-read-time">Reading time: 8 min</span>
          </div>
          <p className="post-content">
            This photography series includes three different images: a professional headshot, an aesthetic portrait, 
            and a photo that shows my personal passion. Each image is designed to share a specific message or mood, 
            highlighting different aspects of portrait photography and thematic expression.
          </p>
          <p className="post-content">
            To develop each idea, I started with a brainstorming session to get my thoughts in line with the project brief. 
            I listed possible themes and visual elements that would help to communicate the message I wanted. After picking 
            the key concepts, I sketched out each idea, thinking about important details like location, lighting, camera 
            angles, clothes and props. I also looked for visual references and created mood boards to clarify the overall
             direction for each shot. All the photos were edited in Adobe Photoshop.
          </p>

          <h3 className="post-subtitle">Business-Type Headshot</h3>
          <img className="post-image" src={businessHeadshot} alt="Business Headshot" onClick={() => openLightbox(10)} />
          <p className="post-content">
            For the business headshot, I wanted to create an image that balances professionalism with approachability. 
            I chose soft frontal lighting to keep the exposure even across my face and avoid harsh shadows, giving a 
            clean and polished look. I went with a plain white background, which I planned to replace later with a 
            softly blurred office background, adding context without distracting from the subject.
          </p>
          <p className="post-content">
            In terms of framing, I opted for a close-up shot, focusing on the upper part of my torso and my face to 
            draw attention to my expression. Unlike other portraits where I might not wear my glasses, I decided to 
            wear them here to project a more intellectual appearance, as glasses are often associated with reading 
            and screen work. To strike a balance between formality and friendliness, I tilted my head slightly to the 
            left, breaking the symmetry to avoid a stiff look. I also wore a simple headband to keep my hair back, 
            ensuring my face was clear and focused, along with a turtleneck blouse that added a touch of professionalism 
            while maintaining a modern feel.
          </p>
          <p className="post-content">
            For facial expressions, I tried out a few options: a big smile, a soft smile without showing my teeth and 
            a neutral look. After checking them out, I chose the full smile for its friendly quality. Including a warm 
            smile gives the image a sense of reliability, which is boosted by the lighting and wardrobe choices.
          </p>

          <h3 className="post-subtitle">Aesthetic Shot</h3>
          <img className="post-image" src={aestheticShot} alt="Aesthetic Shot" onClick={() => openLightbox(11)} />
          <p className="post-content">
            For the aesthetic shot, I drew inspiration from cinematic photography that features deep shadows and rich 
            colours, aiming to create a moody and thoughtful atmosphere. I set up the composition with a centered 
            point of interest: a window right in the middle, with me sitting on the window ledge in a relaxed and 
            introspective pose looking at the outside. This setup was meant to symbolize a contrast between inner 
            darkness and the colourful world outside, serving as a reminder of hope in tough times.
          </p>
          <p className="post-content">
            To achieve the right atmosphere, I relied entirely on natural light, avoiding artificial sources to 
            enhance the room's darkness. By positioning the camera to focus on the window, I let the outside light 
            shape the composition, creating a strong contrast between the bright window and the shadowy interior. 
            This lighting choice highlighted my silhouette against the brighter outdoor scene.
          </p>
          <p className="post-content">
            For my outfit, I went with an all-black look to keep the focus on the light and mood without adding any 
            distractions. In post-production, I made a few adjustments to enhance the atmosphere of the image. I boosted 
            the greens visible through the window and subtly increased the contrast to sharpen the silhouette and enrich 
            the tonal range, allowing the main elements of the composition to stand out.
          </p>

          <h3 className="post-subtitle">Passion Shot</h3>
          <img className="post-image" src={passionShot} alt="Passion Shot" onClick={() => openLightbox(12)} />
          <p className="post-content">
            For the passion shot, I wanted to capture my favourite activity since moving to Ireland: traveling and 
            exploring new places. To visually share this topic, I carefully arranged a composition with key items 
            related to trip planning. These included a map with some locations circled, a pen, a Pinterest board 
            full of ideas, a tourist brochure with potential destinations and some decorative elements like a small 
            plant and a cup of coffee. This setup was meant to evoke the feeling of getting ready for an adventure.
          </p>
          <p className="post-content">
            To create a balanced and visually interesting composition, I arranged these items within the frame, 
            making sure each element contributed to the overall story without overcrowding the space. I had to 
            ensure that details, especially the circled spots on the map, were clear for the viewer. This took 
            several tries to position the objects and adjust the camera angle for the best shot. The goal was to 
            keep things organized while creating a casual, inviting atmosphere that reflects the excitement of 
            planning a trip.
          </p>
          <p className="post-content">
            The background for this shot was my desk, which is originally brown and did not fit the colour 
            palette and look I was looking for. To fix this, I used Photoshop to edit the image by selecting 
            the table and adjusting its colour, brightness and contrast, turning it into a white surface. This 
            change made the composition pop, allowing the travel-related items to stand out and creating a 
            cohesive visual experience that matched the theme of exploration and creativity.
          </p>

          {/* Lightbox for images */}
          {lightboxOpen && (
            <div className="lightbox">
              <img src={currentImage} alt="lightbox" />
              <button className="lightbox-close" onClick={closeLightbox}>X</button>
              <button className="lightbox-prev" onClick={prevImage}>&lt;</button>
              <button className="lightbox-next" onClick={nextImage}>&gt;</button>
            </div>
          )}

        </div> {/* End of first entry */}

        {/* Second entry */}
        <div className="post">
          <h2 className="post-title">Contribution to video assignment: Drink for Thought</h2>
          <div className="post-meta">
            <span className="post-date">Published: 23/11/2024</span> |
            <span className="post-read-time">Reading time: 8 min</span>
          </div>

          <p className="post-content">
            During the production of the video *Drink for Thought*, I played as the Manager for the meeting scenes and in 
            production, I took on the role of editor. My responsibilities included reviewing and enhancing the quality 
            of the footage by balancing brightness, colours, contrast, etc. Combining all the shots and incorporating 
            special effects and music.
          </p>

          <div className="post-images-container">
            <img className="post-image2" src={image0} alt="after-effects" onClick={() => openLightbox(0)} />
            <img className="post-image2" src={image1} alt="acting role" onClick={() => openLightbox(1)} />
          </div>

          <h3 className="post-subtitle">Visual Adjustments and Editing</h3>
          <p className="post-content">
            After organizing the footage, I focused on unifying brightness, colours, and contrast, since some of the 
            scenes were filmed from different angles and with different lighting conditions. I mainly used the Lumetri Color 
            tool in After Effects to achieve a consistent look throughout the video.
          </p>

          <div className="post-images-container">
            <img className="post-image2" src={image2} alt="scene1-comparison" onClick={() => openLightbox(2)} />
            <img className="post-image2" src={image3} alt="scene2-comparison" onClick={() => openLightbox(3)} />
            <img className="post-image2" src={image4} alt="scene3-comparison" onClick={() => openLightbox(4)} />
            <img className="post-image2" src={image5} alt="sequence-comparison" onClick={() => openLightbox(5)} />
          </div>

          <h3 className="post-subtitle">Special Effects and Compositions</h3>
          <p className="post-content">
            Next, I added special effects to enhance the storytelling. Firstly, in the final shot of the apple juice, 
            I replaced the background with a graphic composition created in Adobe Photoshop.
          </p>

          <div className="post-images-container">
            <img className="post-image2" src={image6} alt="product-composition" onClick={() => openLightbox(6)} />
            <img className="post-image2" src={image7} alt="idea-icon" onClick={() => openLightbox(7)} />
            <img className="post-image2" src={image8} alt="credits" onClick={() => openLightbox(8)} />
          </div>

          <h3 className="post-subtitle">Audio Design</h3>
          <p className="post-content">
            Since all scenes were silent, I selected music and sound effects to complement the video.
          </p>

          <div className="post-images-container">
            <img className="post-image2" src={image9} alt="export-configuration" onClick={() => openLightbox(9)} />
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
 {/* Lightbox */}
 
 {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <img className="lightbox-image" src={currentImage} alt="Enlarged view" />
          <button className="lightbox-prev" onClick={prevImage}>‹</button>
          <button className="lightbox-next" onClick={nextImage}>›</button>
        </div>
      )}

    </>
  );
};

export default Blog;
