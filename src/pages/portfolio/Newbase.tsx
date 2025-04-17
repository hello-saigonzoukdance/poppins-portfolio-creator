
import React from "react";
import ProjectDetail from "@/components/ProjectDetail";

const Newbase: React.FC = () => {
  return (
    <ProjectDetail
      title="Newbase"
      role="SEO Specialist"
      year="2024"
      duration="Oct 2024 - Present"
      client="Newbase.so - Explore 500+ AI Tools Project"
      description="As an SEO Specialist for Newbase, a Finance Tech Start-up based in Singapore focused on AI tools, I developed and executed comprehensive SEO strategies to enhance online visibility and organic traffic for a platform featuring over 500 AI tools."
      image="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/newbase_fjgadp.png"
      logo="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/newbase_fjgadp.png"
      achievements={[
        {
          title: "SEO Keyword Research",
          description: "Performed SEO keyword research with SEMRush, Ahrefs, and Similarweb, optimizing content and metadata to boost organic traffic and rank 184 keywords in the top 50 search results."
        },
        {
          title: "Content Marketing",
          description: "Developed and published 100+ blog posts and articles showcasing the features and benefits of AI tools, tailored for both beginner and tech-savvy audiences. Researched AI industry trends and user intent to produce clear, actionable, and informative content."
        },
        {
          title: "Technical SEO Implementation",
          description: "Implemented technical SEO best practices to improve site performance, crawlability, and indexation, resulting in better search engine rankings and improved user experience."
        },
        {
          title: "Competitor Analysis",
          description: "Conducted thorough competitor analysis to identify opportunities and gaps in the AI tools marketplace, informing content and SEO strategy."
        }
      ]}
      tools={["SEMRush", "Ahrefs", "Similarweb", "Google Analytics", "Google Search Console", "WordPress", "Content Management Systems"]}
    />
  );
};

export default Newbase;
