
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectCarouselProps {
  images: string[];
  logo?: string;
  title: string;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images, logo, title }) => {
  return (
    <div className="sticky top-24">
      {logo && (
        <div className="mb-6">
          <img src={logo} alt={`${title} logo`} className="h-12" />
        </div>
      )}
      <div className="relative w-full rounded-xl overflow-hidden shadow-2xl">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((imgSrc, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 mix-blend-overlay" />
                  <img 
                    src={imgSrc} 
                    alt={`${title} showcase ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectCarousel;
