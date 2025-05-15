import React from 'react';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <header className="fixed w-full z-40 bg-[#FAFAFA] bg-opacity-90 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-xl text-gray-800 font-light tracking-wider">
              Lookbook
            </a>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
                </li>
                <li>
                  <a href="#gallery" className="text-gray-700 hover:text-gray-900">Gallery</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
                </li>
              </ul>
            </nav>
            
            <button 
              className="md:hidden text-gray-700 focus:outline-none" 
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-white pt-16">
          <nav className="p-4">
            <ul className="space-y-6 text-center">
              <li>
                <a 
                  href="#" 
                  className="block text-lg text-gray-800 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className="block text-lg text-gray-800 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="block text-lg text-gray-800 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;