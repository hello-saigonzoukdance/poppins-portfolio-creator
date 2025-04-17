
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProfileImage from "@/components/ProfileImage";
import { Button } from "@/components/ui/button";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl font-bold mb-6">Hello I'm Ngan!</h1>
            <p className="text-lg mb-8">
              Digital marketer with 3+ years in the marketing, specializing in Branding & Social. As a data-obsessed social media marketer and creative strategist, I help brands to achieve impressive marketing campaigns through creative content marketing strategies.
            </p>
            <div className="flex gap-4">
              <Button className="bg-black text-white rounded-full px-8 py-2 hover:opacity-90 transition-opacity">
                Hire Me
              </Button>
              <Button className="bg-transparent text-black border border-black rounded-full px-8 py-2 hover:bg-gray-100 transition-colors">
                My Resume
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-purple-gradient rounded-lg p-2 inline-block relative">
              <ProfileImage 
                src="/lovable-uploads/0eea9232-21a4-4fcd-9736-6292b33c4925.png" 
                alt="Ngan" 
                className="w-full max-w-md h-auto"
              />
              <div className="absolute top-4 left-4 bg-yellow-400 py-1 px-3 rounded-full text-xs font-medium">NEW</div>
              <div className="absolute bottom-4 left-4 bg-white py-1 px-3 rounded-full text-xs font-medium">HIRE</div>
              <div className="absolute bottom-4 right-4 bg-black text-white py-1 px-3 rounded-full text-xs font-medium">SOCIAL</div>
            </div>
          </div>
        </section>

        {/* Growth-Oriented Digital Marketer Section */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">Growth-Oriented</h2>
            <h2 className="text-3xl font-bold mb-8">Digital Marketer</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Proven success in driving organic growth through SEO, social media marketing, and project management. Skilled in data analysis and campaign optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="skill-card">
              <h3 className="text-xl font-semibold mb-2">Project Management</h3>
              <p className="text-gray-600 mb-4">
                Managed Creative Project Manager with a focus on marketing campaigns.
              </p>
              <img 
                src="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/reelcut_vemgjj.png" 
                alt="Reelcut" 
                className="w-full rounded-lg" 
              />
            </div>
            
            <div className="skill-card">
              <h3 className="text-xl font-semibold mb-2">SEO</h3>
              <p className="text-gray-600 mb-4">
                SEO Specialist for a Finance Tech Start-up based in Singapore.
              </p>
              <img 
                src="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/newbase_fjgadp.png" 
                alt="Newbase" 
                className="w-full rounded-lg" 
              />
            </div>
            
            <div className="skill-card">
              <h3 className="text-xl font-semibold mb-2">Web3</h3>
              <p className="text-gray-600 mb-4">
                Web3 Strategist with Experience in Airdrops and Giveaways.
              </p>
              <img 
                src="https://res.cloudinary.com/ngandev/image/upload/v1713393214/portfolios/blackhat_pj0eir.png" 
                alt="Blackhat Airdrop" 
                className="w-full rounded-lg" 
              />
            </div>
          </div>
        </section>

        {/* Tools & Apps Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Tools & Apps Used</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="tool-card">
              <span className="text-blue-500">Gemini</span>
            </div>
            <div className="tool-card">
              <span>Notion</span>
            </div>
            <div className="tool-card">
              <span>Figma</span>
            </div>
            <div className="tool-card">
              <span>SEMrush</span>
            </div>
            <div className="tool-card">
              <span>Ahrefs</span>
            </div>
            <div className="tool-card">
              <span>ChatGPT</span>
            </div>
            <div className="tool-card">
              <span>Make</span>
            </div>
            <div className="tool-card">
              <span>Discord</span>
            </div>
            <div className="tool-card">
              <span>TikTok</span>
            </div>
            <div className="tool-card">
              <span>MetaMask</span>
            </div>
            <div className="tool-card">
              <span>Phantom</span>
            </div>
            <div className="tool-card">
              <span>Bitcoin</span>
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section className="py-16">
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

        {/* Contact Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Don't hesitate</h2>
              <h2 className="text-4xl font-bold mb-8">to reach out</h2>
              <p className="text-gray-600 mb-4">
                Fill in the form to connect with me.
              </p>
              <p className="text-gray-600">
                I'll get back ASAP, I swear.
              </p>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <input type="text" placeholder="Your Name" className="contact-input" />
                </div>
                <div>
                  <input type="email" placeholder="Email" className="contact-input" />
                </div>
                <div>
                  <input type="text" placeholder="Phone" className="contact-input" />
                </div>
                <div>
                  <textarea placeholder="Message" rows={5} className="contact-input"></textarea>
                </div>
                <button type="submit" className="contact-btn">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
