
import React from "react";

interface ProjectToolsProps {
  tools: string[];
}

const ProjectTools: React.FC<ProjectToolsProps> = ({ tools }) => {
  if (!tools.length) return null;

  return (
    <div>
      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Tools Used</h3>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span 
            key={index} 
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectTools;
