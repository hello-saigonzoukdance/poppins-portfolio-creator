
import React from "react";
import ProjectDetail from "@/components/ProjectDetail";

const NamnrPro: React.FC = () => {
  return (
    <ProjectDetail
      title="NamNR Pro"
      role="LinkedIn Video Editor"
      year="2022"
      duration="Jan 2022 - Dec 2022"
      client="NamNR Professional Services"
      description="As a LinkedIn Video Editor for NamNR Pro, I created engaging and professional video content optimized for LinkedIn's platform. I developed a consistent visual style that reinforced brand identity while crafting compelling narratives that resonated with business professionals."
      image="https://via.placeholder.com/800x600/09f/fff.png"
      logo="https://via.placeholder.com/200x50/09f/fff.png"
      achievements={[
        {
          title: "Video Content Creation",
          description: "Produced and edited professional-quality video content specifically designed for LinkedIn's business audience, resulting in higher engagement rates compared to industry standards."
        },
        {
          title: "Visual Branding",
          description: "Developed and maintained consistent visual branding across all video content, creating recognizable and professional aesthetics that aligned with client messaging."
        },
        {
          title: "Content Strategy",
          description: "Collaborated with marketing teams to develop video content strategies that aligned with business objectives and audience preferences."
        },
        {
          title: "Performance Analysis",
          description: "Analyzed video performance metrics to optimize future content, improving view rates and audience retention."
        }
      ]}
      tools={["Adobe Premiere Pro", "After Effects", "Photoshop", "Canva", "LinkedIn", "Content Marketing Tools"]}
    />
  );
};

export default NamnrPro;
