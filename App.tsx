import React, { useState } from 'react';
import TreeView from './components/TreeView';
import ProjectSidebar from './components/ProjectSidebar';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseSidebar = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative h-screen w-screen bg-gray-100 overflow-hidden font-sans">
      
      {/* Tree View Layer - Always Full Screen in Background */}
      <div className="absolute inset-0 z-0">
        <TreeView 
          onProjectSelect={handleProjectSelect}
          selectedProjectId={selectedProject?.id}
        />
      </div>

      {/* Sidebar - Overlay on the Right */}
      <div 
        className={`
          absolute top-0 right-0 z-20 h-full w-full md:w-[420px] 
          bg-white shadow-2xl transform transition-transform duration-300 ease-in-out
          ${selectedProject ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <ProjectSidebar 
          project={selectedProject} 
          onClose={handleCloseSidebar} 
        />
      </div>
      
    </div>
  );
};

export default App;