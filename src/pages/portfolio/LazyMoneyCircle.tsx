
import React from "react";
import ProjectDetail from "@/components/ProjectDetail";

const LazyMoneyCircle: React.FC = () => {
  return (
    <ProjectDetail
      title="Lazy Money Circle"
      role="Faceless Social Media Strategist"
      year="2023"
      duration="Mar 2023 - Sep 2023"
      client="Lazy Money Circle"
      description="As a Faceless Social Media Strategist for Lazy Money Circle, I created and implemented comprehensive strategies for an anonymous finance brand. I developed content calendars, designed engagement tactics, and built a loyal community without revealing the identity of the content creator."
      image="https://via.placeholder.com/800x600/f90/fff.png"
      logo="https://via.placeholder.com/200x50/f90/fff.png"
      achievements={[
        {
          title: "Anonymous Brand Development",
          description: "Created and established a distinct brand identity for a finance-focused content creator while maintaining complete anonymity, resulting in a recognizable presence in the financial education niche."
        },
        {
          title: "Content Strategy",
          description: "Developed a comprehensive content strategy focused on passive income and financial independence topics, creating a consistent posting schedule that increased audience engagement by approximately 45%."
        },
        {
          title: "Community Building",
          description: "Built an engaged community of finance enthusiasts through strategic content and interaction techniques, fostering meaningful discussions without revealing creator identity."
        },
        {
          title: "Platform Expansion",
          description: "Successfully expanded content reach across multiple social media platforms while maintaining consistency in messaging and brand voice."
        }
      ]}
      tools={["TikTok", "Instagram", "YouTube", "Content Scheduling Tools", "Canva", "CapCut", "Analytics Platforms"]}
    />
  );
};

export default LazyMoneyCircle;
