import React, { useState, useEffect } from 'react';
import { PROJECTS, WILMA_COLORS } from '../constants';
import { Project } from '../types';
import BaumSvg from '../Baum.svg';

interface TreeViewProps {
  onProjectSelect: (project: Project) => void;
  selectedProjectId?: string;
}

// Tree layout constants
const TREE_CONFIG = {
  centerX: 547,
  topY: 150,
  bottomY: 750,
  rows: 6,
  baseWidth: 300,
  topWidth: 50,
};

// Seeded random number generator for consistent positions
const seededRandom = (seed: number) => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

// Generate positions for ornaments distributed across the tree
// We'll create a triangular distribution pattern to match the tree shape
const generateOrnamentPositions = (count: number): Array<{ x: number; y: number }> => {
  const positions: Array<{ x: number; y: number }> = [];
  
  const treeHeight = TREE_CONFIG.bottomY - TREE_CONFIG.topY;
  const projectsPerRow = Math.ceil(count / TREE_CONFIG.rows);
  
  let projectIndex = 0;
  
  for (let row = 0; row < TREE_CONFIG.rows && projectIndex < count; row++) {
    const yPosition = TREE_CONFIG.bottomY - (row / TREE_CONFIG.rows) * treeHeight + 50; // From bottom to top
    const widthAtRow = TREE_CONFIG.baseWidth - (row / TREE_CONFIG.rows) * (TREE_CONFIG.baseWidth - TREE_CONFIG.topWidth); // Narrower at top
    const projectsInThisRow = Math.min(projectsPerRow, count - projectIndex);
    
    for (let col = 0; col < projectsInThisRow && projectIndex < count; col++) {
      const xOffset = (col - (projectsInThisRow - 1) / 2) * (widthAtRow / projectsInThisRow);
      const xPosition = TREE_CONFIG.centerX + xOffset;
      
      // Add some randomness to make it look more natural (using seeded random for consistency)
      const randomXOffset = (seededRandom(projectIndex * 2) - 0.5) * 30;
      const randomYOffset = (seededRandom(projectIndex * 2 + 1) - 0.5) * 40;
      
      positions.push({
        x: xPosition + randomXOffset,
        y: yPosition + randomYOffset
      });
      
      projectIndex++;
    }
  }
  
  return positions;
};

const TreeView: React.FC<TreeViewProps> = ({ onProjectSelect, selectedProjectId }) => {
  const [mounted, setMounted] = useState(false);
  const [ornamentPositions] = useState(() => generateOrnamentPositions(PROJECTS.length));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-full w-full relative z-0 flex items-center justify-center" style={{ backgroundColor: WILMA_COLORS.yellow }}>
      <div className="relative" style={{ width: '1100px', height: '100%', maxHeight: '1080px' }}>
        {/* Christmas Tree SVG */}
        <img 
          src={BaumSvg} 
          alt="Weihnachtsbaum" 
          className="w-full h-full object-contain"
          style={{ filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1))' }}
        />
        
        {/* Ornaments (Projects) */}
        <svg 
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1100 1080"
          preserveAspectRatio="xMidYMid meet"
        >
          {PROJECTS.map((project, index) => {
            const position = ornamentPositions[index];
            const isSelected = project.id === selectedProjectId;
            const ornamentSize = isSelected ? 30 : 24;
            
            return (
              <g 
                key={project.id}
                onClick={() => onProjectSelect(project)}
                style={{ cursor: 'pointer' }}
                className="transition-all duration-200"
              >
                {/* Ornament circle */}
                <circle
                  cx={position.x}
                  cy={position.y}
                  r={ornamentSize / 2}
                  fill={WILMA_COLORS.mediumBlue}
                  stroke={isSelected ? WILMA_COLORS.yellow : 'white'}
                  strokeWidth={isSelected ? 3 : 2}
                  className="transition-all duration-200 hover:brightness-110"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                  }}
                />
                
                {/* City name on hover */}
                <title>{project.city} - {project.name}</title>
                
                {/* Small highlight */}
                <circle
                  cx={position.x - ornamentSize / 6}
                  cy={position.y - ornamentSize / 6}
                  r={ornamentSize / 6}
                  fill="white"
                  opacity="0.4"
                />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default TreeView;
