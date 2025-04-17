
import React from "react";
import ProjectDetail from "@/components/ProjectDetail";

const EllieTalksMoney: React.FC = () => {
  return (
    <ProjectDetail
      title="EllieTalksMoney"
      role="AI Faceless Social Media Growth Strategist"
      year="2023"
      duration="Jun 2023 - Dec 2023"
      client="EllieTalksMoney Finance Platform"
      description="As an AI Faceless Social Media Growth Strategist for EllieTalksMoney (coming soon), I'm developing innovative strategies that leverage artificial intelligence to create and distribute engaging finance content without revealing the creator's identity."
      image="https://via.placeholder.com/800x600/09f/fff.png"
      logo="https://via.placeholder.com/200x50/09f/fff.png"
      achievements={[
        {
          title: "AI Content Framework",
          description: "Designed a structured content framework for generating finance-related content using AI tools while maintaining a consistent brand voice and messaging style.",
          metricImage: "https://via.placeholder.com/800x500/09f/fff.png?text=AI+Content+Framework+Metrics"
        },
        {
          title: "Growth Strategy",
          description: "Developed scalable growth frameworks for expanding social media presence across multiple platforms while preserving anonymity.",
          metricImage: "https://via.placeholder.com/800x500/09f/fff.png?text=Growth+Strategy+Metrics"
        },
        {
          title: "Audience Research",
          description: "Conducted extensive research on target financial demographics to create highly relevant and engaging content that resonates with specific audience segments.",
          metricImage: "https://via.placeholder.com/800x500/09f/fff.png?text=Audience+Research+Metrics"
        },
        {
          title: "Content Calendar",
          description: "Created comprehensive content calendars with AI-generated finance topics that addressed common questions and pain points in personal finance management.",
          metricImage: "https://via.placeholder.com/800x500/09f/fff.png?text=Content+Calendar+Metrics"
        }
      ]}
      tools={["ChatGPT", "Midjourney", "Canva", "CapCut", "TikTok", "Instagram", "YouTube", "Content Scheduling Tools"]}
    />
  );
};

export default EllieTalksMoney;
