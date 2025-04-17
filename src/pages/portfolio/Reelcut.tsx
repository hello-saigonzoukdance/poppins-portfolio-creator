
import React from "react";
import ProjectDetail from "@/components/ProjectDetail";

const Reelcut: React.FC = () => {
  return (
    <ProjectDetail
      title="Reelcut"
      role="Marketing Project Specialist"
      year="2024"
      duration="Aug 2024 - Present"
      client="Reelcut.xyz - Video Editing Agency"
      description="As the Marketing Project Specialist at Reelcut, I developed and implemented comprehensive marketing strategies focused on brand growth and user acquisition. I managed cross-functional teams to deliver campaigns on schedule and within budget, while continuously optimizing performance through data-driven insights."
      image="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/reelcut_vemgjj.png"
      logo="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/reelcut_vemgjj.png"
      achievements={[
        {
          title: "Email Marketing",
          description: "Led end-to-end campaign execution for a 3,560-email A/B test using Make.com, Zapier, Brevo, and Mailchimp. Achieved a 58.7% open rate and 7.5% CTR through targeted segmentation, email automation, and continuous performance optimization."
        },
        {
          title: "Lead Generation",
          description: "Monitored 4,000+ content creators using Browse AI. Booked 11 meetings via cold outreach, converting 8 into clients (72.7% close rate). Improved conversion through A/B testing, lead qualification, and audience targeting."
        },
        {
          title: "Project & Team Management",
          description: "Recruited and managed a remote team of 8+ video editors. Developed scalable workflows in Notion, reducing production delays by 30% and improving delivery timelines."
        },
        {
          title: "SEO Strategy",
          description: "Conducted keyword research, competitor analysis, and implemented on-page SEO strategies using Google Search Console, SEO tools, and analytics platforms. Improved search engine visibility, driving average SERP position to 24.8 within 9 months."
        },
        {
          title: "Content Optimization",
          description: "Created and optimized SEO-friendly landing pages (e.g., Services, Solutions) aligned with search intent and user experience (UX). Generated over 1.55K impressions, achieved a 6.1% CTR, and contributed to steady organic traffic growth."
        }
      ]}
      tools={["Make.com", "Zapier", "Brevo", "Mailchimp", "Browse AI", "Notion", "Google Search Console", "SEO Tools"]}
    />
  );
};

export default Reelcut;
