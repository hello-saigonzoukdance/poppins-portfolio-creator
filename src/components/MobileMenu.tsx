
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white z-50 shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              onClick={toggleMenu}
              className="py-2 hover:text-purple-600 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/portfolio" 
              onClick={toggleMenu}
              className="py-2 hover:text-purple-600 transition-colors"
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              onClick={toggleMenu}
            >
              <Button className="w-full bg-black text-white rounded-full hover:opacity-90 transition-opacity">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
