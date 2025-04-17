
import React from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import HeroBadge from "@/components/HeroBadge";

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      id: "reelcut",
      name: "Reelcut",
      role: "Marketing Project Specialist",
      year: "2024",
      description: "Email marketing campaign execution, lead generation, project management, SEO strategy, and content optimization for video editing agency.",
      image: "https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/reelcut_vemgjj.png",
      link: "/portfolio/reelcut",
      featured: true,
      badge: "MARKETING"
    },
    {
      id: "newbase",
      name: "Newbase",
      role: "SEO Specialist",
      year: "2024",
      description: "SEO keyword research, content marketing, and metadata optimization for a platform featuring 500+ AI tools, ranking 184 keywords in top 50 search results.",
      image: "https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/newbase_fjgadp.png",
      link: "/portfolio/newbase",
      featured: true,
      badge: "SEO"
    },
    {
      id: "blackhatairdrop",
      name: "Blackhat Airdrop",
      role: "Web3 Community Airdrop",
      year: "2023",
      description: "Community management, educational content creation, on-chain research, and airdrop strategy development for Web3 enthusiasts.",
      image: "https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/blackhat_pj0eir.png",
      link: "/portfolio/blackhatairdrop",
      featured: true,
      badge: "WEB3"
    },
    {
      id: "namnrpro",
      name: "NamNR Pro",
      role: "LinkedIn Video Editor",
      year: "2022",
      description: "Professional video content creation, visual branding, content strategy, and performance analysis for LinkedIn marketing.",
      image: "https://via.placeholder.com/400x300/09f/fff.png",
      link: "/portfolio/namnrpro",
      badge: "VIDEO"
    },
    {
      id: "ellietalksmoney",
      name: "EllieTalksMoney",
      role: "AI Faceless Social Media Growth Strategist",
      year: "2023",
      description: "AI content framework, growth strategy, audience research, and content calendar development for finance content (coming soon).",
      image: "https://via.placeholder.com/400x300/09f/fff.png",
      link: "/portfolio/ellietalksmoney",
      badge: "AI"
    },
    {
      id: "lazymoneycircle",
      name: "Lazy Money Circle",
      role: "Faceless Social Media Strategist",
      year: "2023",
      description: "Anonymous brand development, content strategy, community building, and platform expansion for finance education brand.",
      image: "https://via.placeholder.com/400x300/f90/fff.png",
      link: "/portfolio/lazymoneycircle",
      badge: "SOCIAL"
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
          <p className="text-gray-600 max-w-3xl">
            A collection of my marketing, SEO, and Web3 projects. Each showcases different skills and expertise in digital marketing, content creation, and community building.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Link to={item.link} key={item.id} className="block group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  {item.badge && (
                    <HeroBadge 
                      text={item.badge} 
                      position="top-right" 
                      color={
                        item.badge === "MARKETING" ? "purple" : 
                        item.badge === "SEO" ? "blue" : 
                        item.badge === "WEB3" ? "yellow" : 
                        "blue"
                      } 
                    />
                  )}
                  {item.featured && (
                    <div className="absolute top-2 left-2 bg-black text-white py-1 px-3 rounded-full text-xs font-medium z-10">
                      FEATURED
                    </div>
                  )}
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <span className="text-sm text-gray-500">{item.year}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{item.role}</p>
                  <p className="text-gray-600 flex-grow">{item.description}</p>
                  <div className="mt-4 pt-4 border-t">
                    <span className="text-black font-medium text-sm flex items-center group-hover:underline">
                      View Project Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
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
