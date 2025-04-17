
import React from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      id: "reelcut",
      name: "Reelcut",
      role: "Marketing Project Specialist",
      year: "2024",
      description: "Managed Creative Project Manager with a focus on marketing campaigns.",
      image: "https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/reelcut_vemgjj.png",
      link: "/portfolio/reelcut"
    },
    {
      id: "newbase",
      name: "Newbase",
      role: "SEO Specialist",
      year: "2024",
      description: "SEO Specialist for a Finance Tech Start-up based in Singapore.",
      image: "https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/newbase_fjgadp.png",
      link: "/portfolio/newbase"
    },
    {
      id: "blackhatairdrop",
      name: "Blackhat Airdrop",
      role: "Web3 Community Airdrop",
      year: "2023",
      description: "Web3 Strategist with Experience in Airdrops and Giveaways.",
      image: "https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/blackhat_pj0eir.png",
      link: "/portfolio/blackhatairdrop"
    },
    {
      id: "namnrpro",
      name: "NamNR Pro",
      role: "LinkedIn Video Editor",
      year: "2022",
      description: "Edited and produced video content for LinkedIn marketing.",
      image: "https://via.placeholder.com/400x300/09f/fff.png",
      link: "/portfolio/namnrpro"
    },
    {
      id: "ellietalksmoney",
      name: "EllieTalksMoney",
      role: "AI Faceless Social Media Growth Strategist",
      year: "2023",
      description: "Growth strategy for finance content creation (coming soon).",
      image: "https://via.placeholder.com/400x300/09f/fff.png",
      link: "/portfolio/ellietalksmoney"
    },
    {
      id: "lazymoneycircle",
      name: "Lazy Money Circle",
      role: "Faceless Social Media Strategist",
      year: "2023",
      description: "Created and implemented social media strategies for anonymous finance brand.",
      image: "https://via.placeholder.com/400x300/f90/fff.png",
      link: "/portfolio/lazymoneycircle"
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-12">Portfolio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Link to={item.link} key={item.id} className="block group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <span className="text-sm text-gray-500">{item.year}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{item.role}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
