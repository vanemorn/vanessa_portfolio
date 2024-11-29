import React from 'react';
import './ScrollingBand.css';

const expertiseAreas: string[] = [
  'UX Research',
  'UI Design',
  'Wireframing',
  'Prototyping',
  'User Testing',
  'Interaction Design',
];

const ScrollingBand: React.FC = () => {
  // Duplicate the expertise areas to create the loop effect
  const expertiseToDisplay = [...expertiseAreas, ...expertiseAreas]; // Duplicate the array for seamless scrolling

  return (
    <div className="scrolling-band-wrapper">
      <div className="scrolling-band">
        {expertiseToDisplay.map((expertise, index) => (
          <React.Fragment key={index}>
            <div className="expertise-item">{expertise}</div>
            {index < expertiseToDisplay.length - 1 && (
              <span className="separator"> /</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBand;
