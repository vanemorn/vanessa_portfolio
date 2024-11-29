import React from 'react';
import './ProjectGrid.css';

// Import your images
import project1 from 'C:/Users/linda/vanessa_portfolio/src/assets/project1.jpg';
import project2 from 'C:/Users/linda/vanessa_portfolio/src/assets/project2.jpg';
import project3 from 'C:/Users/linda/vanessa_portfolio/src/assets/project3.jpg';
import project4 from 'C:/Users/linda/vanessa_portfolio/src/assets/project4.jpg';

// Define the Project type
interface Project {
  image: string;
  title: string;
  tags: string[];
  description: string;
}

// Your projects data
const projects: Project[] = [
  {
    image: project1,
    title: 'Project One',
    tags: ['UI Design', 'React', 'Web App'],
    description: 'A modern web application built with React and a clean UI design.',
  },
  {
    image: project2,
    title: 'Project Two',
    tags: ['Mobile App', 'Figma', 'Prototype'],
    description: 'A mobile app prototype designed to enhance user productivity.',
  },
  {
    image: project3,
    title: 'Project Three',
    tags: ['E-commerce', 'UX Research', 'Wireframes'],
    description: 'An e-commerce platform optimized for user engagement and sales.',
  },
  {
    image: project4,
    title: 'Project Four',
    tags: ['Accessibility', 'Design Systems', 'React'],
    description: 'A design system focused on accessibility and cross-platform usability.',
  },
];

const ProjectGrid: React.FC = () => {
  const handleViewMore = (projectTitle: string) => {
    console.log(`Viewing more details about: ${projectTitle}`);
    // Add custom navigation or modal functionality here
  };

  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <h3 className="project-title">{project.title}</h3>
          <div className="project-tags">
            {project.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
          <p className="project-description">{project.description}</p>
          <button
            className="view-more-button"
            onClick={() => handleViewMore(project.title)}
          >
            View More
            <span className="hover-effect"></span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
