
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import HeroBadge from "@/components/HeroBadge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronDown } from "lucide-react";

interface ProjectDetailProps {
  title: string;
  role: string;
  year: string;
  client: string;
  description: string;
  image: string;
  logo?: string;
  achievements?: {
    title: string;
    description: string;
    metricImage?: string;
  }[];
  tools?: string[];
  duration?: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  title,
  role,
  year,
  client,
  description,
  image,
  logo,
  achievements = [],
  tools = [],
  duration,
}) => {
  const [openAchievementIndex, setOpenAchievementIndex] = useState<number | null>(null);

  const toggleAchievement = (index: number) => {
    setOpenAchievementIndex(openAchievementIndex === index ? null : index);
  };

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
              
              {duration && (
                <div>
                  <h3 className="text-lg font-medium mb-2">Duration</h3>
                  <p>{duration}</p>
                </div>
              )}
              
              <div>
                <h3 className="text-lg font-medium mb-2">Client</h3>
                <p>{client}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">About the Project</h3>
                <p className="text-gray-600">{description}</p>
              </div>
              
              {achievements.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium mb-2">Key Achievements</h3>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index}>
                        {achievement.metricImage ? (
                          <Dialog>
                            <Collapsible className="border rounded-lg">
                              <div className="flex justify-between items-center w-full px-4 py-3">
                                <CollapsibleTrigger 
                                  className="flex justify-between items-center w-full text-left font-medium"
                                  onClick={() => toggleAchievement(index)}
                                >
                                  {achievement.title}
                                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${openAchievementIndex === index ? 'rotate-180' : ''}`} />
                                </CollapsibleTrigger>
                                {achievement.metricImage && (
                                  <DialogTrigger className="ml-2 bg-gray-100 hover:bg-gray-200 p-1 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart">
                                      <line x1="12" x2="12" y1="20" y2="10"></line>
                                      <line x1="18" x2="18" y1="20" y2="4"></line>
                                      <line x1="6" x2="6" y1="20" y2="16"></line>
                                    </svg>
                                  </DialogTrigger>
                                )}
                              </div>
                              <CollapsibleContent className="px-4 pb-4 text-gray-600">
                                {achievement.description}
                              </CollapsibleContent>
                            </Collapsible>
                            
                            {achievement.metricImage && (
                              <DialogContent className="w-full max-w-2xl">
                                <div className="pt-4">
                                  <h3 className="text-xl font-semibold mb-4">{achievement.title} - Metrics</h3>
                                  <img 
                                    src={achievement.metricImage} 
                                    alt={`${achievement.title} metrics`} 
                                    className="w-full rounded-md"
                                  />
                                </div>
                              </DialogContent>
                            )}
                          </Dialog>
                        ) : (
                          <Collapsible className="border rounded-lg">
                            <CollapsibleTrigger 
                              className="flex justify-between items-center w-full px-4 py-3 text-left font-medium"
                              onClick={() => toggleAchievement(index)}
                            >
                              {achievement.title}
                              <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${openAchievementIndex === index ? 'rotate-180' : ''}`} />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="px-4 pb-4 text-gray-600">
                              {achievement.description}
                            </CollapsibleContent>
                          </Collapsible>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {tools.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium mb-2">Tools Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
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
            <div className="relative w-full">
              <HeroBadge text="FEATURED" position="top-right" color="yellow" />
              <img 
                src={image} 
                alt={title} 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
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
