
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ProjectHeaderProps {
  title: string;
  role: string;
  year: string;
  duration?: string;
  client: string;
  description: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  role,
  year,
  duration,
  client,
  description,
}) => {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <Link to="/portfolio" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-xl text-gray-600">{role}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Year</h3>
          <p className="font-medium">{year}</p>
        </div>
        
        {duration && (
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Duration</h3>
            <p className="font-medium">{duration}</p>
          </div>
        )}
        
        <div>
          <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Client</h3>
          <p className="font-medium">{client}</p>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">About the Project</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectHeader;
