import { Camera, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Camera className="w-6 h-6" />
            <span className="text-xl">Balugraphy Official</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-gray-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-gray-600 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-gray-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 hover:text-gray-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left py-2 hover:text-gray-600 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 hover:text-gray-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 hover:text-gray-600 transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
