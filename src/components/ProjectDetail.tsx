
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

interface ProjectDetailProps {
  title: string;
  role: string;
  year: string;
  client: string;
  description: string;
  image: string;
  logo?: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  title,
  role,
  year,
  client,
  description,
  image,
  logo
}) => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link to="/portfolio" className="text-gray-600 hover:text-black transition-colors">
            &larr; Back to Portfolio
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <p className="text-xl text-gray-600 mb-6">{role}</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Year</h3>
                <p>{year}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Client</h3>
                <p>{client}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">About the Project</h3>
                <p className="text-gray-600">{description}</p>
              </div>
              
              <div className="pt-4">
                <Button className="bg-black text-white rounded-full px-8 py-2 hover:opacity-90 transition-opacity">
                  View Project
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="mb-6">
              {logo && (
                <img src={logo} alt={`${title} logo`} className="h-12" />
              )}
            </div>
            <img 
              src={image} 
              alt={title} 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="pt-12 border-t">
          <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/portfolio/reelcut" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
                <div className="h-40 overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/reelcut_vemgjj.png" 
                    alt="Reelcut"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Reelcut</h3>
                  <p className="text-sm text-gray-500">Marketing Project</p>
                </div>
              </div>
            </Link>
            
            <Link to="/portfolio/newbase" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
                <div className="h-40 overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/newbase_fjgadp.png" 
                    alt="Newbase"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Newbase</h3>
                  <p className="text-sm text-gray-500">SEO Specialist</p>
                </div>
              </div>
            </Link>
            
            <Link to="/portfolio/blackhatairdrop" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
                <div className="h-40 overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/blackhat_pj0eir.png" 
                    alt="Blackhat Airdrop"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Blackhat Airdrop</h3>
                  <p className="text-sm text-gray-500">Web3 Community</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
