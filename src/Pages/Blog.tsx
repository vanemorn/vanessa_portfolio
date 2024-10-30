import React from 'react';
import businessImage from 'C:/Users/linda/vanessa_portfolio/src/assets/business-headshot.jpg'; // Update path as necessary
import aestheticImage from 'C:/Users/linda/vanessa_portfolio/src/assets/dramatic shot.jpg'; // Update path as necessary
import passionImage from 'C:/Users/linda/vanessa_portfolio/src/assets/passion shot.jpg'; // Update path as necessary

const Blog: React.FC = () => {
  return (
    <div className="post">
      <h2 className="post-title">Título de la Entrada 3</h2>
      <div className="post-meta">
        <span className="post-date">Fecha de Publicación: 26 de octubre de 2024</span> |
        <span className="post-read-time">Tiempo de lectura: 4 min</span>
      </div>
      <p className="post-content">
        Duis quis felis ac sapien feugiat euismod. Morbi volutpat dolor non mi dignissim, at ullamcorper est dictum. Sed congue eros a arcu aliquam, a malesuada nunc vulputate.
      </p>

      <h1>Photography Series Analysis</h1>
      <p>
        This photography series includes three different images: a professional headshot, an aesthetic portrait, and a photo that shows my personal passion. Each image is designed to share a specific message or mood, highlighting different aspects of portrait photography and thematic expression.
      </p>
      <p>
        To develop each idea, I started with a brainstorming session to get my thoughts in line with the project brief. I listed possible themes and visual elements that would help to communicate the message I wanted. After picking the key concepts, I sketched out each idea, thinking about important details like location, lighting, camera angles, clothes, and props. I also looked for visual references and created mood boards to clarify the overall direction for each shot. All the photos were edited in Adobe Photoshop.
      </p>

      <div className="photography-section">
        <div className="photo-column">
          <h2>Business-Type Headshot</h2>
          <img src={businessImage} alt="Business Headshot" style={{ width: '100%', height: 'auto' }} />
          <p>
            For the business headshot, I wanted to create an image that balances professionalism with approachability. I chose soft frontal lighting to keep the exposure even across my face and avoid harsh shadows, giving a clean and polished look. I went with a plain white background, which I planned to replace later with a softly blurred office background, adding context without distracting from the subject.
          </p>
          <p>
            In terms of framing, I opted for a close-up shot, focusing on the upper part of my torso and my face to draw attention to my expression. Unlike other portraits where I might not wear my glasses, I decided to wear them here to project a more intellectual appearance. I tilted my head slightly to the left, breaking the symmetry to avoid a stiff look. I also wore a simple headband and a turtleneck blouse that added a touch of professionalism while keeping it modern.
          </p>
          <p>
            I experimented with different facial expressions, and after checking them out, I chose the full smile for its friendly quality. This gives the image a sense of reliability, boosted by the lighting and wardrobe choices.
          </p>
        </div>

        <div className="photo-column">
          <h2>Aesthetic Shot</h2>
          <img src={aestheticImage} alt="Aesthetic Shot" style={{ width: '100%', height: 'auto' }} />
          <p>
            For the aesthetic shot, I drew inspiration from cinematic photography that features deep shadows and rich colors, aiming to create a moody and thoughtful atmosphere. I set up the composition with a centered point of interest: a window, with me sitting on the window ledge in a relaxed pose, looking outside. This symbolizes the contrast between inner darkness and the colorful world outside, serving as a reminder of hope in tough times.
          </p>
          <p>
            I relied entirely on natural light, avoiding artificial sources to enhance the room's darkness. By focusing the camera on the window, I created a strong contrast between the bright window and the shadowy interior, which highlighted my silhouette against the brighter outdoor scene.
          </p>
          <p>
            For my outfit, I went with an all-black look to keep the focus on the light and mood without adding distractions. In post-production, I enhanced the atmosphere by boosting the greens visible through the window and sharpening the silhouette.
          </p>
        </div>
      </div>

      <div className="photography-section">
        <div className="photo-column">
          <h2>Passion Shot</h2>
          <img src={passionImage} alt="Passion Shot" style={{ width: '100%', height: 'auto' }} />
          <p>
            For the passion shot, I wanted to capture my favorite activity since moving to Ireland: traveling and exploring new places. To visually share this topic, I carefully arranged a composition with key items related to trip planning. These included a map with some locations circled, a pen, a Pinterest board full of ideas, a tourist brochure with potential destinations, and some decorative elements like a small plant and a cup of coffee. This setup was meant to evoke the feeling of getting ready for an adventure.
          </p>
          <p>
            To create a balanced and visually interesting composition, I arranged these items within the frame, making sure each element contributed to the overall story without overcrowding the space. I had to ensure that details, especially the circled spots on the map, were clear for the viewer. The goal was to keep things organized while creating a casual, inviting atmosphere that reflects the excitement of planning a trip.
          </p>
          <p>
            The background for this shot was my desk, which originally featured brown tones that didn’t fit the aesthetic I wanted. I edited the image in Photoshop, changing the table color to white, which helped the travel-related items stand out and created a cohesive visual experience that matched the theme of exploration and creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
