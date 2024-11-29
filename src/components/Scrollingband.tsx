import React from 'react';
import { motion } from 'framer-motion';
import './Scrollingband.css'; // Importing CSS file for styles

// Define the type for the expertise areas (array of strings)
const expertiseAreas: string[] = [
  'UX Research',
  'UI Design',
  'Wireframing',
  'Prototyping',
  'User Testing',
  'Interaction Design',
];

const ScrollingBand: React.FC = () => {
  return (
    <div className="scrolling-band-wrapper">
      <motion.div
        className="scrolling-band"
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
      >
        {expertiseAreas.map((expertise, index) => (
          <React.Fragment key={index}>
            <div className="expertise-item">{expertise}</div>
            {index < expertiseAreas.length - 1 && (
              <span className="separator"> *</span>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingBand;
