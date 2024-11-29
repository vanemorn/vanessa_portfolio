import React from 'react';
import { motion } from 'framer-motion';
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
  const expertiseToDisplay = [...expertiseAreas, ...expertiseAreas]; // This duplicates the array

  return (
    <div className="scrolling-band-wrapper">
      <motion.div
        className="scrolling-band"
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'linear',
        }}
      >
        {expertiseToDisplay.map((expertise, index) => (
          <React.Fragment key={index}>
            <div className="expertise-item">{expertise}</div>
            {index < expertiseToDisplay.length - 1 && (
              <span className="separator"> /</span>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingBand;
