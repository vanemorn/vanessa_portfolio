import React from 'react';
import Header from '../components/Header'; // Importing Header
import Footer from '../components/Footer'; // Importing Footer
import './Blog.css'; // CSS File
//import PostsList from '../features/posts/PostsList';


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
  return (
    <>
      <Header />
      
      <div className="container"> {/*Blog container */}
        <h1 className="blog-title">Blog</h1> {/*Title of the page*/}
        
        {/*First entry*/}

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
          <h3 className= "post-subtitle">Business-Type Headshot</h3>
          <img className= "post-image" src={businessHeadshot} alt="Business Headshot"/>
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
          <h3 className= "post-subtitle">Aesthetic Shot</h3>
          <img className= "post-image" src={aestheticShot} alt="Aesthetic Shot" />
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
          <h3 className= "post-subtitle">Passion Shot</h3>
          <img className= "post-image" src={passionShot} alt="Passion Shot" />
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
        </div>

{/* Second entry */}

<div className="post">
  <h2 className="post-title">Contribution to video assignment: Drink for Thought</h2>
  <div className="post-meta">
    <span className="post-date">Published: 23/11/2024</span> |
    <span className="post-read-time">Reading time: 8 min</span>
  </div>

  <p className="post-content">
    During the production of the video Drink for Thought, I played as the Manager for the meeting scenes and in 
    production, I took on the role of editor. My responsibilities included reviewing and enhancing the quality 
    of the footage by balancing brightness, colours, contrast, etc. Combining all the shots and incorporating 
    special effects and music.
  </p>

  {/* Images aligned to the left after the paragraph */}
  <img className="post-image2" src={image0} alt="after-effects"/>
  <img className="post-image2" src={image1} alt="acting role"/>

  <h3 className="post-subtitle">Visual Adjustments and Editing</h3>
  <p className="post-content">
    After organizing the footage, I focused on unifying brightness, colours, and contrast, since some of the 
    scenes were filmed from different angles and with different lighting conditions. I mainly used the Lumetri Color 
    tool in After Effects to achieve a consistent look throughout the video.
  </p>

  <img className="post-image2" src={image2} alt="scene1-comparison"/>
  <img className="post-image2" src={image3} alt="scene2-comparison"/>
  <img className="post-image2" src={image4} alt="scene3-comparison"/>
  <img className="post-image2" src={image5} alt="sequence-comparison"/>

  <h3 className="post-subtitle">Special Effects and Compositions</h3>
  <p className="post-content">
    Next, I added special effects to enhance the storytelling. Firstly, in the final shot of the apple juice, 
    I replaced the background with a graphic composition created in Adobe Photoshop.  Secondly, I animated a 
    light bulb that appears when the designer conceives a new packaging idea. I also created fade-in and 
    fade-out compositions in Adobe Illustrator and incorporated a translucent screen transition with the "two weeks later".
  </p>

  <img className="post-image2" src={image6} alt="product-composition"/>
  <img className="post-image2" src={image7} alt="idea-icon"/>
  <img className="post-image2" src={image8} alt="credits"/>

  <h3 className="post-subtitle">Audio Design</h3>
  <p className="post-content">
    Since all scenes were silent, I selected music and sound effects to complement the video. Using Bensound.com and 
    Freesound.org, I matched music to the three narrative sections: failure, change, and success, ensuring the mood aligned 
    with the emotions of the protagonist. For sound effects, I synchronized the "idea" sound and the apple-biting sound, 
    both downloaded from Freesound, with the composed shots. 
  </p>

  <h3 className="post-subtitle">Export and Final Details</h3>
  <p className="post-content">
    Finally, I exported the final video using Adobe Media Encoder. To meet the 25 MB size limit without sacrificing quality, 
    I adjusted the bitrate encoding to VBR 2-pass with bitrates set between 1.57 and 5.37. This optimization ensured the 
    video maintained high quality while adhering to file size constraints. 
  </p>

  <img className="post-image2" src={image9} alt="export-configuration"/>

  <h3 className="post-subtitle">Outcome Reflection</h3>
  <p className="post-content">
    This project allowed me to manage post-production editing and creative enhancements. My role was instrumental in 
    unifying the team's efforts into a cohesive final product that communicated our idea. I particularly learned a lot 
    about video compression because of the file size limits, which required a lot of research and trial-error. 
  </p>
  <p className="post-content">
    I feel satisfied and proud of how my contributions brought the project all together and aligned with 
    the team’s collective vision.  
  </p>
</div>

      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Blog;
