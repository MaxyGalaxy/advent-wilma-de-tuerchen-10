import React from 'react';
import { Project } from '../types';
import { WILMA_COLORS } from '../constants';
import { X, Info } from 'lucide-react';

interface SidebarProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectSidebar: React.FC<SidebarProps> = ({ project, onClose }) => {
  if (!project) {
    return null;
  }

  return (
    <div className="h-full flex flex-col bg-white shadow-2xl relative overflow-hidden font-sans">
      
      {/* 1. Header Section (Dark Navy) - Fixed */}
      <div 
        className="w-full px-8 py-6 relative flex-shrink-0 z-10"
        style={{ backgroundColor: WILMA_COLORS.darkNavy }}
      >
        {/* Close Button - Fully Rounded */}
        <button 
          onClick={onClose}
          className="absolute top-1/2 -translate-y-1/2 right-6 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Schließen"
        >
          <X size={24} />
        </button>

        <div className="pr-10">
          {/* Region Badge - Fully Rounded */}
          <span 
            className="inline-block px-3 py-1 text-xs font-bold uppercase rounded-full mb-2 tracking-widest"
            style={{ backgroundColor: WILMA_COLORS.yellow, color: WILMA_COLORS.darkNavy }}
          >
            {project.region}
          </span>
          
          {/* City Name */}
          <h1 className="text-3xl font-bold text-white leading-none tracking-tight">
            {project.city}
          </h1>
        </div>
      </div>

      {/* 2. Scrollable Content */}
      <div className="flex-1 overflow-y-auto bg-white">
        
        {/* Project Details */}
        <div className="px-8 py-8">
          
          {/* Project Name */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 leading-tight mb-3">
              {project.name}
            </h2>
            <div className="h-1.5 w-24 rounded-full" style={{ backgroundColor: WILMA_COLORS.mediumBlue }}></div>
          </div>

          {/* Description */}
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-600 leading-7 text-base">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Footer - Fixed with One Button */}
      <div className="p-6 border-t border-gray-100 bg-gray-50 flex-shrink-0">
        
        {/* Mehr erfahren Button - Primary Solid */}
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 rounded-full font-bold text-lg transition-all shadow-sm flex items-center justify-center hover:shadow-md hover:brightness-110 cursor-pointer"
          style={{ 
            backgroundColor: WILMA_COLORS.mediumBlue, 
            color: 'white'
          }}
        >
          <Info size={22} className="mr-2" />
          Mehr erfahren
        </a>
      </div>
    </div>
  );
};

export default ProjectSidebar;
