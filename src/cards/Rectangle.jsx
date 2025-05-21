import React from 'react';

const Rectangle = ({ color = 'purple', shading = 'solid', quantity = 1 }) => {
  const renderRectangle = (index) => {
    let fill = 'none';
    let patternId = `rect-pattern-${shading}-${color}`;

    if (shading === 'solid') {
      fill = color;
    } else if (shading === 'striped') {
      fill = `url(#${patternId})`;
    }

    return (
      <svg key={index} width="100" height="60" viewBox="0 0 100 60">
        {shading === 'striped' && (
          <defs>
            <pattern id={patternId} patternUnits="userSpaceOnUse" width="4" height="4">
              <path d="M0,0 L4,4" stroke={color} strokeWidth="1" />
            </pattern>
          </defs>
        )}
        <rect x="10" y="10" width="80" height="40" rx="10" ry="10" fill={fill} stroke={color} strokeWidth="3" />
      </svg>
    );
  };

  const rectElements = Array.from({ length: quantity }, (_, i) => renderRectangle(i));

  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      {rectElements}
    </div>
  );
};

export default Rectangle;
