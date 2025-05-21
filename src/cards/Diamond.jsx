import React from 'react';

const Diamond = ({ color, shading, quantity}) => {
    const diamondPath = "M50 0 L100 50 L50 100 L0 50 Z";

    const renderDiamond = (index) => {
        let fill = 'none';
        let patternId = `pattern-${shading}-${color}`;

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
                            <path d="M 0,0 L 4,4 M -1,1 L 1,-1 M 3,5 L 5,3" stroke={color} strokeWidth="1"/>
                        </pattern>
                    </defs>
                )}
                <path d={diamondPath} fill={fill} stroke={color} strokeWidth="3"/>
            </svg>
        );
    };

    const diamondElements = Array.from({ length: quantity }, (_, i) => renderDiamond(i));


    return (
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
            {diamondElements}
        </div>
    );
};

export default Diamond;