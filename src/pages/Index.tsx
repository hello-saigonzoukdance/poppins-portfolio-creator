import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <div className="mb-2">
              <span className="text-amber-400 text-3xl">👋</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello I'm Ngan!</h1>
            <p className="text-gray-700 mb-8">
            Results-driven and flexible marketer with 1+ years of experience in B2B, Blockchain, AI, and Web3 industries. Expertise in content strategy, SEO, and marketing automation. Skilled in using data, creativity, and storytelling to scale brands.
            </p>
            <div className="flex gap-4">
              <Button className="bg-black text-white rounded-full px-8 py-2 hover:opacity-90 transition-opacity text-sm">
                Hire Me
              </Button>
              <Button className="bg-transparent text-black border border-black rounded-full px-8 py-2 hover:bg-gray-100 transition-colors text-sm">
                My Resume
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* Empty div for image placeholder */}
            <div className="bg-purple-600 rounded-lg p-4 w-80 h-80 relative">
              {/* We'll leave this empty as requested */}
              <div className="absolute top-4 left-4 bg-yellow-400 py-1 px-3 rounded-full text-xs font-medium">NEW</div>
              <div className="absolute bottom-4 left-4 bg-white py-1 px-3 rounded-full text-xs font-medium">HIRE</div>
              <div className="absolute bottom-4 right-4 bg-black text-white py-1 px-3 rounded-full text-xs font-medium">SOCIAL</div>
            </div>
          </div>
        </section>

        {/* Growth-Oriented Digital Marketer Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Growth-Oriented</h2>
            <h2 className="text-3xl font-bold mb-8">Digital Marketer</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Proven success in driving organic growth through SEO, social media marketing, and project management. Skilled in data analysis and campaign optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="skill-card">
              <h3 className="text-xl font-semibold mb-2">Project Management</h3>
              <p className="text-gray-600 mb-6">
                Managed Creative Project Manager with a focus on marketing campaigns.
              </p>
              <div className="rounded-lg overflow-hidden bg-gray-100">
                <Link to="/portfolio/reelcut">
                  <img 
                    src="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/reelcut_vemgjj.png" 
                    alt="Reelcut" 
                    className="w-full h-32 object-contain p-4" 
                  />
                </Link>
              </div>
            </div>
            
            <div className="skill-card">
              <h3 className="text-xl font-semibold mb-2">SEO</h3>
              <p className="text-gray-600 mb-6">
                SEO Specialist for a Finance Tech Start-up based in Singapore.
              </p>
              <div className="rounded-lg overflow-hidden bg-gray-100">
                <Link to="/portfolio/newbase">
                  <img 
                    src="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/newbase_fjgadp.png" 
                    alt="Newbase" 
                    className="w-full h-32 object-contain p-4" 
                  />
                </Link>
              </div>
            </div>
            
            <div className="skill-card">
              <h3 className="text-xl font-semibold mb-2">Web3</h3>
              <p className="text-gray-600 mb-6">
                Web3 Strategist with Experience in Airdrops and Giveaways.
              </p>
              <div className="rounded-lg overflow-hidden bg-gray-100">
                <Link to="/portfolio/blackhatairdrop">
                  <img 
                    src="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/blackhat_pj0eir.png" 
                    alt="Blackhat Airdrop" 
                    className="w-full h-32 object-contain p-4" 
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Selected Work Section (simplified) */}
          <section className="py-16 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold">Selected work</h2>
                <p className="text-xl">(2024-2025)</p>
              </div>
              <Link to="/portfolio">
                <Button className="mt-4 md:mt-0 bg-black text-white rounded-full px-6 py-2 hover:opacity-90 transition-opacity">
                  View All Work
                </Button>
              </Link>
            </div>

            {/* Keep timeline-style work list */}
            <div className="space-y-1">
              <Link to="/portfolio/reelcut" className="block w-full hover:bg-gray-50">
                <div className="timeline-item border-t">
                  <div className="w-32">
                    <p className="timeline-year">2024</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="timeline-title">Marketing Project Specialist</h3>
                  </div>
                  <div className="w-32 text-right">
                    <img src="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/reelcut_vemgjj.png" alt="Reelcut" className="h-8 ml-auto" />
                  </div>
                </div>
              </Link>
              
              <Link to="/portfolio/newbase" className="block w-full hover:bg-gray-50">
                <div className="timeline-item border-t">
                  <div className="w-32">
                    <p className="timeline-year">2024</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="timeline-title">SEO Specialist</h3>
                  </div>
                  <div className="w-32 text-right">
                    <img src="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/newbase_fjgadp.png" alt="Newbase" className="h-8 ml-auto" />
                  </div>
                </div>
              </Link>
              
              <Link to="/portfolio/blackhatairdrop" className="block w-full hover:bg-gray-50">
                <div className="timeline-item border-t">
                  <div className="w-32">
                    <p className="timeline-year">2023</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="timeline-title">Web3 Community Airdrop</h3>
                  </div>
                  <div className="w-32 text-right">
                    <img src="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/blackhat_pj0eir.png" alt="Blackhat Airdrop" className="h-8 ml-auto" />
                  </div>
                </div>
              </Link>
              
              <Link to="/portfolio/lazymoneycircle" className="block w-full hover:bg-gray-50">
                <div className="timeline-item border-t">
                  <div className="w-32">
                    <p className="timeline-year">2023</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="timeline-title">Faceless Social Media Strategist</h3>
                  </div>
                  <div className="w-32 text-right">
                    <span className="text-pink-500 font-bold">Lazy</span>
                  </div>
                </div>
              </Link>
              
              <Link to="/portfolio/namnrpro" className="block w-full hover:bg-gray-50">
                <div className="timeline-item border-t">
                  <div className="w-32">
                    <p className="timeline-year">2022</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="timeline-title">LinkedIn Video Editor</h3>
                  </div>
                  <div className="w-32 text-right">
                    <span className="text-teal-500 font-bold">NamNR</span>
                  </div>
                </div>
              </Link>
              
              <Link to="/portfolio/ellietalksmoney" className="block w-full hover:bg-gray-50">
                <div className="timeline-item border-t border-b">
                  <div className="w-32">
                    <p className="timeline-year">2023</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="timeline-title">AI Faceless Social Media Growth Strategist (coming soon)</h3>
                  </div>
                  <div className="w-32 text-right">
                    <span className="text-blue-500 font-bold">EllieTalksMoney</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
