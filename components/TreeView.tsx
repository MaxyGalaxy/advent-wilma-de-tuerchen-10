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
// Creates a natural, scattered distribution following the tree's triangular shape
const generateOrnamentPositions = (count: number): Array<{ x: number; y: number }> => {
  const positions: Array<{ x: number; y: number }> = [];
  const treeHeight = TREE_CONFIG.bottomY - TREE_CONFIG.topY;
  
  for (let i = 0; i < count; i++) {
    let attempts = 0;
    let validPosition = false;
    let xPosition = 0;
    let yPosition = 0;
    
    // Try to find a valid position that doesn't overlap
    while (!validPosition && attempts < ORNAMENT_CONFIG.maxAttempts) {
      // Random Y position within tree height
      const yRandom = seededRandom(i * 3 + attempts * 100);
      yPosition = TREE_CONFIG.topY + yRandom * treeHeight;
      
      // Calculate how far down the tree we are (0 = top, 1 = bottom)
      const heightRatio = (yPosition - TREE_CONFIG.topY) / treeHeight;
      
      // Calculate maximum width at this height (triangular shape - narrower at top)
      const maxWidthAtHeight = TREE_CONFIG.topWidth + (TREE_CONFIG.baseWidth - TREE_CONFIG.topWidth) * heightRatio;
      const safeWidth = maxWidthAtHeight * ORNAMENT_CONFIG.widthSafetyMargin;
      
      // Random X position within the width at this height
      const xRandom = seededRandom(i * 5 + attempts * 100 + 1) - 0.5;
      xPosition = TREE_CONFIG.centerX + xRandom * safeWidth;
      
      // Check if position is too close to any existing position
      validPosition = true;
      for (const existingPos of positions) {
        if (isTooClose({ x: xPosition, y: yPosition }, existingPos, ORNAMENT_CONFIG.minDistance)) {
          validPosition = false;
          break;
        }
      }
      
      attempts++;
    }
    
    // Add position (will use last attempted position even if not perfectly valid after max attempts)
    positions.push({
      x: xPosition,
      y: yPosition
    });
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
