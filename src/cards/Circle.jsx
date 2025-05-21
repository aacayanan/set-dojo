import React from 'react';

const Circle = ({ color = 'purple', shading = 'solid', quantity = 1 }) => {
  const renderCircle = (index) => {
    let fill = 'none';
    let patternId = `circle-pattern-${shading}-${color}`;

    if (shading === 'solid') {
      fill = color;
    } else if (shading === 'striped') {
      fill = `url(#${patternId})`;
    }

    return (
      <svg key={index} width="100" height="100" viewBox="0 0 100 100">
        {shading === 'striped' && (
          <defs>
            <pattern id={patternId} patternUnits="userSpaceOnUse" width="4" height="4">
              <path d="M0,0 L4,4" stroke={color} strokeWidth="1" />
            </pattern>
          </defs>
        )}
        <circle cx="50" cy="50" r="40" fill={fill} stroke={color} strokeWidth="3" />
      </svg>
    );
  };

  const circleElements = Array.from({ length: quantity }, (_, i) => renderCircle(i));

  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      {circleElements}
    </div>
  );
};

export default Circle;
