import React, { useState, useEffect } from 'react';
import { PROJECTS, WILMA_COLORS } from '../constants';
import { Project } from '../types';
import BaumSvg from '../Baum.svg';

interface TreeViewProps {
  onProjectSelect: (project: Project) => void;
  selectedProjectId?: string;
}

// Tree layout constants - adjusted to match actual SVG tree dimensions
const TREE_CONFIG = {
  centerX: 547,
  topY: 280,    // Start below the star
  bottomY: 1000, // Extend further to bottom of tree
  rows: 5,      // Fewer rows for better spacing
  baseWidth: 320, // Adjusted to keep within tree boundaries
  topWidth: 60,   // Slightly narrower top to stay within tree
};

// Ornament positioning constants
const ORNAMENT_CONFIG = {
  minDistance: 50,           // Minimum distance between ornaments (px)
  maxAttempts: 50,           // Maximum attempts to find valid position
  randomXOffset: 15,         // Maximum random X offset (px)
  randomYOffset: 20,         // Maximum random Y offset (px)
  widthSafetyMargin: 0.85,   // Safety margin to keep ornaments within tree
};

// Seeded random number generator for consistent positions
const seededRandom = (seed: number) => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

// Check if two positions are too close (collision detection)
const isTooClose = (pos1: { x: number; y: number }, pos2: { x: number; y: number }, minDistance: number): boolean => {
  const dx = pos1.x - pos2.x;
  const dy = pos1.y - pos2.y;
  return Math.sqrt(dx * dx + dy * dy) < minDistance;
};

// Generate positions for ornaments distributed across the tree
// We'll create a triangular distribution pattern to match the tree shape
const generateOrnamentPositions = (count: number): Array<{ x: number; y: number }> => {
  const positions: Array<{ x: number; y: number }> = [];
  
  const treeHeight = TREE_CONFIG.bottomY - TREE_CONFIG.topY;
  const projectsPerRow = Math.ceil(count / TREE_CONFIG.rows);
  
  let projectIndex = 0;
  
  for (let row = 0; row < TREE_CONFIG.rows && projectIndex < count; row++) {
    // Distribute from bottom to top more evenly
    const rowRatio = row / TREE_CONFIG.rows;
    const yPosition = TREE_CONFIG.bottomY - rowRatio * treeHeight;
    
    // Calculate width at this row (triangular shape - narrower at top)
    // Add safety margin to prevent ornaments from going outside tree
    const widthAtRow = (TREE_CONFIG.baseWidth - rowRatio * (TREE_CONFIG.baseWidth - TREE_CONFIG.topWidth)) * ORNAMENT_CONFIG.widthSafetyMargin;
    const projectsInThisRow = Math.min(projectsPerRow, count - projectIndex);
    
    for (let col = 0; col < projectsInThisRow && projectIndex < count; col++) {
      let attempts = 0;
      let validPosition = false;
      let xPosition = 0;
      let yPos = 0;
      
      // Try to find a valid position that doesn't overlap
      while (!validPosition && attempts < ORNAMENT_CONFIG.maxAttempts) {
        const xOffset = (col - (projectsInThisRow - 1) / 2) * (widthAtRow / projectsInThisRow);
        xPosition = TREE_CONFIG.centerX + xOffset;
        
        // Minimal randomness to keep ornaments well within tree boundaries
        const randomXOffset = (seededRandom(projectIndex * 2 + attempts * 100) - 0.5) * ORNAMENT_CONFIG.randomXOffset;
        const randomYOffset = (seededRandom(projectIndex * 2 + 1 + attempts * 100) - 0.5) * ORNAMENT_CONFIG.randomYOffset;
        
        xPosition += randomXOffset;
        yPos = yPosition + randomYOffset;
        
        // Check if position is too close to any existing position
        validPosition = true;
        for (const existingPos of positions) {
          if (isTooClose({ x: xPosition, y: yPos }, existingPos, ORNAMENT_CONFIG.minDistance)) {
            validPosition = false;
            break;
          }
        }
        
        attempts++;
      }
      
      // Only add position if valid, or if this is the first ornament, or use fallback position
      if (validPosition || positions.length === 0) {
        positions.push({
          x: xPosition,
          y: yPos
        });
        projectIndex++;
      } else {
        // Fallback: use position without random offset if we couldn't find a valid one
        const xOffset = (col - (projectsInThisRow - 1) / 2) * (widthAtRow / projectsInThisRow);
        positions.push({
          x: TREE_CONFIG.centerX + xOffset,
          y: yPosition
        });
        projectIndex++;
      }
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
