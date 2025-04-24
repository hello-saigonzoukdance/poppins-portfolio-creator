
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface ProjectToolsProps {
  tools: string[];
}

const ProjectTools: React.FC<ProjectToolsProps> = ({ tools }) => {
  if (!tools.length) return null;

  return (
    <div>
      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Tools Used</h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {tools.map((tool, index) => (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5">
              <div className="bg-white shadow-sm rounded-lg p-4 h-20 flex items-center justify-center">
                <span className="text-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  {tool}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default ProjectTools;
