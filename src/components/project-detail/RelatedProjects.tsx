
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface RelatedProject {
  title: string;
  description: string;
  image: string;
  link: string;
}

const RelatedProjects: React.FC = () => {
  const projects = [
    {
      title: "Reelcut",
      description: "Marketing Project",
      image: "https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/reelcut_vemgjj.png",
      link: "/portfolio/reelcut"
    },
    {
      title: "Newbase",
      description: "SEO Specialist",
      image: "https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/newbase_fjgadp.png",
      link: "/portfolio/newbase"
    },
    {
      title: "Blackhat Airdrop",
      description: "Web3 Community",
      image: "https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/blackhat_pj0eir.png",
      link: "/portfolio/blackhatairdrop"
    }
  ];

  return (
    <div className="pt-12 border-t">
      <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link to={project.link} key={project.title} className="group">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium group-hover:text-purple-600 transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.description}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;
