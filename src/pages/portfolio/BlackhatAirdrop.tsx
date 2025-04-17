
import React from "react";
import ProjectDetail from "@/components/ProjectDetail";

const BlackhatAirdrop: React.FC = () => {
  return (
    <ProjectDetail
      title="Blackhat Airdrop"
      role="Web3 Marketing Assistant"
      year="2023"
      duration="Jul 2024 - Present"
      client="Blackhat Airdrop Community Project"
      description="As a Web3 Marketing Assistant for Blackhat Airdrop, I managed community engagement and created educational content related to cryptocurrency airdrops. My role involved developing strategies to help users navigate the complex Web3 ecosystem while building a supportive community around airdrop opportunities."
      image="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/blackhat_pj0eir.png"
      logo="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/blackhat_pj0eir.png"
      achievements={[
        {
          title: "Community Management",
          description: "Managed and grew a Telegram community of 100+ members, promoting active discussion around airdrop opportunities and Web3 tools."
        },
        {
          title: "Content Creation",
          description: "Created and published 10+ educational posts and beginner-friendly guides covering tools like MetaMask, Rabby, Phantom, and MEXC to enhance user onboarding and readiness."
        },
        {
          title: "Educational Content",
          description: "Created beginner-focused guides to help new users get started with airdrop campaigns on platforms like Zealy, Galxe, and Layer3, covering task completion, account setup, and reward claiming processes."
        },
        {
          title: "Data Analysis",
          description: "Conducted on-chain research and monitored DeFi trends via DeFi Llama and ICO analytics sources, identifying 10+ high-potential airdrops with an average user ROI of 2.5x."
        },
        {
          title: "Airdrop Strategy",
          description: "Designed structured explainers on wallet setup, Sybil detection, funding strategies, and multi-wallet use, helping users navigate the airdrop ecosystem more effectively."
        }
      ]}
      tools={["Telegram", "MetaMask", "Rabby", "Phantom", "MEXC", "Zealy", "Galxe", "Layer3", "DeFi Llama"]}
    />
  );
};

export default BlackhatAirdrop;
