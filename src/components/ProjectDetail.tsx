
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import HeroBadge from "@/components/HeroBadge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronDown, ArrowLeft, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

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
          <Link to="/portfolio" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
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
            
            {achievements.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Key Achievements</h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index}>
                      {achievement.metricImage ? (
                        <Dialog>
                          <Card className="overflow-hidden transition-all hover:shadow-lg">
                            <Collapsible>
                              <div className="flex justify-between items-center w-full p-4">
                                <CollapsibleTrigger 
                                  className="flex justify-between items-center w-full text-left font-medium"
                                  onClick={() => toggleAchievement(index)}
                                >
                                  {achievement.title}
                                  <ChevronDown 
                                    className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                                      openAchievementIndex === index ? 'rotate-180' : ''
                                    }`} 
                                  />
                                </CollapsibleTrigger>
                                {achievement.metricImage && (
                                  <DialogTrigger>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="ml-2 text-gray-500 hover:text-gray-900"
                                    >
                                      <ExternalLink className="h-4 w-4" />
                                    </Button>
                                  </DialogTrigger>
                                )}
                              </div>
                              <CollapsibleContent className="px-4 pb-4 text-gray-600">
                                {achievement.description}
                              </CollapsibleContent>
                            </Collapsible>
                          </Card>
                          
                          {achievement.metricImage && (
                            <DialogContent className="max-w-3xl">
                              <div className="pt-4">
                                <h3 className="text-xl font-semibold mb-4">{achievement.title} - Metrics</h3>
                                <img 
                                  src={achievement.metricImage} 
                                  alt={`${achievement.title} metrics`} 
                                  className="w-full rounded-lg"
                                />
                              </div>
                            </DialogContent>
                          )}
                        </Dialog>
                      ) : (
                        <Card className="overflow-hidden transition-all hover:shadow-lg">
                          <Collapsible>
                            <CollapsibleTrigger 
                              className="flex justify-between items-center w-full p-4 text-left font-medium"
                              onClick={() => toggleAchievement(index)}
                            >
                              {achievement.title}
                              <ChevronDown 
                                className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                                  openAchievementIndex === index ? 'rotate-180' : ''
                                }`} 
                              />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="px-4 pb-4 text-gray-600">
                              {achievement.description}
                            </CollapsibleContent>
                          </Collapsible>
                        </Card>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {tools.length > 0 && (
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
            )}
            
            <div className="pt-4">
              <Button className="bg-black text-white rounded-full px-8 py-2 hover:bg-gray-800 transition-colors">
                View Project
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="sticky top-24">
              {logo && (
                <div className="mb-6">
                  <img src={logo} alt={`${title} logo`} className="h-12" />
                </div>
              )}
              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 mix-blend-overlay" />
                <HeroBadge text="FEATURED" position="top-right" color="yellow" />
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t">
          <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/portfolio/reelcut" className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/reelcut_vemgjj.png" 
                    alt="Reelcut"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium group-hover:text-purple-600 transition-colors">Reelcut</h3>
                  <p className="text-sm text-gray-500">Marketing Project</p>
                </div>
              </Card>
            </Link>
            
            <Link to="/portfolio/newbase" className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/newbase_fjgadp.png" 
                    alt="Newbase"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium group-hover:text-purple-600 transition-colors">Newbase</h3>
                  <p className="text-sm text-gray-500">SEO Specialist</p>
                </div>
              </Card>
            </Link>
            
            <Link to="/portfolio/blackhatairdrop" className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/blackhat_pj0eir.png" 
                    alt="Blackhat Airdrop"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium group-hover:text-purple-600 transition-colors">Blackhat Airdrop</h3>
                  <p className="text-sm text-gray-500">Web3 Community</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;

