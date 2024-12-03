import React from 'react';
import './ProjectGrid.css';

// Import images
import project1 from 'C:/Users/linda/vanessa_portfolio/src/assets/project1.jpg';
import project2 from 'C:/Users/linda/vanessa_portfolio/src/assets/project2.jpg';
import project3 from 'C:/Users/linda/vanessa_portfolio/src/assets/project3.jpg';
import project4 from 'C:/Users/linda/vanessa_portfolio/src/assets/project4.jpg';

interface Project {
  image: string;
  title: string;
  tags: string[];
  description: string;
}

// Projects content

const projects: Project[] = [
  {
    image: project1,
    title: 'Ños! Gofio',
    tags: ['Branding', 'Logo', 'Packaging'],
    description: 'Fictional brand created to promote Gofio',
  },
  {
    image: project2,
    title: 'Cinedfest',
    tags: ['Social Media', 'Logo', 'Corporative'],
    description: 'Educational initiative about film production',
  },
  {
    image: project3,
    title: 'Cipselas',
    tags: ['Layout', 'Editing', 'Visual'],
    description: 'Magazine that creates a cultural space to young writters',
  },
  {
    image: project4,
    title: 'Greenport',
    tags: ['UI Design', 'UX Research', 'Figma'],
    description: 'Desktop and mobile app that increases productivity and management',
  },
];

const ProjectGrid: React.FC = () => {
  const handleViewMore = (projectTitle: string) => {
    console.log(`Viewing more details about: ${projectTitle}`);
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
            className="view-more-button-project"
            onClick={() => handleViewMore(project.title)}
          >
            View More →
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
