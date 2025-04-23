import React from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ name, level }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="skill-progress h-full bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-500 dark:to-indigo-300 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: '0%' }} 
          data-level={level}
        ></div>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired
};

export default SkillBar;