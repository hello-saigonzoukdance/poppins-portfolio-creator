
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  return (
    <nav className="py-6 px-6 flex justify-between items-center max-w-7xl mx-auto">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold mr-12">Ngan</Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:opacity-70 transition-opacity text-sm font-medium">About</Link>
          <Link to="/portfolio" className="hover:opacity-70 transition-opacity text-sm font-medium">Portfolio</Link>
        </div>
      </div>
      
      {/* Contact Button - Desktop */}
      <div className="hidden md:block">
        <Link to="/contact">
          <Button className="bg-black text-white rounded-full px-6 py-2 hover:opacity-90 transition-opacity text-sm">
            Contact Me
          </Button>
        </Link>
      </div>
      
      {/* Mobile Navigation */}
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
