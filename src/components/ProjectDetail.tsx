
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ProjectHeader from "./project-detail/ProjectHeader";
import ProjectAchievements from "./project-detail/ProjectAchievements";
import ProjectTools from "./project-detail/ProjectTools";
import ProjectCarousel from "./project-detail/ProjectCarousel";
import RelatedProjects from "./project-detail/RelatedProjects";

interface ProjectDetailProps {
  title: string;
  role: string;
  year: string;
  client: string;
  description: string;
  image: string;
  carouselImages?: string[];
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
  carouselImages = [],
  logo,
  achievements = [],
  tools = [],
  duration,
}) => {
  const allImages = [image, ...carouselImages];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ProjectHeader
            title={title}
            role={role}
            year={year}
            duration={duration}
            client={client}
            description={description}
            logo={logo}
          />
          
          <div className="space-y-8">
            <ProjectCarousel 
              images={allImages}
              logo={logo}
              title={title}
            />
          </div>
          
          <div className="space-y-8">
            {achievements.length > 0 && (
              <ProjectAchievements achievements={achievements} />
            )}
            
            {tools.length > 0 && (
              <ProjectTools tools={tools} />
            )}
            
            <div className="pt-4">
              <Button className="bg-black text-white rounded-full px-8 py-2 hover:bg-gray-800 transition-colors">
                View Project
              </Button>
            </div>
          </div>
        </div>
        
        <RelatedProjects />
      </div>
    </Layout>
  );
};

export default ProjectDetail;
